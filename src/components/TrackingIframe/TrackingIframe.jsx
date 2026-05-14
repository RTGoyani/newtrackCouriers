import { allCouriers } from "../../data/couriers";
import AdBanner from "../AdBanner/AdBanner";
import styles from "./TrackingIframe.module.css";

const getTrackingUrl = (slug, trackingNumber) => {
	const trackUrlMap = {
		"fedex-tracking": `https://www.fedex.com/wtrk/track/?trknbr=${trackingNumber}`,
		"dhl-tracking": `https://www.dhl.com/global-en/home/tracking/tracking-express.html?submit=1&tracking-id=${trackingNumber}`,
		"ups-tracking": `https://www.ups.com/track?tracknum=${trackingNumber}`,
		"aramex-tracking": `https://www.aramex.com/us/en/track/track-shipments?ShipmentNumber=${trackingNumber}`,
		"delhivery-tracking": `https://www.delhivery.com/tracking/?id=${trackingNumber}`,
		"bluedart-tracking": `https://www.bluedart.com/tracking?track=${trackingNumber}`,
		"dtdc-tracking": `https://www.dtdc.in/tracking/shipment-tracking.asp?refNo=${trackingNumber}`,
		"4px-tracking": `https://track.4px.com/#/result/0/${trackingNumber}`,
		"ebay-tracking": `https://www.ebay.com/sch/i.html?_nkw=${trackingNumber}`,
		"canada-post-tracking": `https://www.canadapost-postescanada.ca/track-reperage/view/resultList?searchFor=${trackingNumber}`,
		"indian-post-tracking": `https://www.indiapost.gov.in/_layouts/15/dop.portal.tracking/trackconsignment.aspx`,
		"ekart-tracking": `https://ekartlogistics.com/track/${trackingNumber}`,
		"xpressbees-tracking": `https://www.xpressbees.com/track?trackid=${trackingNumber}`,
		"shree-tirupati-courier-tracking": `http://www.shreetirupaticourier.net/Track.aspx?txtRefNo=${trackingNumber}`,
		"dpd-tracking": `https://track.dpd.com.pl/paczka/${trackingNumber}`,
		"tnt-express-tracking": `https://www.tnt.com/express/en_gc/site/shipping-tools/tracking.html?searchType=con&cons=${trackingNumber}`,
		"aliexpress-tracking": `https://global.cainiao.com/detail.htm?mailNo=${trackingNumber}`,
		"gati-tracking": `https://www.gatikwe.com/track-consignment?id=${trackingNumber}`,
		"shree-maruti-courier-tracking": `https://www.shreemaruticourier.com/track-your-shipment/?waybill=${trackingNumber}`,
		"flipkart-tracking": `https://www.flipkart.com/track/${trackingNumber}`,
		"amazon-tracking": `https://www.amazon.com/gp/your-account/ship-track?orderID=${trackingNumber}`,
		"shopee-tracking": `https://shopee.com/track/${trackingNumber}`,
		"bluecare-express-tracking": `https://bluecare.express/track/${trackingNumber}`,
		"trackon-tracking": `http://trackoncourier.com/Tracking/MultipleTracking?RefNo=${trackingNumber}`,
		"ecom-tracking": `https://ecomexpress.in/tracking/?tracking_id=${trackingNumber}`,
		"amazon-international-tracking": `https://www.amazon.com/gp/your-account/ship-track?orderID=${trackingNumber}`,
	};

	return trackUrlMap[slug] || `https://www.google.com/search?q=${slug.replace("-tracking", "")}+tracking+${trackingNumber}`;
};

/**
 * Returns icon + colour config for a checkpoint state.
 */
const getCheckpointStyle = (state) => {
	switch (state) {
		case "delivered":
			return { icon: "✅", color: "#28a745", bg: "#e6f9ee" };
		case "intransit":
			return { icon: "🚚", color: "#007bff", bg: "#e8f0fe" };
		case "pickup":
			return { icon: "📦", color: "#6f42c1", bg: "#f0e8ff" };
		case "exception":
		case "undelivered":
			return { icon: "⚠️", color: "#dc3545", bg: "#fdecea" };
		case "outfordelivery":
			return { icon: "📬", color: "#fd7e14", bg: "#fff3e0" };
		default:
			return { icon: "📍", color: "#6c757d", bg: "#f1f3f5" };
	}
};

/**
 * Returns a CSS class name for the shipment state badge.
 */
const getStateBadgeClass = (state) => {
	switch (state) {
		case "delivered":
			return styles.badgeDelivered;
		case "intransit":
			return styles.badgeInTransit;
		case "exception":
		case "undelivered":
			return styles.badgeException;
		default:
			return styles.badgeDefault;
	}
};

const TrackingIframe = ({ trackingNumber, courierSlug, trackingResult }) => {
	if (!trackingNumber || !courierSlug) return null;

	const iframeSrc = getTrackingUrl(courierSlug, trackingNumber);
	const courier = allCouriers.find((c) => c.slug === courierSlug) || {
		name: courierSlug.replace("-tracking", "").toUpperCase(),
		logo: `https://ui-avatars.com/api/?name=${courierSlug[0]}&background=random`,
	};

	const currentDate = new Date().toLocaleDateString("en-GB", {
		day: "2-digit",
		month: "short",
		year: "numeric",
	});

	const hasCheckpoints = trackingResult?.Checkpoints?.length > 0;

	// Group checkpoints by date for timeline display
	const groupedCheckpoints = {};
	if (hasCheckpoints) {
		trackingResult.Checkpoints.forEach((cp) => {
			const dateKey = cp.Date || "Unknown Date";
			if (!groupedCheckpoints[dateKey]) {
				groupedCheckpoints[dateKey] = [];
			}
			groupedCheckpoints[dateKey].push(cp);
		});
	}

	return (
		<section className={styles.trackingSection}>
			<div className={styles.resultContainer}>
				<header className={styles.header}>
					<AdBanner slot="top" />
				</header>

				<div className={styles.trackingIdHeader}>
					<h3>{trackingNumber}</h3>
				</div>

				<div className={styles.courierCard}>
					<div className={styles.courierLogoWrapper}>
						<img src={courier.logo} alt={courier.name} className={styles.courierLogo} />
					</div>
					<div className={styles.courierDetails}>
						<h4>{courier.name}</h4>
						<p className={styles.courierContact}>+1 800-CONTACT-US</p>
					</div>
				</div>

				{/* Shipment Status Badge */}
				{trackingResult && trackingResult.ShipmentState && (
					<div className={styles.shipmentStatusBar}>
						<span className={`${styles.shipmentBadge} ${getStateBadgeClass(trackingResult.ShipmentState)}`}>
							{trackingResult.MostRecentStatus || trackingResult.ShipmentState}
						</span>
					</div>
				)}

				{/* ── Checkpoint Timeline ── */}
				{hasCheckpoints ? (
					<div className={styles.checkpointTimeline}>
						{Object.entries(groupedCheckpoints).map(([date, checkpoints], groupIdx) => (
							<div key={date} className={styles.dateGroup}>
								<div className={styles.dateLabel}>{date}</div>

								<div className={styles.checkpointList}>
									{checkpoints.map((cp, idx) => {
										const cpStyle = getCheckpointStyle(cp.CheckpointState);
										const isFirst = groupIdx === 0 && idx === 0;

										return (
											<div
												key={`${date}-${idx}`}
												className={`${styles.checkpointItem} ${isFirst ? styles.checkpointItemLatest : ""}`}
											>
												<div className={styles.checkpointDot} style={{ borderColor: cpStyle.color }}>
													<span className={styles.checkpointIcon}>{cpStyle.icon}</span>
												</div>

												<div className={styles.checkpointBody} style={{ backgroundColor: cpStyle.bg }}>
													<div className={styles.checkpointTop}>
														<span className={styles.checkpointActivity}>{cp.Activity}</span>
														<span className={styles.checkpointTime}>{cp.Time}</span>
													</div>
													<div className={styles.checkpointMeta}>
														{cp.Location && (
															<span className={styles.checkpointLocation}>
																📍 {cp.Location}
															</span>
														)}
														{cp.CourierName && (
															<span className={styles.checkpointCourier}>{cp.CourierName}</span>
														)}
													</div>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						))}
					</div>
				) : (
					/* ── Fallback: no data ── */
					<div className={styles.statusTimeline}>
						<div className={styles.timelineDate}>
							<span>{currentDate}</span>
						</div>
						<div className={styles.timelineContent}>
							<div className={styles.timelineIndicator}></div>
							<div className={styles.statusMessage}>
								<p>
									No information is available for consignment <strong>{trackingNumber}</strong> right now. You may
									please check the results on{" "}
									<a href={iframeSrc} target="_blank" rel="noopener noreferrer" className={styles.officialLink}>
										{iframeSrc.split("/")[2]}
									</a>
									.
								</p>
								<p className={styles.secondaryMessage}>
									Alternatively, you may please bookmark the page and try again later.{" "}
									<span className={styles.courierHighlight}>{courier.name}</span>
								</p>
							</div>
						</div>
					</div>
				)}

				<footer className={styles.resultFooter}>
					<p>Date & time are usually in local time of the checkpoint location.</p>
				</footer>

				<div className={styles.promoBanner}>
					<div className={styles.promoIcon}>🚆</div>
					<p>
						Traveling by train? <span className={styles.promoAction}>Check PNR Status</span> — Indian Railways PNR
						tracking made easy
					</p>
				</div>

				<div className={styles.socialLinks}>
					<button className={styles.socialBtn}>
						<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
							<path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10V10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
						</svg>
					</button>
					<button className={styles.socialBtn}>
						<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
							<path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
						</svg>
					</button>
				</div>
			</div>
		</section>
	);
};

export default TrackingIframe;
