import styles from "./InfoSection.module.css";

const InfoSection = () => {
	return (
		<section className={styles.section}>
			<h2 className={styles.heading}>Track Shipments by Any Courier or Postal Service!!</h2>
			<h3 className={styles.subheading}>How to Track Your Package</h3>
			<p className={styles.description}>
				It sounds like you&apos;re interested in tracking shipments from various courier services. Tracking information
				typically consists of a unique string of characters or numbers provided by the courier company. Each courier has
				its own format and method for tracking shipments. Here are some general steps you can follow to track a shipment:
			</p>

			<ol className={styles.stepsList}>
				<li className={styles.step}>
					<strong>Obtain Tracking Number:</strong> Get the tracking number from the sender or from any shipping
					confirmation email or receipt.
				</li>
				<li className={styles.step}>
					<strong>Visit Courier&apos;s Website:</strong> Go to the official website of the courier company handling your
					shipment. Common courier companies include FedEx, UPS, DHL, and USPS.
				</li>
				<li className={styles.step}>
					<strong>Enter Tracking Number:</strong> Locate the tracking or shipment tracking section on the website. Enter
					the tracking number provided to you.
				</li>
				<li className={styles.step}>
					<strong>Track Shipment:</strong> Once you enter the tracking number, the courier&apos;s system will provide
					you with the current status and location of your shipment.
				</li>
				<li className={styles.step}>
					<strong>Contact Customer Support:</strong> If you encounter any issues or need further assistance, most
					courier companies provide customer support services that you can contact for help.
				</li>
			</ol>
		</section>
	);
};

export default InfoSection;
