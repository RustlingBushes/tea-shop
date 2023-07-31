import React from 'react';
import Category from '../components/Category';
import Sort from '../components/Sort';
import Skeleton from '../components/ProductCart/Skeleton';
import Categoryslide from '../components/SlideCategory';
import ProductCart from '../components/ProductCart';
import Search from '../components/Search';

const Home = () => {
	const [teaCart, setTeaCart] = React.useState([]); //! Получаем товары с back-end
	const [visible, setVisible] = React.useState(8); //! Сколько карточек отображается сначала
	const [loadCount] = React.useState(8); //! Сколько карточек добавляется при показать больше
	const [isLoading, setIsLoading] = React.useState(true); //! Skeleton
	const [selectCategory, setSelectCategory] = React.useState(0); //! Выбор категории
	const [selectSortName, setSelectSortName] = React.useState(0); //! Выбор сортировки

	console.log(selectCategory);

	const showMore = () => {
		const newVisible = visible + loadCount;
		setVisible(newVisible > teaCart.length ? teaCart.length : newVisible);
	};

	React.useEffect(() => {
		setIsLoading(true);
		try {
			fetch(`https://64a683a4096b3f0fcc7feffa.mockapi.io/items?category=${selectCategory}`)
				.then((res) => res.json())
				.then((teaItem) => {
					setTeaCart(teaItem);
					setIsLoading(false);
				});
		} catch (error) {
			alert('Something went wrong!');
			console.log(`Error: ${error}`);
		}
		window.scrollTo(0, 0);
	}, [selectCategory]);
	return (
		<div className="container">
			<Categoryslide />
			<div className="product">
				<Search />
				<Category value={selectCategory} onClickCategory={(index) => setSelectCategory(index)} />
				<Sort value={selectSortName} onClickSortName={(index) => setSelectSortName(index)} />
			</div>
			<div className="product__items">
				{isLoading
					? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
					: teaCart.slice(0, visible).map((obj, index) => <ProductCart key={index} {...obj} />)}
			</div>
			{visible < teaCart.length && (
				<button className="product__btn-load-more" onClick={showMore}>
					Показать больше
				</button>
			)}
		</div>
	);
};

export default Home;