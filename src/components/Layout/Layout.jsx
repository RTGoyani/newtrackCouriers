import { useLocation } from "react-router-dom";
import AdBanner from "../AdBanner/AdBanner";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import RightSidebar from "../RightSidebar/RightSidebar";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
	const location = useLocation();
	const isCustomerSupportPage = location.pathname.endsWith("-customer-support");

	return (
		<div className={styles.layout}>
			<Header />
			{!isCustomerSupportPage && <AdBanner slot="top" />}

			<div className={styles.body}>
				<aside className={styles.sideAdLeft}>
					<AdBanner slot="side" />
				</aside>

				<main className={styles.mainContent}>{children}</main>

				<aside className={`${styles.sideAdRight} ${isCustomerSupportPage ? styles.sidebarRightWide : ""}`}>
					{isCustomerSupportPage ? <RightSidebar /> : <AdBanner slot="side" />}
				</aside>
			</div>

			<AdBanner slot="bottom" />
			<Footer />
		</div>
	);
};

export default Layout;
