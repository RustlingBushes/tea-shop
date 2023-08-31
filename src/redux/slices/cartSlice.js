import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	totalPrice: 0,
	items: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		// addItem(state, action) {
		// 	state.items.push(action.payload);
		// 	state.totalPrice = state.items.reduce((sum, obj) => obj.price + sum, 0);
		// },
		addItem(state, action) {
			const findItem = state.items.find((obj) => obj.id === action.payload.id);
			if (findItem) {
				findItem.teaPrice = action.payload.teaPrice;
				findItem.teaSize = action.payload.teaSize;
			} else {
				state.items.push(action.payload);
			}
			state.totalPrice = state.items.reduce((sum, obj) => obj.fullPriceWithDiscount + sum, 0);
		},
		increase(state) {},
		decrease(state) {},
		removeItem(state, action) {
			state.items = state.items.filter((obj) => obj.id !== action.payload);
		},
		clearItems(state) {
			state.items = [];
			state.totalPrice = 0;
		},
	},
});
//*Урок 16. 35минута.
//https://youtu.be/BsIcbU4LB0k?t=5149
export const cartSelector = (state) => state.cart;

export const { addItem, removeItem, clearItems, increase, decrease } = cartSlice.actions;

export default cartSlice.reducer;
