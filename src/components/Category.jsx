import React from 'react';

const categories = ['Все', 'Чёрный', 'Зелёный', 'Красный', 'Белый', 'Улун'];

const Category = () => {
	const [selectCategory, setSelectCategory] = React.useState(0);

	return (
		<ul className="product__category">
			{categories.map((categoryName, index) => (
				<li
					key={index}
					onClick={() => setSelectCategory(index)}
					className={selectCategory === index ? 'active' : ''}>
					{categoryName}
				</li>
			))}
		</ul>
	);
};

export default Category;
