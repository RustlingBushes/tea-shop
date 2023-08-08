import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';

import Category from '../components/Category';
import Sort from '../components/Sort';
import Skeleton from '../components/ProductCart/Skeleton';
import Categoryslide from '../components/SlideCategory';
import ProductCart from '../components/ProductCart';
import Search from '../components/Search';

import { SearchContext } from '../App';

const Home = () => {
	const dispatch = useDispatch();
	const { categoryId, sort } = useSelector((state) => state.filter); //! Выбор категории и сортировки, храниться в redux.
	const sortType = sort.sortProperty; //!  Выбор сортировки, храниться в redux.

	const { searchValue } = React.useContext(SearchContext); //!Вытаскиваем стейт используя useContext.
	const [teaCart, setTeaCart] = React.useState([]); //! Получаем товары с back-end
	const [visible, setVisible] = React.useState(8); //! Сколько карточек отображается сначала
	const [loadCount] = React.useState(8); //! Сколько карточек добавляется при показать больше
	const [isLoading, setIsLoading] = React.useState(true); //! Skeleton

	const onChangeCategory = (id) => {
		dispatch(setCategoryId(id));
	};

	const skeleton = [...new Array(8)].map((_, index) => <Skeleton key={index} />);
	const tea = teaCart
		.filter((obj) => {
			if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
				return true;
			} else {
				return false;
			}
		})
		.slice(0, visible)
		.map((obj, index) => <ProductCart key={index} {...obj} />);

	const showMore = () => {
		const newVisible = visible + loadCount;
		setVisible(newVisible > teaCart.length ? teaCart.length : newVisible);
	};

	const sortBy = sortType.replace('-', '');
	const order = sortType.includes('-') ? 'asc' : 'desc';
	const category = categoryId > 0 ? `${categoryId}` : '';

	React.useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
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
	}, [categoryId, sortType, searchValue]);

	return (
		<div className="container">
			<Categoryslide />
			<div className="product">
				<Search />
				<Category value={categoryId} onChangeCategory={onChangeCategory} />
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
