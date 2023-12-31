import React from 'react';
import { Link } from 'react-router-dom';

const CatalogMenu = () => {
	const [openCatalog, setOpenCatalog] = React.useState(false);

	const catalogRef = React.useRef();

	React.useEffect(() => {
		const catalogClickOutside = (event) => {
			if (!event.composedPath().includes(catalogRef.current)) {
				setOpenCatalog(false);
			}
		};
		document.body.addEventListener('click', catalogClickOutside);

		return () => {
			document.body.removeEventListener('click', catalogClickOutside);
		};
	}, []);

	return (
		<div ref={catalogRef} className="header__menu">
			<div className="header__menu-catalog">
				<div className="header__menu-label">
					<span onClick={() => setOpenCatalog(!openCatalog)}>Каталог товаров</span>
					<svg
						width="15"
						height="15"
						viewBox="0 0 15 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M3.75 5.625C3.89604 5.62472 4.03756 5.67558 4.15 5.76875L7.5 8.56875L10.8563 5.86875C10.9202 5.81684 10.9937 5.77807 11.0727 5.75467C11.1517 5.73128 11.2345 5.72372 11.3164 5.73243C11.3983 5.74114 11.4776 5.76595 11.5499 5.80544C11.6222 5.84492 11.6859 5.8983 11.7375 5.9625C11.7894 6.02643 11.8282 6.09999 11.8516 6.17896C11.875 6.25792 11.8825 6.34073 11.8738 6.42262C11.8651 6.50451 11.8403 6.58388 11.8008 6.65615C11.7613 6.72842 11.708 6.79218 11.6438 6.84375L7.89375 9.8625C7.78192 9.95443 7.64164 10.0047 7.49688 10.0047C7.35211 10.0047 7.21184 9.95443 7.1 9.8625L3.35 6.7375C3.28672 6.68504 3.2344 6.6206 3.19606 6.54788C3.15771 6.47516 3.13409 6.3956 3.12654 6.31374C3.119 6.23188 3.12767 6.14933 3.15208 6.07083C3.17648 5.99233 3.21613 5.91941 3.26875 5.85625C3.32691 5.78456 3.40023 5.72664 3.48344 5.68665C3.56665 5.64667 3.65769 5.62561 3.75 5.625Z"
							fill="#4F4F4F"
						/>
					</svg>
				</div>
				{openCatalog && (
					<div className="header__menu-popup">
						<ul onClick={() => setOpenCatalog(false)}>
							<li>
								<Link to={'/black'}>Чёрный чай</Link>
							</li>
							<li>
								<Link>Зелёный чай</Link>
							</li>
							<li>
								<Link>Красный чай</Link>
							</li>
							<li>
								<Link>Белый чай</Link>
							</li>
							<li>
								<Link>Улун</Link>
							</li>
						</ul>
					</div>
				)}
			</div>
			<ul className="header__menu-list">
				<li>
					<Link to={'/delivery-info'}>Оплата и доставка</Link>
				</li>
			</ul>
		</div>
	);
};

export default CatalogMenu;
