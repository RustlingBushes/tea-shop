import ContentLoader from 'react-content-loader';

const Skeleton = () => (
	<ContentLoader
		className="product-cart"
		speed={0}
		width={320}
		height={599}
		viewBox="0 0 300 599"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb">
		<rect x="8" y="1" rx="10" ry="10" width="285" height="270" />
		<rect x="8" y="292" rx="5" ry="5" width="153" height="27" />
		<rect x="8" y="329" rx="5" ry="5" width="235" height="30" />
		<rect x="8" y="423" rx="5" ry="5" width="92" height="34" />
		<rect x="8" y="474" rx="10" ry="10" width="285" height="50" />
		<rect x="8" y="546" rx="10" ry="10" width="170" height="45" />
		<rect x="245" y="543" rx="10" ry="10" width="50" height="50" />
	</ContentLoader>
);

export default Skeleton;
