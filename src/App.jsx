// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ShopCart from './pages/ShopCart';
import BlackTea from './pages/BlackTea';
import PayAndDelivery from './pages/PayAndDelivery';
import Favorite from './pages/Favorite';

// export const SearchContext = React.createContext();

function App() {
	// const [searchValue, setSearchValue] = React.useState('');

	return (
		<div className="wrapper">
			{/* <SearchContext.Provider value={{ searchValue, setSearchValue }}> */}
			<Header />
			<div className="main">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<NotFound />} />
					<Route path="/cart" element={<ShopCart />} />
					<Route path="/black" element={<BlackTea />} />
					<Route path="/delivery-info" element={<PayAndDelivery />} />
					<Route path="/favorite" element={<Favorite />} />
				</Routes>
			</div>
			<Footer />
			{/* </SearchContext.Provider> */}
		</div>
	);
}

export default App;
