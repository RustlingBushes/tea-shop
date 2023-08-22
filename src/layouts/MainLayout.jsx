import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
	return (
		<div className="wrapper">
			<Header />
			<div className="main">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default MainLayout;
