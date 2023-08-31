import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import CartEmpty from '../components/CartEmpty';
import { useDispatch, useSelector } from 'react-redux';
import { cartSelector, clearItems } from '../redux/slices/cartSlice';

const ShopCart = () => {
	const { items, totalPrice } = useSelector(cartSelector);
	const dispatch = useDispatch();

	const onClickClear = () => {
		if (window.confirm('Вы действительно хотите удалить все товары?')) {
			dispatch(clearItems());
		}
	};

	if (!totalPrice) {
		return <CartEmpty />;
	}

	return (
		<div className="cart">
			<div className="container">
				<Link to="/" className="cart__link">
					<svg
						width="15"
						height="15"
						viewBox="0 0 15 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M3.74999 5.62502C3.89602 5.62473 4.03754 5.67559 4.14999 5.76877L7.49999 8.56877L10.8562 5.86877C10.9202 5.81685 10.9937 5.77808 11.0727 5.75469C11.1517 5.73129 11.2345 5.72374 11.3164 5.73245C11.3982 5.74116 11.4776 5.76597 11.5499 5.80545C11.6222 5.84494 11.6859 5.89832 11.7375 5.96252C11.7894 6.02645 11.8282 6.10001 11.8516 6.17897C11.875 6.25793 11.8825 6.34074 11.8738 6.42263C11.8651 6.50453 11.8403 6.58389 11.8008 6.65616C11.7613 6.72844 11.7079 6.79219 11.6437 6.84377L7.89374 9.86252C7.78191 9.95445 7.64163 10.0047 7.49686 10.0047C7.3521 10.0047 7.21182 9.95445 7.09999 9.86252L3.34999 6.73752C3.2867 6.68505 3.23439 6.62061 3.19604 6.5479C3.1577 6.47518 3.13407 6.39561 3.12653 6.31375C3.11898 6.23189 3.12766 6.14935 3.15206 6.07084C3.17646 5.99234 3.21611 5.91942 3.26874 5.85627C3.3269 5.78457 3.40022 5.72665 3.48343 5.68667C3.56664 5.64668 3.65767 5.62563 3.74999 5.62502Z"
							fill="#219653"></path>
					</svg>
					<h2>Назад</h2>
				</Link>
				<div className="cart__top">
					<div className="cart__top-left">
						<svg
							id="shopping-cart"
							data-name="Layer 1"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24">
							<path
								fill="#1f1f1f"
								d="M8.5,19A1.5,1.5,0,1,0,10,20.5,1.5,1.5,0,0,0,8.5,19ZM19,16H7a1,1,0,0,1,0-2h8.49121A3.0132,3.0132,0,0,0,18.376,11.82422L19.96143,6.2749A1.00009,1.00009,0,0,0,19,5H6.73907A3.00666,3.00666,0,0,0,3.92139,3H3A1,1,0,0,0,3,5h.92139a1.00459,1.00459,0,0,1,.96142.7251l.15552.54474.00024.00506L6.6792,12.01709A3.00006,3.00006,0,0,0,7,18H19a1,1,0,0,0,0-2ZM17.67432,7l-1.2212,4.27441A1.00458,1.00458,0,0,1,15.49121,12H8.75439l-.25494-.89221L7.32642,7ZM16.5,19A1.5,1.5,0,1,0,18,20.5,1.5,1.5,0,0,0,16.5,19Z"></path>
						</svg>
						<h3>Корзина</h3>
					</div>
					<div className="cart__top-right">
						<button onClick={onClickClear}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="trash-alt">
								<path
									fill="#000000"
									d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"></path>
							</svg>
							<h3>Очистить корзину</h3>
						</button>
					</div>
				</div>
				<div className="cart__box">
					{items.map((item) => (
						<CartItem key={item.id} {...item} />
					))}
				</div>
				<div className="cart__bottom">
					<div className="cart__bottom-total">
						<h3>Общая сумма:</h3>
						<p>{totalPrice} руб.</p>
					</div>
					<button>Оплатить</button>
				</div>
			</div>
		</div>
	);
};

export default ShopCart;
