import React from 'react';
import axios from 'axios';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setFilters } from '../redux/slices/filterSlice';

import Category from '../components/Category';
import Sort, { sortList } from '../components/Sort';
import Skeleton from '../components/ProductCart/Skeleton';
import Categoryslide from '../components/SlideCategory';
import ProductCart from '../components/ProductCart';
import Search from '../components/Search';

import { SearchContext } from '../App';

const Home = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { categoryId, sort } = useSelector((state) => state.filter); //! Выбор категории и сортировки, храниться в redux.
	//!  Выбор сортировки, храниться в redux.

	const { searchValue } = React.useContext(SearchContext); //!Вытаскиваем стейт используя useContext.
	const [teaCart, setTeaCart] = React.useState([]); //! Получаем товары с back-end
	const [visible, setVisible] = React.useState(8); //! Сколько карточек отображается сначала
	const [loadCount] = React.useState(8); //! Сколько карточек добавляется при показать больше
	const [isLoading, setIsLoading] = React.useState(true); //! Skeleton

	React.useEffect(() => {
		if (window.location.search) {
			const params = qs.parse(window.location.search.substring(1));
			const sort = sortList.find((obj) => obj.sortProperty === params.sortProperty);
			dispatch(
				setFilters({
					...params,
					sort,
				}),
			);
		}
	}, []);

	const showMore = () => {
		//* Показать больше товаров на главной странице.
		const newVisible = visible + loadCount;
		setVisible(newVisible > teaCart.length ? teaCart.length : newVisible);
	};

	React.useEffect(() => {
		//* Отвечает за отображением скелетона и получения пицц с бэка.
		const fetchData = async () => {
			setIsLoading(true);
			const sortBy = sort.sortProperty.replace('-', '');
			const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
			const category = categoryId > 0 ? `${categoryId}` : '';
			try {
				const response = await axios.get(
					`https://64a683a4096b3f0fcc7feffa.mockapi.io/items?category=${category}&sortBy=${sortBy}&order=${order}`,
				);
				setTeaCart(response.data);
				setIsLoading(false);
			} catch (error) {
				alert('Something went wrong!');
				console.error(`Error: ${error}`);
			}
			// window.scrollTo(0, 0);
		};
		fetchData();
	}, [categoryId, sort.sortProperty, searchValue]);

	React.useEffect(() => {
		//*Создание ссылки(парсим её). Для этого используем useNavigate from rrd.
		const queryString = qs.stringify({
			sortProperty: sort.sortProperty,
			categoryId,
		});
		navigate(`?${queryString}`);
	}, [categoryId, sort.sortProperty]);

	const skeleton = [...new Array(8)].map((_, index) => <Skeleton key={index} />); //* Фальшивый массив для скелетона
	const tea = teaCart
		.filter((obj) => {
			if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
				return true;
			} else {
				return false;
			}
		})
		.slice(0, visible)
		.map((obj, index) => <ProductCart key={index} {...obj} />); //* Поиск через фильтр

	return (
		<div className="container">
			<Categoryslide />
			<div className="product">
				<Search />
				<Category />
				<Sort />
			</div>
			<div className="product__items">{isLoading ? skeleton : tea}</div>
			{visible < teaCart.length && (
				<button className="product__btn-load-more" onClick={showMore}>
					Показать больше
				</button>
			)}
		</div>
	);
};

export default Home;
