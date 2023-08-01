import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

const Pagination = () => {
	return (
		<ReactPaginate
			className={styles.root}
			breakLabel="..."
			nextLabel={
				<svg
					className={styles.next}
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M5.16393 13.1727C4.96523 12.9779 4.94716 12.673 5.10974 12.4582L5.16393 12.3967L9.64894 8.00004L5.16393 3.60339C4.96523 3.40859 4.94716 3.10376 5.10974 2.88896L5.16393 2.82742C5.36264 2.63262 5.67358 2.61491 5.8927 2.77429L5.95547 2.82742L10.8361 7.61205C11.0348 7.80685 11.0528 8.11168 10.8903 8.32649L10.8361 8.38803L5.95547 13.1727C5.73689 13.3869 5.38251 13.3869 5.16393 13.1727Z"
						fill="#333333"
					/>
				</svg>
			}
			onPageChange={(event) => console.log(event)}
			pageRangeDisplayed={4}
			pageCount={3}
			previousLabel={
				<svg
					className={styles.back}
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M10.8361 2.82734C11.0348 3.02214 11.0528 3.32696 10.8903 3.54177L10.8361 3.60331L6.35105 7.99996L10.8361 12.3966C11.0348 12.5914 11.0528 12.8962 10.8903 13.111L10.8361 13.1726C10.6374 13.3674 10.3264 13.3851 10.1073 13.2257L10.0445 13.1726L5.16393 8.38795C4.96523 8.19315 4.94716 7.88832 5.10974 7.67351L5.16393 7.61197L10.0445 2.82734C10.2631 2.61306 10.6175 2.61306 10.8361 2.82734Z"
						fill="#333333"
					/>
				</svg>
			}
			renderOnZeroPageCount={null}
		/>
	);
};

export default Pagination;
