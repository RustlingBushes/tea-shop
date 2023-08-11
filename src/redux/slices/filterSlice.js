import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	categoryId: 0,
	sort: {
		name: 'По алфавиту уве-ие',
		sortProperty: '-title',
	},
};

const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setCategoryId(state, action) {
			state.categoryId = action.payload;
		},
		setSort(state, action) {
			state.sort = action.payload;
		},
	},
});

export const { setCategoryId, setSort } = filterSlice.actions;

export default filterSlice.reducer;