import { useState } from "react";
import { Link } from "react-router-dom";
import { domesticCouriers, internationalCouriers } from "../../data/couriers";
import styles from "./Header.module.css";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className={styles.header}>
			<Link to="/" className={styles.logo}>
				<span className={styles.logoIcon}>🌐</span>
				<span>Courier Tracking</span>
			</Link>

			<button
				className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
				onClick={() => setMenuOpen((prev) => !prev)}
				aria-label="Toggle navigation menu">
				<span></span>
				<span></span>
				<span></span>
			</button>

			<nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
				<div className={styles.navItem}>
					<Link to="/" className={styles.navLink} onClick={() => setMenuOpen(false)}>
						Home
					</Link>
				</div>

				<div className={styles.navItem}>
					<span className={styles.navLink}>Domestic Courier</span>
					<div className={styles.dropdown}>
						{domesticCouriers.map((c) => (
							<Link
								key={c.slug}
								to={`/${c.slug}`}
								className={styles.dropdownLink}
								onClick={() => setMenuOpen(false)}>
								{c.name}
							</Link>
						))}
					</div>
				</div>

				<div className={styles.navItem}>
					<span className={styles.navLink}>International Courier</span>
					<div className={styles.dropdown}>
						{internationalCouriers.map((c) => (
							<Link
								key={c.slug}
								to={`/${c.slug}`}
								className={styles.dropdownLink}
								onClick={() => setMenuOpen(false)}>
								{c.name}
							</Link>
						))}
					</div>
				</div>

				<div className={styles.navItem}>
					<Link to="/contact-us" className={styles.navLink} onClick={() => setMenuOpen(false)}>
						Contact Us
					</Link>
				</div>
			</nav>
		</header>
	);
};

export default Header;
