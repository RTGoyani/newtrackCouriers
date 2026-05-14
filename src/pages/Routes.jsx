import { BrowserRouter, Route, Routes as RouterRoutes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import ContactPage from "./Contact/ContactPage";
import HomePage from "./Home/HomePage";
import SlugRouter from "./SlugRouter";
import AboutPage from "./Static/AboutPage";
import PrivacyPolicyPage from "./Static/PrivacyPolicyPage";
import TermsPage from "./Static/TermsPage";

const Routes = () => {
	return (
		<BrowserRouter>
			<Layout>
				<RouterRoutes>
					<Route path="/" element={<HomePage />} />
					<Route path="/contact-us" element={<ContactPage />} />
					<Route path="/about-us" element={<AboutPage />} />
					<Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
					<Route path="/terms-and-conditions" element={<TermsPage />} />
					<Route path="/:slug" element={<SlugRouter />} />
				</RouterRoutes>
			</Layout>
		</BrowserRouter>
	);
};

export default Routes;
