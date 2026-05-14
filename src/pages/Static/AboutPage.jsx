import styles from "./StaticPage.module.css";

const AboutPage = () => {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<h1>About Us</h1>
			</header>

			<section className={styles.content}>
				<h3>Welcome to trackcouriers.io!</h3>
				<p>
					We are a specialized platform dedicated to providing easy and efficient courier tracking services to users
					worldwide. Our mission is to simplify the tracking process by bringing various courier services under one
					roof.
				</p>

				<h3>Our Vision</h3>
				<p>
					We believe that tracking shipments should be a seamless experience. Our goal is to provide a reliable tool
					that helps you stay updated with your package's status, whether it's moving across the country or around the
					world.
				</p>

				<h3>Core Services</h3>
				<ul>
					<li>Track packages from over 100+ global couriers.</li>
					<li>Get real-time updates and status tracking.</li>
					<li>Easy-to-use search interface.</li>
					<li>Mobile-responsive design for tracking on the go.</li>
				</ul>

				<h3>Who We Serve</h3>
				<p>
					Whether you're an individual waiting for an online purchase or a small business managing multiple shipments,
					trackcouriers.io is here to help you keep track of what matters.
				</p>
			</section>

			{/* <CourierGrid /> */}
		</div>
	);
};

export default AboutPage;
