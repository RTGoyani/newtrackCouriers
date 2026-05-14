import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerLinks}>
				<Link to="/privacy-policy">Privacy Policy</Link>
			</div>

			<p>Copyright © trackcouriers.io All Rights Reserved.</p>

			<p className={styles.developer}>
				Developed By :{" "}
				<a href="https://logicalbytesolution.com" target="_blank" rel="noopener noreferrer">
					Logical Byte Solution.
				</a>
			</p>
		</footer>
	);
};

export default Footer;
