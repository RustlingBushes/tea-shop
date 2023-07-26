import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ShopCart from './pages/ShopCart';

function App() {
	return (
		<div className="wrapper">
			<Header />
			<div className="main">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<NotFound />} />
					<Route path="/cart" element={<ShopCart />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;
