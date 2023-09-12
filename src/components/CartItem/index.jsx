import styles from './CartItem.module.scss';
import { useDispatch } from 'react-redux';
import { increase, decrease, removeItem } from '../../redux/slices/cartSlice';

const CartItem = ({
	id,
	title,
	describe,
	size,
	imageUrl,
	teaPrice,
	teaSize,
	fullPriceWithDiscount,
	priceWithDiscount,
	count,
}) => {
	const dispatch = useDispatch();

	const onClickPlus = () => {
		console.log('+');
		dispatch(
			increase({
				id,
				teaSize,
				fullPriceWithDiscount,
			}),
		);
	};

	const onClickMinus = () => {
		console.log('-');
		dispatch(
			decrease({
				id,
				teaSize,
				fullPriceWithDiscount,
			}),
		);
	};

	const onClickRemove = () => {
		if (window.confirm('Вы действительно хотите удалить этот товар?')) {
			dispatch(removeItem());
		}
	};

	return (
		<div className={styles.root}>
			<div className={styles.box}>
				<img src={imageUrl} alt="" />
				<div className={styles.describe}>
					<div>
						<h2 className={styles.title}>{title}</h2>
						<h3>{describe}</h3>
					</div>
					<div className={styles.price}>
						<h3>Цена за {size}г:</h3>
						<p>{priceWithDiscount} руб.</p>
					</div>
				</div>
			</div>
			<div className={styles.amount}>
				<div className={styles.close}>
					<h3>Вес:</h3>
					<button onClick={onClickRemove}>Удалить</button>
				</div>
				<div className={styles.size}>
					<button onClick={onClickMinus} className={styles.minus}>
						<svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 -960 960 960" width="35">
							<path d="M210.001-457.308v-45.384h539.998v45.384H210.001Z" />
						</svg>
					</button>
					<p>{teaSize} г</p>
					<button onClick={onClickPlus} className={styles.plus}>
						<svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 -960 960 960" width="35">
							<path d="M450-200v-250H200v-60h250v-250h60v250h250v60H510v250h-60Z" />
						</svg>
					</button>
				</div>
				<div className={styles.total}>
					<h4>Итого:</h4>
					<p>{fullPriceWithDiscount ? fullPriceWithDiscount : teaPrice} руб.</p>
					{/* <p>{teaPrice * count} руб.</p> */}
				</div>
			</div>
		</div>
	);
};

export default CartItem;
