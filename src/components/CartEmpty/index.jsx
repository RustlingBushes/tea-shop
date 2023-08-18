import { Link } from 'react-router-dom';
import styles from './CartEmpty.module.scss';

const CartEmpty = () => {
	return (
		<div className={styles.root}>
			<h2>Корзина пустая 😕</h2>
			<p>
				Вероятней всего, вы не выбрали еще не одного товара
				<br />
				Для того, чтобы заказать чай, перейди на главную страницу.
			</p>
			<img src="assets/img/empty-cart.png" alt="Empty cart" />
			<Link to="/">
				<span>Вернуться назад</span>
			</Link>
		</div>
	);
};

export default CartEmpty;
