import React from 'react';

import Header from './components/Header';
import Categoryslide from './components/SlideCategory';
import ProductCart from './components/ProductCart';
import Footer from './components/Footer';
import Category from './components/Category';
import Sort from './components/Sort';

function App() {
	const [itemTea, setItemTea] = React.useState([]);

	/*
	React.useEffect(() => {
		try {
			fetch('https://64a683a4096b3f0fcc7feffa.mockapi.io/items')
				.then((response) => response.json())
				.then((teaItem) => setItemTea(teaItem));
		} catch (error) {
			alert('Something went wrong');
			console.log(`Error: ${error}`);
		}
	}, []);
*/

	React.useEffect(() => {
		try {
			fetch('https://64a683a4096b3f0fcc7feffa.mockapi.io/items')
				.then((res) => res.json())
				.then((teaItem) => setItemTea(teaItem));
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
						{itemTea.map((obj, index) => (
							<ProductCart key={index} {...obj} />
						))}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
