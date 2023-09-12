import { createSlice } from '@reduxjs/toolkit';

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
				findItem.teaPrice += Number(action.payload.price);
				findItem.teaSize += Number(action.payload.size);
				findItem.teaPrice += Number(action.payload.teaPrice - action.payload.price);
				findItem.teaSize += Number(action.payload.teaSize - action.payload.size);
				findItem.count += Number(action.payload.count);
				findItem.fullPriceWithDiscount += Number(action.payload.fullPriceWithDiscount);
			} else {
				state.items.push(action.payload);
			}
			state.totalPrice = state.items.reduce((sum, obj) => obj.fullPriceWithDiscount + sum, 0);
		},
		increase(state, action) {
			const findItem = state.items.find((obj) => obj.id === action.payload.id);
			if (findItem) {
				findItem.teaSize += findItem.size;
				findItem.fullPriceWithDiscount += findItem.price;
			}
			state.totalPrice = state.items.reduce((sum, obj) => obj.fullPriceWithDiscount + sum, 0);
		},
		decrease(state, action) {
			const findItem = state.items.find((obj) => obj.id === action.payload.id);
			if (findItem) {
				findItem.teaSize -= findItem.size;
				findItem.fullPriceWithDiscount -= findItem.price;
			}
			state.totalPrice = state.items.reduce((sum, obj) => obj.fullPriceWithDiscount - sum, 0);
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

export const cartSelector = (state) => state.cart;

export const { addItem, removeItem, clearItems, increase, decrease } = cartSlice.actions;

export default cartSlice.reducer;
