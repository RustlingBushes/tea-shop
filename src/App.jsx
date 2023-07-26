import React from 'react';

import Header from './components/Header';
import Categoryslide from './components/SlideCategory';
import ProductCart from './components/ProductCart';
import Footer from './components/Footer';
import Category from './components/Category';
import Sort from './components/Sort';
import Skeleton from './components/ProductCart/Skeleton';

function App() {
	const [teaCart, setTeaCart] = React.useState([]);
	const [visible, setVisible] = React.useState(8);
	const [loadCount] = React.useState(8);
	const [isLoading, setIsLoading] = React.useState(true);

	const showMore = () => {
		const newVisible = visible + loadCount;
		setVisible(newVisible > teaCart.length ? teaCart.length : newVisible);
	};

	React.useEffect(() => {
		try {
			fetch('https://64a683a4096b3f0fcc7feffa.mockapi.io/items')
				.then((res) => res.json())
				.then((teaItem) => {
					setTeaCart(teaItem);
					setIsLoading(false);
				});
		} catch (error) {
			alert('Something went wrong!');
			console.log(`Error: ${error}`);
		}
	}, []);

	return (
		<div className="wrapper">
			<Header />
			<div className="main">
				<div className="container">
					<Categoryslide />
					<div className="product">
						<Category />
						<Sort />
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
			</div>
			<Footer />
		</div>
	);
}

export default App;
