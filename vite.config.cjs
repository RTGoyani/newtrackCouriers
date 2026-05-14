const path = require("path");
const { transformSync } = require("@babel/core");
const reactPlugin = require("@vitejs/plugin-react-swc");
const { defineConfig } = require("vite");
const prerenderPlugin = require("vite-plugin-prerender");
const svgrPlugin = require("vite-plugin-svgr");

// Handle potential .default from ESM-built-as-CJS plugins
const react = reactPlugin.default || reactPlugin;
const prerender = prerenderPlugin.default || prerenderPlugin;
const svgr = svgrPlugin.default || svgrPlugin;

// Get the PuppeteerRenderer constructor from the plugin
const PuppeteerRenderer = prerender.PuppeteerRenderer;

function babelLocatorPlugin() {
	return {
		name: "babel-locator",
		enforce: "pre",
		apply: "serve",
		transform(code, id) {
			if (id.includes("node_modules") || !/\.[jt]sx?$/.test(id)) return;
			const result = transformSync(code, {
				filename: id,
				sourceMaps: true,
			});
			return result ? { code: result.code, map: result.map } : null;
		},
	};
}

module.exports = defineConfig(() => ({
	plugins: [
		babelLocatorPlugin(),
		react(),
		svgr(),
		prerender({
			staticDir: path.join(__dirname, "dist"),
			routes: [
				"/",
				"/contact-us",
				"/about-us",
				"/privacy-policy",
				"/terms-and-conditions",
				"/fedex-tracking",
				"/dhl-tracking",
				"/ups-tracking",
				"/ekart-tracking",
				"/4px-tracking",
				"/indian-post-tracking",
				"/canada-post-tracking",
				"/xpressbees-tracking",
				"/bluedart-tracking",
				"/aramex-tracking",
				"/dtdc-tracking",
				"/delhivery-tracking",
				"/shree-tirupati-courier-tracking",
				"/dpd-tracking",
				"/ebay-tracking",
				"/tnt-express-tracking",
				"/aliexpress-tracking",
				"/gati-tracking",
				"/shree-maruti-courier-tracking",
				"/flipkart-tracking",
				"/amazon-tracking",
				"/shopee-tracking",
				"/bluecare-express-tracking",
				"/trackon-tracking",
				"/amazon-customer-support",
				"/fedex-customer-support",
				"/dhl-customer-support",
				"/ups-customer-support",
				"/ekart-customer-support",
				"/4px-customer-support",
				"/indian-post-customer-support",
				"/canada-post-customer-support",
				"/xpressbees-customer-support",
				"/bluedart-customer-support",
				"/aramex-customer-support",
				"/dtdc-customer-support",
				"/delhivery-customer-support",
				"/shree-tirupati-courier-customer-support",
				"/dpd-customer-support",
				"/ebay-customer-support",
				"/tnt-express-customer-support",
				"/aliexpress-customer-support",
				"/gati-customer-support",
				"/shree-maruti-courier-customer-support",
				"/flipkart-customer-support",
				"/shopee-customer-support",
				"/bluecare-express-customer-support",
				"/trackon-customer-support",
				"/how-to-bluecare-express-courier-tracking",
				"/how-to-trackon-courier-tracking",
				"/how-to-shopee-courier-tracking",
				"/how-to-amazon-courier-tracking",
				"/how-to-flipkart-courier-tracking",
				"/how-to-shree-maruti-courier-courier-tracking",
				"/how-to-gati-courier-tracking",
				"/how-to-aliexpress-courier-tracking",
				"/how-to-tnt-express-courier-tracking",
				"/how-to-dpd-courier-tracking",
				"/how-to-ebay-courier-tracking",
				"/how-to-shree-tirupati-courier-courier-tracking",
				"/how-to-delhivery-courier-tracking",
				"/how-to-dtdc-courier-tracking",
				"/how-to-aramex-courier-tracking",
				"/how-to-xpressbees-courier-tracking",
				"/how-to-canada-post-courier-tracking",
				"/how-to-indian-post-courier-tracking",
				"/how-to-4px-courier-tracking",
				"/how-to-ekart-courier-tracking",
				"/how-to-ups-courier-tracking",
				"/how-to-dhl-courier-tracking",
				"/how-to-fedex-courier-tracking",
				"/how-to-bluedart-courier-tracking",
			],

			// Properly configured Puppeteer renderer
			renderer: new PuppeteerRenderer({
				// Wait for the "render-event" dispatched by main.jsx after React mount
				renderAfterDocumentEvent: "render-event",
				headless: true,
				// Process 4 routes at a time to prevent resource exhaustion
				maxConcurrentRoutes: 4,
				// Use system Chrome — bundled Chromium from puppeteer 1.20.0 crashes on modern macOS
				executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
			}),

			// Clean up and validate rendered HTML before writing to disk
			postProcess(renderedRoute) {
				// Prevent redirect issues — always use the original route
				renderedRoute.route = renderedRoute.originalRoute;
				return renderedRoute;
			},
		}),
	],
	server: {
		proxy: {
			"/api/tracking": {
				target: "https://de.trackcouriers.io",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api\/tracking/, "/api/Tracking/track"),
			},
		},
	},
}));
