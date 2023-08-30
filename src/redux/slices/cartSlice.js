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
			state.totalPrice = state.items.reduce((sum, obj) => obj.discountPrice + sum, 0);
		},
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

export const cartSelector = (state) => state.cart;

export const { addItem, removeItem, clearItems, setTeaPrice, setTeaSize } = cartSlice.actions;

export default cartSlice.reducer;
