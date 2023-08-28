export const calcTotalPrice = (items) => {
	return items.reduce((sum, obj) => obj.price + obj.teaPrice + sum, 0);
};
