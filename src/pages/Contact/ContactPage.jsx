import styles from "./ContactPage.module.css";

const ContactPage = () => {
	return (
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
	);
};

export default ContactPage;
