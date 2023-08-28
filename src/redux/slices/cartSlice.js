import { createSlice } from '@reduxjs/toolkit';
import { calcTotalPrice } from '../../utils/calcTotalPrice';

const initialState = {
	totalPrice: 0,
	items: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action) {
			const findItem = state.items.find((obj) => obj.id === action.payload.id);

			if (findItem) {
				findItem.teaSize + findItem.teaSize;
			} else {
				state.items.push({
					...action.payload,
				});
			}
			state.totalPrice = calcTotalPrice(state.items);
		},
		// addItem(state, action) {
		// 	const findItem = state.items.find((obj) => obj.id === action.payload.id);
		// 	if (findItem) {
		// 		findItem.count++;
		// 	} else {
		// 		state.items.push({
		// 			...action.payload,
		// 			count: 1,
		// 		});
		// 	}
		// 	state.totalPrice = state.items.reduce((sum, obj) => obj. * obj.count + sum, 0);
		// },
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
