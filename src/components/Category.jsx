import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterSelector, setCategoryId } from '../redux/slices/filterSlice.js';

const categories = ['Все', 'Чёрный', 'Зелёный', 'Красный', 'Белый', 'Улун'];

const Category = React.memo(() => {
	const dispatch = useDispatch();
	const { categoryId } = useSelector(filterSelector);
	const onChangeCategory = React.useCallback((id) => {
		dispatch(setCategoryId(id));
	}, []);

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
});

Category.displayName = 'Category';

export default Category;
