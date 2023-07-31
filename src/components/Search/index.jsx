import styles from './Search.module.scss';

const Search = () => {
	return (
		<div className={styles.root}>
			<input className={styles.input} type="text" placeholder="Поиск..." />
			<svg
				className={styles.icon}
				width="30"
				height="30"
				viewBox="0 0 30 30"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M14.5144 2.5C7.87904 2.5 2.5 7.76024 2.5 14.2491C2.5 20.7379 7.87904 25.9982 14.5144 25.9982C17.3523 25.9982 19.9604 25.0359 22.0162 23.4269L25.9212 27.2358L26.0251 27.3233C26.3877 27.5857 26.9017 27.5558 27.2297 27.2341C27.5906 26.8803 27.5898 26.3074 27.228 25.9545L23.3689 22.1904C25.3312 20.0993 26.5289 17.311 26.5289 14.2491C26.5289 7.76024 21.1498 2.5 14.5144 2.5ZM14.5144 4.30968C20.1278 4.30968 24.6783 8.7597 24.6783 14.2491C24.6783 19.7385 20.1278 24.1885 14.5144 24.1885C8.90108 24.1885 4.35055 19.7385 4.35055 14.2491C4.35055 8.7597 8.90108 4.30968 14.5144 4.30968Z"
					fill="#21b135"
				/>
			</svg>
		</div>
	);
};

export default Search;