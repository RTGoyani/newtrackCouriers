/**
 * Tracking API Service
 *
 * Calls /api/tracking which is handled by:
 *   - Vite proxy in development
 *   - Express server (server.cjs) in production
 *
 * This avoids CORS since the browser calls same-origin,
 * and the server calls the external API.
 */

const TRACKING_API =
	"https://de.trackcouriers.io/api/tracking/track";

/**
 * Mapping from app slug (e.g. "dtdc-tracking") to the API's courier param (e.g. "dtdc").
 * Add new couriers here as needed.
 */
const slugToCourierParam = {
	"fedex-tracking": "fedex",
	"dhl-tracking": "dhl",
	"ups-tracking": "ups",
	"aramex-tracking": "aramex",
	"delhivery-tracking": "delhivery",
	"bluedart-tracking": "bluedart",
	"dtdc-tracking": "dtdc",
	"4px-tracking": "4px",
	"ebay-tracking": "ebay",
	"canada-post-tracking": "canada-post",
	"indian-post-tracking": "india-post",
	"ekart-tracking": "ekart",
	"xpressbees-tracking": "xpressbees",
	"shree-tirupati-courier-tracking": "shree-tirupati",
	"dpd-tracking": "dpd",
	"tnt-express-tracking": "tnt",
	"aliexpress-tracking": "cainiao",
	"gati-tracking": "gati",
	"shree-maruti-courier-tracking": "shree-maruti",
	"flipkart-tracking": "flipkart",
	"amazon-tracking": "amazon",
	"shopee-tracking": "shopee",
	"bluecare-express-tracking": "bluecare-express",
	"trackon-tracking": "trackon",
	"ecom-tracking": "ecom-express",
	"amazon-international-tracking": "amazon",
};

/**
 * Fetches tracking data.
 *
 * @param {string} trackingNumber - The consignment/tracking number.
 * @param {string} courierSlug   - The app-internal slug, e.g. "dtdc-tracking".
 * @returns {Promise<object>}      Resolved with the API response JSON.
 */
export async function fetchTrackingData(trackingNumber, courierSlug) {
	const courierParam =
		slugToCourierParam[courierSlug] || courierSlug.replace("-tracking", "");

	const url = `${TRACKING_API}?number=${encodeURIComponent(trackingNumber)}&courier=${encodeURIComponent(courierParam)}`;

	const res = await fetch(url);
	if (!res.ok) {
		throw new Error(`Tracking API returned ${res.status}`);
	}

	return await res.json();
}
