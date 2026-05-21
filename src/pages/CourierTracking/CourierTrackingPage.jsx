import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import CourierGrid from "../../components/CourierGrid/CourierGrid";
import Loader from "../../components/Loader/Loader";
import TrackingIframe from "../../components/TrackingIframe/TrackingIframe";
import { getCourierContent } from "../../data/courierContent";
import { allCouriers } from "../../data/couriers";
import { getSeoContent, getWebPageSchema } from "../../data/seoContent";
import { fetchTrackingData } from "../../data/trackingApi";
import styles from "./CourierTrackingPage.module.css";

const CourierTrackingPage = () => {
	const { slug } = useParams();
	const content = getCourierContent(slug);
	const courier = allCouriers.find((c) => c.slug === slug);
	const courierKey = slug.replace("-tracking", "");
	const [searchData, setSearchData] = useState(null);
	const [loading, setLoading] = useState(false);

	const seo = getSeoContent(slug, courier?.name || content.title.replace(" Courier Tracking", ""));

	useEffect(() => {
		window.scrollTo(0, 0);
		setSearchData(null);
		setLoading(false);
	}, [slug]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const trackingNo = e.target.trackingNo.value;
		setLoading(true);
		setSearchData(null);

		try {
			const response = await fetchTrackingData(trackingNo, slug);
			setSearchData({
				trackingNumber: trackingNo,
				courier: slug,
				trackingResult: response?.success ? response.data : null,
			});
		} catch (err) {
			console.error("Tracking API error:", err);
			setSearchData({
				trackingNumber: trackingNo,
				courier: slug,
				trackingResult: null,
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<Helmet>
				{/* 1. BROWSER TAB TITLE */}
				{/* <title>{seo.title}</title> */}

				{/* 2. STANDARD SEO META TAGS */}
				<meta name="title" content={seo.title} />
				<meta name="description" content={seo.description} />
				<link rel="canonical" href={`https://trackcouriers.io/${slug}`} />
				<meta name="keywords" content={seo.keywords} />

				{/* 3. FACEBOOK & LINKEDIN (Open Graph) */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content={`https://trackcouriers.io/${slug}`} />
				<meta property="og:site_name" content="TrackCouriers" />
				<meta property="og:title" content={seo.ogTitle} />
				<meta property="og:description" content={seo.ogDescription} />
				<meta property="og:image" content={seo.ogImage} />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />

				{/* 4. TWITTER CARD */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:url" content={`https://trackcouriers.io/${slug}`} />
				<meta name="twitter:title" content={seo.ogTitle} />
				<meta name="twitter:description" content={seo.ogDescription} />
				<meta name="twitter:image" content={seo.ogImage} />

				{/* 5. GOOGLE STRUCTURED DATA (JSON-LD) */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(getWebPageSchema(slug, seo)),
					}}
				/>

				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "SoftwareApplication",
							name: seo.appName,
							operatingSystem: "All",
							applicationCategory: "UtilitiesApplication",
							url: `https://trackcouriers.io/${slug}`,
							offers: {
								"@type": "Offer",
								price: "0",
								priceCurrency: seo.priceCurrency,
							},
						}),
					}}
				/>
			</Helmet>

			<div>
				{/* Hero */}
				<section className={styles.hero} key={slug}>
					<h1 className={styles.heroTitle}>{content.title}</h1>
					<p className={styles.heroSubtitle}>
						Track packages from US Post, Canada Post, Indian Post, UPS, FedEx, DTDC, Delhivery, Pitney Bowes, eBay,
						Amazon
					</p>

					<form className={styles.searchRow} onSubmit={handleSubmit}>
						<input
							name="trackingNo"
							type="text"
							className={styles.searchInput}
							placeholder="Enter a Tracking No."
							required
						/>
						<button type="submit" className={styles.searchBtn}>
							🔍 Search Now
						</button>
					</form>
				</section>

				{loading && <Loader />}
				{!loading && searchData && (
					<TrackingIframe trackingNumber={searchData.trackingNumber} courierSlug={searchData.courier} trackingResult={searchData.trackingResult} />
				)}

				{/* Divider + Support Card */}
				<hr className={styles.divider} />
				<div className={styles.supportCard}>
					{courier && <img src={courier.logo} alt={courier.name} className={styles.supportLogo} />}
					<div className={styles.supportItem}>
						<h3>How to track {content.title.replace(" Courier Tracking", "")} shipment.</h3>
						<Link
							to={`/how-to-${courierKey}-courier-tracking`}
							className={`${styles.supportLink} ${styles.supportLinkGreen}`}>
							Click here
							<span className={styles.supportLinkArrow}>➜</span>
						</Link>
					</div>
					<div className={styles.supportItem}>
						<h3>Customer Support.</h3>
						<Link
							to={`/${courierKey}-customer-support`}
							className={`${styles.supportLink} ${styles.supportLinkOrange}`}>
							Contact to {content.title.replace(" Courier Tracking", "")}
							<span className={styles.supportLinkArrow}>➜</span>
						</Link>
					</div>
				</div>

				{/* About */}
				<section id="about" className={styles.aboutSection}>
					<h2 className={styles.aboutTitle}>About {content.title.replace(" Courier Tracking", "")}</h2>
					<hr className={styles.aboutDivider} />
					<p className={styles.aboutText}>{content.about}</p>

					<h3 className={styles.subHeading}>{content.title.replace(" Courier Tracking", "")} Tracking Services:</h3>
					{content.services.map((service, i) => (
						<div key={i} className={styles.serviceItem}>
							<h4>
								{i + 1}. {service.name}:
							</h4>
							{service.description ? (
								<p className={styles.aboutText} style={{ whiteSpace: "pre-line" }}>
									{service.description}
								</p>
							) : (
								<ul>
									<li>
										<strong>Purpose:</strong> {service.purpose}
									</li>
									<li>
										<strong>Tracking Number Format:</strong> {service.format}
									</li>
								</ul>
							)}
						</div>
					))}
				</section>

				{/* Tracking Status List */}
				{content.trackingStatusList && (
					<section className={styles.trackingStatusSection}>
						<div style={{ textAlign: "center" }}>
							<h2 className={styles.aboutTitle}>
								{content.title.replace(" Courier Tracking", "")} Tracking Status List
							</h2>
							<hr className={styles.aboutDivider} />
						</div>
						{content.trackingStatusListDescription && (
							<p className={styles.aboutText}>{content.trackingStatusListDescription}</p>
						)}
						<div className={styles.tableResponsive}>
							<table className={styles.statusTable}>
								<thead>
									<tr>
										<th>Tracking Status</th>
										<th>Description</th>
									</tr>
								</thead>
								<tbody>
									{content.trackingStatusList.map((statusItem, i) => (
										<tr key={i}>
											<td>{statusItem.status}</td>
											<td style={{ whiteSpace: "pre-line" }}>{statusItem.description}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</section>
				)}

				{/* FAQ */}
				<section id="faq" className={styles.faq}>
					<div style={{ textAlign: "center" }}>
						<h2 className={styles.aboutTitle}>Frequently Asked Questions</h2>
						<hr className={styles.aboutDivider} />
					</div>
					<div className={styles.accordionContainer}>
						{content.faq.map((item, i) => (
							<details key={i} className={styles.faqDetails}>
								<summary className={styles.faqSummary}>{item.q}</summary>
								<div className={styles.faqContent} style={{ whiteSpace: "pre-line" }}>
									{item.a}
								</div>
							</details>
						))}
					</div>
				</section>

				{/* Courier Grid */}
				<CourierGrid />
			</div>
		</>
	);
};

export default CourierTrackingPage;
