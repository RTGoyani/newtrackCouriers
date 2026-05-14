import { useEffect, useRef } from "react";
import styles from "./AdBanner.module.css";

const slotClassMap = {
	side: styles.sideAd,
	top: styles.topBanner,
	bottom: styles.bottomSticky,
};

const AdBanner = ({ slot = "top" }) => {
	const adRef = useRef(null);
	const isAdLoaded = useRef(false);

	useEffect(() => {
		const el = adRef.current;
		if (!el || isAdLoaded.current) return;

		const loadAd = () => {
			// Only push when the element is visible and has width
			if (isAdLoaded.current || !el.offsetWidth) return;
			try {
				(window.adsbygoogle = window.adsbygoogle || []).push({});
				isAdLoaded.current = true;
			} catch (e) {
				console.error("AdSense error:", e);
			}
		};

		// If already visible, load immediately
		if (el.offsetWidth > 0) {
			loadAd();
			return;
		}

		// Otherwise, watch for the element to become visible (e.g. on resize)
		const observer = new ResizeObserver((entries) => {
			for (const entry of entries) {
				if (entry.contentRect.width > 0) {
					loadAd();
					observer.disconnect();
					break;
				}
			}
		});

		observer.observe(el);

		return () => observer.disconnect();
	}, []);

	return (
		<div className={`${styles.adBanner} ${slotClassMap[slot] || ""}`}>
			<ins
				ref={adRef}
				className="adsbygoogle"
				style={{ display: "block" }}
				data-ad-client="ca-pub-6283785204198629"
				data-ad-slot={["side", "left", "right"].includes(slot) ? "6289894023" : "6694646335"}
				data-ad-format="auto"
				data-full-width-responsive="true"
			/>
		</div>
	);
};

export default AdBanner;
