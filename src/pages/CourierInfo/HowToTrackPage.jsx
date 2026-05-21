import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import CourierGrid from "../../components/CourierGrid/CourierGrid";
import { allCouriers } from "../../data/couriers";
import { getSeoContent, getWebPageSchema } from "../../data/seoContent";
import { howToContent } from "../../data/howToContent";
import styles from "./CourierInfo.module.css";

function getCourierName(slug) {
	// Extract courier name from slug like "how-to-dhl-courier-tracking"
	const match = slug.match(/^how-to-(.+)-courier-tracking$/);
	if (!match) return "Courier";
	const raw = match[1];
	// Try to find it in our courier list
	const courier = allCouriers.find(
		(c) => c.slug.replace("-tracking", "") === raw || c.name.toLowerCase().replace(/\s+/g, "-") === raw,
	);
	return courier ? courier.name : raw.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function getCourierSlug(name) {
	const courier = allCouriers.find((c) => c.name.toLowerCase() === name.toLowerCase());
	return courier ? courier.slug : "";
}

const HowToTrackPage = () => {
	const { slug } = useParams();
	const courierName = getCourierName(slug);
	const trackingSlug = getCourierSlug(courierName);
	const seo = getSeoContent(slug, courierName);
	const specificContent = howToContent[slug];

	const seoHelmet = (
		<Helmet>
			<meta name="title" content={seo.title} />
			<meta name="description" content={seo.description} />
			<link rel="canonical" href={`https://trackcouriers.io/${slug}`} />
			<meta name="keywords" content={seo.keywords} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content={`https://trackcouriers.io/${slug}`} />
			<meta property="og:site_name" content="TrackCouriers" />
			<meta property="og:title" content={seo.ogTitle} />
			<meta property="og:description" content={seo.ogDescription} />
			<meta property="og:image" content={seo.ogImage} />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:url" content={`https://trackcouriers.io/${slug}`} />
			<meta name="twitter:title" content={seo.ogTitle} />
			<meta name="twitter:description" content={seo.ogDescription} />
			<meta name="twitter:image" content={seo.ogImage} />
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(getWebPageSchema(slug, seo)),
				}}
			/>
		</Helmet>
	);

	if (specificContent) {
		return (
			<>
				{seoHelmet}
				<div className={styles.page}>
					<h1 className={styles.pageTitle}>{specificContent.title}</h1>
				<hr className={styles.titleDivider} />

				<p className={styles.intro}>{specificContent.intro}</p>

				{specificContent.sections.map((section, idx) => (
					<div key={idx} className={styles.section}>
						{section.title && <h2 className={styles.sectionTitle}>{section.title}</h2>}
						{section.content && <p className={styles.sectionText}>{section.content}</p>}
						{section.list && (
							<ul className={styles.bulletList}>
								{section.list.map((item, i) => (
									<li key={i}>{item}</li>
								))}
							</ul>
						)}
						{section.steps && (
							<ol className={styles.stepList}>
								{section.steps.map((step, i) => (
									<li key={i} className={styles.stepItem}>
										<span className={styles.stepNumber}>{i + 1}</span>
										<div className={styles.stepContent}>
											<h3>{step.title}</h3>
											<p>{step.description}</p>
										</div>
									</li>
								))}
							</ol>
						)}
					</div>
				))}

				{specificContent.conclusion && <p className={styles.conclusion}>{specificContent.conclusion}</p>}

				{trackingSlug && (
					<Link to={`/${trackingSlug}`} className={styles.trackLink}>
						Click here to Track your {courierName} Courier →
					</Link>
				)}

				<CourierGrid />
			</div>
		</>
	);
	}

	return (
		<>
			{seoHelmet}
			<div className={styles.page}>
				<h1 className={styles.pageTitle}>{courierName} Tracking</h1>
			<hr className={styles.titleDivider} />

			<p className={styles.intro}>
				In the digital age, tracking your deliveries is crucial to ensure timely and efficient management of shipments.
				CourierTracking is a powerful third-party tool that aggregates tracking information from various courier services,
				including Blue Dart, FedEx, DHL, and many others. This guide will walk you through tracking your {courierName}{" "}
				shipments.
			</p>

			<h2 className={styles.sectionTitle}>Why Use CourierTracking?</h2>
			<ul className={styles.bulletList}>
				<li>
					<strong>Centralized Tracking:</strong> Track shipments from multiple couriers in one place.
				</li>
				<li>
					<strong>Real-Time Updates:</strong> Receive the latest information on the status and location of your parcels.
				</li>
				<li>
					<strong>User-Friendly Interface:</strong> Easy to navigate, making tracking straightforward and efficient.
				</li>
			</ul>

			<ol className={styles.stepList}>
				<li className={styles.stepItem}>
					<span className={styles.stepNumber}>1</span>
					<div className={styles.stepContent}>
						<h3>Visit the CourierTracking Website</h3>
						<p>
							Open your web browser and navigate to the CourierTracking website. You can find{" "}
							{trackingSlug && <Link to={`/${trackingSlug}`}>{courierName} Tracking</Link>} on our website.
						</p>
					</div>
				</li>
				<li className={styles.stepItem}>
					<span className={styles.stepNumber}>2</span>
					<div className={styles.stepContent}>
						<h3>Locate the Tracking Section</h3>
						<p>
							On the CourierTracking homepage, find the tracking input section. This is typically prominently
							displayed on the main page.
						</p>
					</div>
				</li>
				<li className={styles.stepItem}>
					<span className={styles.stepNumber}>3</span>
					<div className={styles.stepContent}>
						<h3>Enter the Waybill Number</h3>
						<p>
							Input your {courierName} waybill number into the provided tracking input box. Ensure that the number
							is correct to get accurate tracking information.
						</p>
					</div>
				</li>
				<li className={styles.stepItem}>
					<span className={styles.stepNumber}>4</span>
					<div className={styles.stepContent}>
						<h3>Click on the &apos;Track&apos; Button</h3>
						<p>After entering the waybill number, click the &quot;Track&quot; button next to the input box.</p>
					</div>
				</li>
				<li className={styles.stepItem}>
					<span className={styles.stepNumber}>5</span>
					<div className={styles.stepContent}>
						<h3>View Tracking Details</h3>
						<p>
							The website will display the current status, location, and other relevant details of your{" "}
							{courierName} shipment.
						</p>
					</div>
				</li>
			</ol>

			{trackingSlug && (
				<Link to={`/${trackingSlug}`} className={styles.trackLink}>
					Click here to Track your {courierName} Courier →
				</Link>
			)}

			<CourierGrid />
		</div>
		</>
	);
};
export default HowToTrackPage;
