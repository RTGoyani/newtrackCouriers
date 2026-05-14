import { Link } from "react-router-dom";
import { featuredCouriers } from "../../data/couriers";
import styles from "./FeaturedCouriers.module.css";

const FeaturedCouriers = () => {
	return (
		<section className={styles.section}>
			<h2 className={styles.heading}>Domestic and International Package Tracking</h2>
			<p className={styles.subheading}>
				No matter which online store or marketplace you purchased from, you can always track the entire journey of your
				order with our parcel tracking service.
			</p>

			<div className={styles.grid}>
				{featuredCouriers.map((courier) => (
					<div key={courier.slug} className={styles.card}>
						<div className={styles.cardHeader}>
							<img src={courier.logo} alt={courier.name} className={styles.cardLogo} loading="lazy" />
							<h3 className={styles.cardName}>{courier.name}</h3>
						</div>
						<p className={styles.cardDescription}>{courier.description}</p>
						<Link to={`/${courier.slug}`} className={styles.cardCta}>
							{courier.cta}
						</Link>
					</div>
				))}
			</div>
		</section>
	);
};

export default FeaturedCouriers;
