import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./assets/css/index.css";
import Routes from "./pages/Routes.jsx";

createRoot(document.getElementById("root")).render(
	<HelmetProvider>
		<Routes />
	</HelmetProvider>,
);

// Signal to the pre-renderer that the app has mounted.
// Use requestAnimationFrame + setTimeout to ensure React has painted
// and react-helmet-async has updated the <head> before Puppeteer captures.
window.requestAnimationFrame(() => {
	setTimeout(() => {
		document.dispatchEvent(new Event("render-event"));
	}, 0);
});

