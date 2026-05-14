import { Link } from "react-router-dom";
import { allCouriers } from "../../data/couriers";
import styles from "./CourierGrid.module.css";

const CourierGrid = () => {
	return (
		<section className={styles.section}>
			<h2 className={styles.sectionTitle}>Courier Company List</h2>

			<div className={styles.grid}>
				{allCouriers.map((courier) => (
					<Link key={courier.slug} to={`/${courier.slug}`} className={styles.card}>
						<img src={courier.logo} alt={courier.name} className={styles.cardLogo} loading="lazy" />
						<span className={styles.cardName}>{courier.name}</span>
					</Link>
				))}
			</div>
		</section>
	);
};

export default CourierGrid;
