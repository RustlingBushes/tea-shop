import React from 'react';
import qs from 'qs';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { filterSelector, setFilters } from '../redux/slices/filterSlice';
import { setVisible, fetchTeas, teaSelector } from '../redux/slices/teaSlice';

import Category from '../components/Category';
import Sort, { sortList } from '../components/Sort';
import Skeleton from '../components/TeaCard/Skeleton';
import TeaCard from '../components/TeaCard';
import Search from '../components/Search';

const Home = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const isSearch = React.useRef(false);
	const isMounted = React.useRef(false);
	const { categoryId, sort, searchValue } = useSelector(filterSelector);
	const { teaItems, status, visible, loadCount } = useSelector(teaSelector);

	// useWhyDidYouUpdate('Home category', { categoryId });

	const showMore = () => {
		//* Показать больше товаров на главной странице.
		const newVisible = visible + loadCount;
		dispatch(setVisible(newVisible > teaItems.length ? teaItems.length : newVisible));
	};

	const getFetchTeas = async () => {
		//* Отвечает за отображением скелетона и получения пицц с бэка.
		const sortBy = sort.sortProperty.replace('-', '');
		const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
		const category = categoryId > 0 ? `${categoryId}` : '';
		//* Xраним в redux состояние async запроса который обрабатывает его.
		dispatch(
			fetchTeas({
				sortBy,
				order,
				category,
			}),
		);
	};

	React.useEffect(() => {
		//* Если изменили параметры и был первый рендер.
		//*Создание ссылки(парсим её). Для этого используем useNavigate from rrd.
		if (isMounted.current) {
			const queryString = qs.stringify({
				sortProperty: sort.sortProperty,
				categoryId,
			});
			navigate(`?${queryString}`);
		}
		isMounted.current = true;
	}, [categoryId, sort.sortProperty]);

	React.useEffect(() => {
		//*Если был первый рендер, то проверяем URL параметры и сохраняем в REDUX.
		if (window.location.search) {
			const params = qs.parse(window.location.search.substring(1));
			const sort = sortList.find((obj) => obj.sortProperty === params.sortProperty);
			dispatch(
				setFilters({
					...params,
					sort,
				}),
			);
			isSearch.current = true;
		}
	}, []);

	React.useEffect(() => {
		//* Если был первый рендер, то запрашиваем пиццы.
		window.scrollTo(0, 0);
		if (!isSearch.current) {
			getFetchTeas();
		}
		isSearch.current = false;
	}, [categoryId, sort.sortProperty]);

	const skeleton = [...new Array(8)].map((_, index) => <Skeleton key={index} />); //* Фальшивый массив для скелетона
	const tea = teaItems
		.filter((obj) => {
			if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
				return true;
			} else {
				return false;
			}
		})
		.slice(0, visible)
		.map((obj, index) => <TeaCard key={index} {...obj} />); //* Поиск через фильтр

	return (
		<div className="container">
			<div className="product">
				<Search />
				<Category />
				<Sort />
			</div>
			{status === 'error' ? (
				<div className="product__error">
					<h2>Произошла Ошибка 😕</h2>
					<p>К сожалению не удалось получить список товаров.</p>
					<p>Возможно сервер испытывает проблемы или ваше интернет соединение слишком медленное</p>
					<p>Вы можете попытаться ещё раз через некоторое время.</p>
				</div>
			) : (
				<div className="product__items">{status === 'loading' ? skeleton : tea}</div>
			)}

			{visible < teaItems.length && (
				<button className="product__btn-load-more" onClick={showMore}>
					Показать больше
				</button>
			)}
		</div>
	);
};

export default Home;
