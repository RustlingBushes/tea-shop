import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	categoryId: 0,
	currentPage: 1,
	searchValue: '',
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
		setSearchValue(state, action) {
			state.searchValue = action.payload;
		},
		setCurrentPage(state, action) {
			state.currentPage = action.payload;
		},
		setFilters(state, action) {
			state.sort = action.payload.sort;
			state.categoryId = Number(action.payload.categoryId);
			// state.currentPage = Number(action.payload.currentPage);
		},
	},
});

export const filterSelector = (state) => state.filter;
export const filterSelectorSort = (state) => state.filter.sort;

export const { setCategoryId, setSort, setSearchValue, setCurrentPage, setFilters } =
	filterSlice.actions;

export default filterSlice.reducer;
