import { useState } from "react";
import CourierGrid from "../../components/CourierGrid/CourierGrid";
import FeaturedCouriers from "../../components/FeaturedCouriers/FeaturedCouriers";
import HeroSection from "../../components/HeroSection/HeroSection";
import InfoSection from "../../components/InfoSection/InfoSection";
import TrackingIframe from "../../components/TrackingIframe/TrackingIframe";
import Loader from "../../components/Loader/Loader";
import { fetchTrackingData } from "../../data/trackingApi";
import styles from "./HomePage.module.css";

const HomePage = () => {
	const [searchData, setSearchData] = useState(null);
	const [loading, setLoading] = useState(false);

	const handleSearch = async (trackingNumber, courier) => {
		setLoading(true);
		setSearchData(null);

		try {
			const response = await fetchTrackingData(trackingNumber, courier);
			setSearchData({
				trackingNumber,
				courier,
				trackingResult: response?.success ? response.data : null,
			});
		} catch (err) {
			console.error("Tracking API error:", err);
			setSearchData({
				trackingNumber,
				courier,
				trackingResult: null,
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className={styles.page}>
			<HeroSection onSearch={handleSearch} />
			{loading && <Loader />}
			{!loading && searchData && (
				<TrackingIframe trackingNumber={searchData.trackingNumber} courierSlug={searchData.courier} trackingResult={searchData.trackingResult} />
			)}
			<FeaturedCouriers />
			<CourierGrid />
			<InfoSection />
		</div>
	);
};

export default HomePage;
