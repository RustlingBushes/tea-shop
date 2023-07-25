import Header from './components/Header';
import Categoryslide from './components/SlideCategory';
import ProductCart from './components/ProductCart';
import Footer from './components/Footer';
import Category from './components/Category';
import Sort from './components/Sort';

import teas from './assets/tea.json';
console.log(teas);

function App() {
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
						{teas.map((obj, index) => (
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
