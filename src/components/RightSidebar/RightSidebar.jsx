import { Link } from "react-router-dom";
import styles from "./RightSidebar.module.css";
import { allCouriers } from "../../data/couriers";

const tools = [
	{ name: "Image Type Converter", url: "https://converttools.app/image-converter" },
	{ name: "Json Beautifier online", url: "https://converttools.app/json-viewer" },
	{ name: "Merge PDF online", url: "https://converttools.app/merge-pdf" },
	{ name: "Convert Excel to PDF online", url: "https://converttools.app/excel-to-pdf" },
	{ name: "Multi Image to PDF", url: "https://converttools.app/image-to-pdf/upload-images" },
	{ name: "Password Protected PDF", url: "https://converttools.app/password-protected-pdf" },
];

const topCouriersList = [
	"Aliexpress", "Aramex", "Etsy", "DHL Tracking", "eBay", "Amazon", "Ecom Express", 
	"Delhivery Tracking", "DTDC", "BlueDart", "Flipkart", "Ekart", "DPD Tracking", "Trackon", 
	"Gati Courier", "TNT Courier"
];

const RightSidebar = () => {
    // get top couriers
    const customTopCouriers = topCouriersList.map((name) => {
        // Strip out tracking and courier text to map back to slug dynamically if it doesn't match perfectly.
        const cName = name.toLowerCase().replace(" tracking", "").replace(" courier", "").replace(/\s+/g, "");
        const found = allCouriers.find(c => c.name.toLowerCase().replace(/\s+/g, "") === cName) || { name: name.replace(" Tracking", "").replace(" Courier", ""), slug: `${cName}-tracking` };
        return { name, slug: found.slug };
    });

	return (
		<aside className={styles.sidebar}>
			<div className={styles.widget}>
				<div className={styles.widgetHeader}>Important Tools</div>
				<ul className={styles.toolList}>
					{tools.map((tool, index) => (
						<li key={index}>
							<a href={tool.url} target="_blank" rel="noopener noreferrer">
								<span className={styles.arrow}>➔</span> {tool.name}
							</a>
						</li>
					))}
				</ul>
			</div>

			<div className={styles.widget}>
				<div className={styles.widgetHeader}>Top Courier Tracking</div>
				<div className={styles.courierTags}>
					{customTopCouriers.map((courier) => (
						<Link key={courier.slug} to={`/${courier.slug}`} className={styles.tag}>
							{courier.name}
						</Link>
					))}
				</div>
			</div>
		</aside>
	);
};

export default RightSidebar;
