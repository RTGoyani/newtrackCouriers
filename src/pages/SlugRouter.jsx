import { useParams } from "react-router-dom";
import CustomerSupportPage from "./CourierInfo/CustomerSupportPage";
import HowToTrackPage from "./CourierInfo/HowToTrackPage";
import CourierTrackingPage from "./CourierTracking/CourierTrackingPage";

const SlugRouter = () => {
	const { slug } = useParams();

	if (slug.startsWith("how-to-") && slug.endsWith("-courier-tracking")) {
		return <HowToTrackPage />;
	}

	if (slug.endsWith("-customer-support")) {
		return <CustomerSupportPage />;
	}

	return <CourierTrackingPage />;
};

export default SlugRouter;
