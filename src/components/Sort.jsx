import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterSelectorSort, setSort } from '../redux/slices/filterSlice';

export const sortList = [
	{ name: 'По алфавиту уве-ие', sortProperty: '-title' },
	{ name: 'По алфавиту убы-ие', sortProperty: 'title' },
	{ name: 'Новинки', sortProperty: 'novelty' },
	{ name: 'Есть скидка', sortProperty: 'discount' },
	{ name: 'По цене уве-ие', sortProperty: '-price' },
	{ name: 'По цене убы-ие', sortProperty: 'price' },
];

const Sort = () => {
	const dispatch = useDispatch();
	const sort = useSelector(filterSelectorSort);
	const [openSort, setOpenSort] = React.useState(false);
	const sortRef = React.useRef();

	const onClickListItem = (obj) => {
		dispatch(setSort(obj));
		setOpenSort(false);
	};

	React.useEffect(() => {
		const sortClickOutside = (event) => {
			if (!event.composedPath().includes(sortRef.current)) {
				setOpenSort(false);
			}
		};

		document.body.addEventListener('click', sortClickOutside);

		return () => {
			document.body.removeEventListener('click', sortClickOutside);
		};
	}, []);

	return (
		<div ref={sortRef} className="product__sort">
			<div className="product__sort-label">
				<p>Сортировать</p>
				<span onClick={() => setOpenSort(!openSort)}>{sort.name}</span>
				<svg
					width="15"
					height="15"
					viewBox="0 0 15 15"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M3.74999 5.62502C3.89602 5.62473 4.03754 5.67559 4.14999 5.76877L7.49999 8.56877L10.8562 5.86877C10.9202 5.81685 10.9937 5.77808 11.0727 5.75469C11.1517 5.73129 11.2345 5.72374 11.3164 5.73245C11.3982 5.74116 11.4776 5.76597 11.5499 5.80545C11.6222 5.84494 11.6859 5.89832 11.7375 5.96252C11.7894 6.02645 11.8282 6.10001 11.8516 6.17897C11.875 6.25793 11.8825 6.34074 11.8738 6.42263C11.8651 6.50453 11.8403 6.58389 11.8008 6.65616C11.7613 6.72844 11.7079 6.79219 11.6437 6.84377L7.89374 9.86252C7.78191 9.95445 7.64163 10.0047 7.49686 10.0047C7.3521 10.0047 7.21182 9.95445 7.09999 9.86252L3.34999 6.73752C3.2867 6.68505 3.23439 6.62061 3.19604 6.5479C3.1577 6.47518 3.13407 6.39561 3.12653 6.31375C3.11898 6.23189 3.12766 6.14935 3.15206 6.07084C3.17646 5.99234 3.21611 5.91942 3.26874 5.85627C3.3269 5.78457 3.40022 5.72665 3.48343 5.68667C3.56664 5.64668 3.65767 5.62563 3.74999 5.62502Z"
						fill="#219653"
					/>
				</svg>
			</div>
			<div className="product__sort-popup">
				{openSort && (
					<ul>
						{sortList.map((obj, index) => (
							<li
								key={index}
								onClick={() => onClickListItem(obj)}
								className={sort.sortProperty === obj.sortProperty ? 'active' : ''}>
								{obj.name}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default Sort;
