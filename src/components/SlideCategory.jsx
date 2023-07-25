const SlideCategory = () => {
	return (
		<div className="main__catalog">
			<div className="catalog__title">
				<h3>Каталог</h3>
			</div>
			<div className="catalog__block">
				<div className="catalog-cart">
					<img className="catalog-cart__image" src="./assets/img/black-tea.jpg" alt="Кормушки" />
					<div className="catalog-cart__title">
						<h2>Черный чай</h2>
						<p>(Обычный)</p>
					</div>
					<a className="catalog-cart__info details" href="/cart.html">
						Подробнее
					</a>
				</div>
				<div className="catalog-cart">
					<img
						className="catalog-cart__image"
						src="./assets/img/green-tea.jpg"
						alt="Готовые миксы"
					/>
					<div className="catalog-cart__title">
						<h2>Зелёный чай</h2>
						<p>(Обычный)</p>
					</div>
					<a className="catalog-cart__info details" href="/cart.html">
						Подробнее
					</a>
				</div>
				<div className="catalog-cart">
					<img
						className="catalog-cart__image"
						src="./assets/img/white-tea.jpg"
						alt="Отдельные виды кормов"
					/>
					<div className="catalog-cart__title">
						<h2>Белый чай</h2>
						<p>(Обычный)</p>
					</div>
					<a className="catalog-cart__info details" href="/cart.html">
						Подробнее
					</a>
				</div>
			</div>
		</div>
	);
};

export default SlideCategory;
