import { useState } from "react";
import { allCouriers } from "../../data/couriers";
import styles from "./HeroSection.module.css";

const HeroSection = ({ onSearch }) => {
	const [trackingNumber, setTrackingNumber] = useState("");
	const [courier, setCourier] = useState("");

	const handleSearch = (e) => {
		e.preventDefault();
		if (onSearch) {
			onSearch(trackingNumber, courier);
		}
	};

	return (
		<section className={styles.hero}>
			<form className={styles.searchForm} onSubmit={handleSearch}>
				<input
					type="text"
					className={styles.trackingInput}
					placeholder="Enter a Tracking No."
					aria-label="Enter tracking number"
					value={trackingNumber}
					onChange={(e) => setTrackingNumber(e.target.value)}
					required
				/>
				<select
					className={styles.courierSelect}
					aria-label="Select courier"
					value={courier}
					onChange={(e) => setCourier(e.target.value)}
					required>
					<option value="" disabled>
						Select Courier
					</option>
					{allCouriers.map((c) => (
						<option key={c.slug} value={c.slug}>
							{c.name}
						</option>
					))}
				</select>
				<button type="submit" className={styles.searchBtn}>
					🔍 Search Now
				</button>
			</form>
		</section>
	);
};

export default HeroSection;
