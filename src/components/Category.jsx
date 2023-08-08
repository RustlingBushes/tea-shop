import React from 'react';

const categories = ['Все', 'Чёрный', 'Зелёный', 'Красный', 'Белый', 'Улун'];

const Category = ({ value, onChangeCategory }) => {
	return (
		<ul className="product__category">
			{categories.map((categoryName, index) => (
				<li
					key={index}
					onClick={() => onChangeCategory(index)}
					className={value === index ? 'active' : ''}>
					{categoryName}
				</li>
			))}
		</ul>
	);
};

export default Category;
