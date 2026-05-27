import { Helmet } from "react-helmet-async";
import { getSeoContent } from "../../data/seoContent";
import styles from "./ContactPage.module.css";

const ContactPage = () => {
	const seo = getSeoContent("contact-us");

	return (
		<>
			<Helmet>
				<meta name="title" content={seo.title} />
				<meta name="description" content={seo.description} />
				<link rel="canonical" href="https://trackcouriers.io/contact-us" />
				<meta name="keywords" content={seo.keywords} />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://trackcouriers.io/contact-us" />
				<meta property="og:site_name" content="TrackCouriers" />
				<meta property="og:title" content={seo.ogTitle} />
				<meta property="og:description" content={seo.ogDescription} />
				<meta property="og:image" content={seo.ogImage} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:url" content="https://trackcouriers.io/contact-us" />
				<meta name="twitter:title" content={seo.ogTitle} />
				<meta name="twitter:description" content={seo.ogDescription} />
				<meta name="twitter:image" content={seo.ogImage} />
			</Helmet>
			<div>
			<div className={styles.contactWrapper}>
				<div className={styles.contactCard}>
					<div className={styles.contactIcon}>🌐</div>
					<h2 className={styles.contactTitle}>Contact Us</h2>
					<ul className={styles.contactList}>
						<li className={styles.contactItem}>
							<span>📞</span>
							<span>+123-456-7890</span>
						</li>
						<li className={styles.contactItem}>
							<span>🌍</span>
							<a href="http://logicalbytesolution.com/" target="_blank" rel="noopener noreferrer">
								http://logicalbytesolution.com/
							</a>
						</li>
						<li className={styles.contactItem}>
							<span>✉️</span>
							<a href="mailto:info@logicalbytesolution.com">info@logicalbytesolution.com</a>
						</li>
						<li className={styles.contactItem}>
							<span>📍</span>
							<span>403, STC, Surat, 394105.</span>
						</li>
					</ul>
				</div>
				<p className={styles.connectCta}>CONNECT WITH US!</p>
			</div>

			{/* <CourierGrid /> */}
		</div>
		</>
	);
};

export default ContactPage;
