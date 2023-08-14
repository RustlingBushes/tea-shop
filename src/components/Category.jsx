// import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice.js';

const categories = ['Все', 'Чёрный', 'Зелёный', 'Красный', 'Белый', 'Улун'];

const Category = () => {
	const dispatch = useDispatch();
	const { categoryId } = useSelector((state) => state.filter);
	const onChangeCategory = (id) => {
		dispatch(setCategoryId(id));
	};

	// const onChangeCategory = React.useCallback((id) => {
	// 	dispatch(setCategoryId(id));
	// }, []);

	return (
		<ul className="product__category">
			{categories.map((categoryName, index) => (
				<li
					key={index}
					onClick={() => onChangeCategory(index)}
					className={categoryId === index ? 'active' : ''}>
					{categoryName}
				</li>
			))}
		</ul>
	);
};

export default Category;
