import styles from "./Loader.module.css";

const Loader = ({ message = "Searching for tracking information..." }) => {
	return (
		<div className={styles.loaderContainer}>
			<div className={styles.spinner}>
				<div className={styles.doubleBounce1}></div>
				<div className={styles.doubleBounce2}></div>
			</div>
			<p className={styles.loaderMessage}>{message}</p>
		</div>
	);
};

export default Loader;
