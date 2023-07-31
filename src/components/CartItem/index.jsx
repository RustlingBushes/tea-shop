import styles from './CartItem.module.scss';

const CartItem = () => {
	return (
		<div className={styles.root}>
			<div className={styles.box}>
				<img src="/assets/img/products/tea.jpg" alt="" />
				<div className={styles.describe}>
					<div>
						<h2 className={styles.title}>Чай чёрный Цейлон Пекое</h2>
						<h3>Чёрный чай</h3>
					</div>
					<div className={styles.price}>
						<h3>Цена за 300г:</h3>
						<p>200 руб.</p>
					</div>
				</div>
			</div>
			<div className={styles.amount}>
				<h3>Количество:</h3>
				<div className={styles.size}>
					<button className={styles.minus}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="35"
							height="35"
							viewBox="0 0 32 32"
							fill="none">
							<rect x="0.5" y="0.5" width="31" height="31" rx="4.5" fill="white" stroke="#00C620" />
							<rect
								x="22.668"
								y="15.3335"
								width="1.33333"
								height="13.3333"
								rx="0.666667"
								transform="rotate(90 22.668 15.3335)"
								fill="#00C620"
							/>
						</svg>
					</button>
					<p>2</p>
					<button className={styles.plus}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="35"
							height="35"
							viewBox="0 0 32 32"
							fill="none">
							<rect x="0.5" y="0.5" width="31" height="31" rx="4.5" fill="white" stroke="#00C620" />
							<rect
								x="15.3359"
								y="9.33357"
								width="1.33333"
								height="13.3333"
								rx="0.666667"
								fill="#00C620"
							/>
							<rect
								x="22.6699"
								y="15.3336"
								width="1.33333"
								height="13.3333"
								rx="0.666667"
								transform="rotate(90 22.6699 15.3336)"
								fill="#00C620"
							/>
						</svg>
					</button>
				</div>
				<div className={styles.total}>
					<h4>Итого:</h4>
					<p>228 руб.</p>
				</div>
			</div>
		</div>
	);
};

export default CartItem;