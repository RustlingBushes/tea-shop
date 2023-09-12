import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';
import { Link } from 'react-router-dom';

const TeaCard = ({ id, imageUrl, describe, title, price, size, discount, novelty }) => {
	const dispatch = useDispatch();

	const [addGood, setAddGood] = React.useState(false);
	const [addFavorite, setAddFavorite] = React.useState(false);
	const [teaSize, setTeaSize] = React.useState(size);
	const [teaPrice, setTeaPrice] = React.useState(price);
	const [count, setCount] = React.useState(1);

	const discFormula = Math.round(price * (discount / 100));
	const discOrNew = discount ? 'product-cart__discount' : novelty ? 'product-cart__new' : '';
	const titleNewOrDisc = novelty ? 'Новинка' : discount ? `Скидка ${discount} %` : '';
	const discClass = discFormula ? 'product-cart__disc' : 'product-cart__price';
	const fullPriceWithDiscount = teaPrice - discFormula;
	const priceWithDiscount = price - discFormula;

	const onClickFavorite = () => setAddFavorite(!addFavorite);

	const onClickPlus = () => {
		// setTeaSize(teaSize + (size * count - teaSize + size));
		setTeaSize(size + teaSize);
		setTeaPrice(price + teaPrice);
		setCount(count + 1);
	};

	const onClickMinus = () => {
		setTeaSize(teaSize > size ? teaSize - size : teaSize);
		setTeaPrice(teaPrice > price ? teaPrice - price : teaPrice);
		setCount(count - 1);
	};

	const onClickAdd = () => {
		const item = {
			id,
			title,
			describe,
			price,
			size,
			imageUrl,
			teaSize,
			teaPrice,
			fullPriceWithDiscount,
			priceWithDiscount,
			count,
		};
		setAddGood(!addGood);
		setTimeout(() => {
			setAddGood(addGood);
		}, 3000);
		dispatch(addItem(item));
	};

	return (
		<div className="product-cart">
			<img
				className="product-cart__svg"
				onClick={onClickFavorite}
				src={addFavorite ? '/assets/img/icons/favorite-add.svg' : '/assets/img/icons/favorite.svg'}
				alt=""
			/>
			<div className="product-cart__image">
				<div className={discOrNew}>{titleNewOrDisc}</div>
				<img src={imageUrl} alt="Ovomix Gold Rosso" />
			</div>
			<div className="product-cart__title">
				<p className="product-cart__subtitle-name">{describe}</p>
				<h2 className="product-cart__title-name">{title}</h2>
			</div>
			<div className="product-cart__price-box">
				<div className={discClass}>{discount ? fullPriceWithDiscount : teaPrice}р</div>
				{/* <div className={discClass}>{discount ? teaPrice * count : teaPrice}р</div> */}
			</div>
			<div className="product-cart__box">
				<button
					className={
						teaSize !== size ? 'product-cart__box-minus' : 'product-cart__box-minus--disabled'
					}
					onClick={onClickMinus}>
					<svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 -960 960 960" width="35">
						<path d="M210.001-457.308v-45.384h539.998v45.384H210.001Z" />
					</svg>
				</button>
				<span className="product-cart__box-size">{teaSize}г</span>
				<button className="product-cart__box-plus" onClick={onClickPlus}>
					<svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 -960 960 960" width="35">
						<path d="M450-200v-250H200v-60h250v-250h60v250h250v60H510v250h-60Z" />
					</svg>
				</button>
			</div>
			<div className="product-cart__bottom">
				<Link to={`tea/${id}`} className="product-cart__info details" href="/cart.html">
					Подробнее
				</Link>
				<button
					onClick={onClickAdd}
					className={addGood ? 'product-cart__btn--add' : 'product-cart__btn'}>
					<svg
						width="30"
						height="30"
						viewBox="0 0 30 30"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M3.59729 3.13873L3.47048 3.12547C3.009 3.1086 2.59459 3.43495 2.51364 3.90262L2.50038 4.02943C2.48351 4.4909 2.80986 4.90532 3.27753 4.98627L5.16378 5.3125L6.30694 18.9322L6.3306 19.1369C6.5606 20.6899 7.89641 21.8575 9.48741 21.8575H23.1274L23.3328 21.851C24.8282 21.7555 26.0682 20.6246 26.2864 19.1223L27.4727 10.9243L27.4932 10.736C27.6024 9.23712 26.415 7.93625 24.8862 7.93625H7.26503L6.97162 4.43409L6.94951 4.29552C6.86396 3.93512 6.57098 3.65341 6.19729 3.58873L3.59729 3.13873ZM9.34231 19.9746C8.72322 19.9068 8.22811 19.4097 8.17523 18.7758L7.42235 9.81125H24.886L24.9962 9.81935C25.3909 9.87803 25.676 10.2471 25.6169 10.6558L24.4306 18.8532L24.4009 18.9998C24.2504 19.573 23.7311 19.9825 23.1272 19.9825H9.48723L9.34231 19.9746ZM7.38533 25.7316C7.38533 24.6865 8.23242 23.8379 9.27783 23.8379C10.3231 23.8379 11.1716 24.6864 11.1716 25.7316C11.1716 26.777 10.323 27.6241 9.27783 27.6241C8.23256 27.6241 7.38533 26.7769 7.38533 25.7316ZM21.4497 25.7316C21.4497 24.6864 22.2982 23.8379 23.3435 23.8379C24.3887 23.8379 25.2372 24.6864 25.2372 25.7316C25.2372 26.777 24.3886 27.6241 23.3435 27.6241C22.2983 27.6241 21.4497 26.777 21.4497 25.7316ZM22.0604 13.4937C22.0604 12.976 21.6406 12.5562 21.1229 12.5562H17.6566L17.5294 12.5648C17.0718 12.6269 16.7191 13.0191 16.7191 13.4937C16.7191 14.0115 17.1389 14.4312 17.6566 14.4312H21.1229L21.2501 14.4227C21.7077 14.3606 22.0604 13.9684 22.0604 13.4937Z"
							fill="#333333"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default TeaCard;
