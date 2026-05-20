import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { allCouriers } from "../../data/couriers";
import { getSeoContent } from "../../data/seoContent";
import { getSupportContent } from "../../data/supportContent";
import styles from "./CourierInfo.module.css";

function getCourierName(slug) {
	// Extract courier name from slug like "delhivery-customer-support"
	const match = slug.match(/^(.+)-customer-support$/);
	if (!match) return "Courier";
	const raw = match[1];
	const courier = allCouriers.find(
		(c) => c.slug.replace("-tracking", "") === raw || c.name.toLowerCase().replace(/\s+/g, "-") === raw,
	);
	return courier ? courier.name : raw.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

const CustomerSupportPage = () => {
	const { slug } = useParams();
	const courierName = getCourierName(slug);
	const courier = allCouriers.find((c) => c.slug === slug);
	const content = getSupportContent(slug, courierName);

	const seo = getSeoContent(slug, courier?.name || content.title.replace(" Courier Tracking", ""));

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

			<div className={styles.page}>
				<h1 className={styles.pageTitle}>{content.title}</h1>
				<hr className={styles.titleDivider} />

				<p className={styles.supportInfo} style={{ whiteSpace: "pre-wrap" }}>
					{content.about}
				</p>

				<div className={styles.contactGrid}>
					{content.contacts.map((contact, index) => (
						<div key={index} className={styles.contactCard}>
							<h3>{contact.title}</h3>
							{contact.type === "email" ? (
								<a href={`mailto:${contact.value}`}>{contact.value}</a>
							) : contact.type === "link" ? (
								<a href={contact.value} target="_blank" rel="noopener noreferrer">
									{contact.value}
								</a>
							) : (
								<p>{contact.value}</p>
							)}
						</div>
					))}
				</div>

				{content.locations && content.locations.length > 0 && (
					<table className={styles.locationsTable}>
						<thead>
							<tr>
								<th>City</th>
								<th>Contact Numbers</th>
								<th>{content.locations[0].email ? "Email" : "Address"}</th>
							</tr>
						</thead>
						<tbody>
							{content.locations.map((loc, idx) => (
								<tr key={idx}>
									<td>{loc.city}</td>
									<td>
										<strong>📞 {loc.phone}</strong>
									</td>
									<td style={{ whiteSpace: "pre-wrap" }}>
										{loc.email ? <a href={`mailto:${loc.email}`}>{loc.email}</a> : loc.address}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>
		</>
	);
};

export default CustomerSupportPage;
