import styles from "./StaticPage.module.css";

const PrivacyPolicyPage = () => {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<h1>Privacy Policy</h1>
			</header>

			<section className={styles.content}>
				<p>
					At trackcouriers.io, we are committed to protecting the privacy of our users. This Privacy Policy outlines
					how we collect, use, disclose, and protect your information when you use our website and its services.
				</p>

				<h3>Information Collection</h3>
				<p>
					We do not collect any personal information from our users. When you use our website for tracking we do not
					require you to provide any personal details or create an account. We only collect non-personal information
					such as your IP address, browser type, device type, and usage statistics to improve our services and enhance
					user experience.
				</p>

				<h3>Use of Information</h3>
				<p>
					The non-personal information we collect is solely used for the purpose of analyzing website traffic,
					identifying technical issues, improving our services, and understanding user preferences. We do not sell,
					trade, or transfer this information to third parties for any purpose.
				</p>

				<h3>Cookies</h3>
				<p>
					We may use cookies to make your visit easier and more secure. Cookies are small files stored on your
					computer. Some cookies send information to us, and some send it to others, like Google Analytics. They might
					store personal details like your name or email. By using our website, you agree to our use of cookies. If
					you don't want this, please disable cookies or stop using the site.
				</p>

				<h3>Third-Party Links</h3>
				<p>
					Our website might have links to other websites or services for your convenience. However, we don't control
					what they do, their content, or their privacy policies. We recommend checking the privacy policies of any
					third-party sites you visit.
				</p>

				<h3>Data Security</h3>
				<p>
					We don't keep any user information on our servers, so there's no risk of anyone accessing personal data
					without permission. We work hard to keep our website secure, but remember that no online system is completely
					safe. We always watch for and fix any security issues quickly to protect our users' information.
				</p>

				<h3>Children's Privacy</h3>
				<p>
					Our services are not for children under 13. We don't collect personal information from children under 13 on
					purpose. If you are a parent or guardian and think your child has given us personal information, please
					contact us right away, and we will remove it from our servers.
				</p>

				<h3>Changes to this Privacy Policy</h3>
				<p>
					We can update this Privacy Policy whenever necessary. If we do, we'll post the changes here and update the
					date. Please check this page occasionally to stay informed about any changes.
				</p>

				<h3>Contact Us</h3>
				<p>
					If you have any questions or concerns about our Privacy Policy or how we handle your information, please
					email us at{" "}
					<a href="mailto:contact@trackcouriers.io">contact@trackcouriers.io</a>.
				</p>

				<h3>Consent</h3>
				<p>
					When you use trackcouriers.io, you are agreeing to our Privacy Policy. If there's anything you don't agree
					with, please stop using our website and services.
				</p>
			</section>
		</div>
	);
};

export default PrivacyPolicyPage;
