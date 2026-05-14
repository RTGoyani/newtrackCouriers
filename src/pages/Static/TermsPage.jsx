import styles from "./StaticPage.module.css";

const TermsPage = () => {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<h1>Terms & Conditions</h1>
			</header>

			<section className={styles.content}>
				<p>Last updated: March 19, 2026</p>

				<h3>1. Acceptance of Terms</h3>
				<p>
					By accessing and using trackcouriers.io, you agree to be bound by these Terms and Conditions. If you do not
					agree with any part of these terms, please do not use our website.
				</p>

				<h3>2. Use of Service</h3>
				<p>
					The services provided are for personal use only. You may use our platform to track your individual shipments.
					Commercial or automated use of the tracking tools is prohibited without written consent.
				</p>

				<h3>3. Accuracy of Information</h3>
				<p>
					While we strive for accuracy, the tracking information provided on this platform is fetched from third-party
					courier services. We cannot guarantee the absolute accuracy or timeliness of such information.
				</p>

				<h3>4. Intellectual Property</h3>
				<p>
					The content, layout, and software used on trackcouriers.io are our property and are protected by relevant
					intellectual property laws. You may not copy or reproduce any part of our website without permission.
				</p>

				<h3>5. Limitation of Liability</h3>
				<p>
					We shall not be held liable for any loss or damage arising from your use of our website or from any delay or
					failure in delivery of tracking information.
				</p>

				<h3>6. Changes to Terms</h3>
				<p>
					We reserve the right to modify these Terms and Conditions at any time. Your continued use of the website after
					changes are posted will constitute your acceptance of the new terms.
				</p>
			</section>

			{/* <CourierGrid /> */}
		</div>
	);
};

export default TermsPage;
