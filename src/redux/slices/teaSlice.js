import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTeas = createAsyncThunk('tea/fetchTeasStatus', async (params) => {
	const { sortBy, order, category } = params;
	const { data } = await axios.get(`https://64a683a4096b3f0fcc7feffa.mockapi.io/items?
	sortBy=${sortBy}&order=${order}&category=${category}`);

	return data;
});

const initialState = {
	teaItems: [],
	visible: 8,
	loadCount: 8,
	status: 'idle' | 'loading' | 'success' | 'fail',
};

const teaSlice = createSlice({
	name: 'tea',
	initialState,
	reducers: {
		setVisible(state, action) {
			state.visible = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchTeas.pending, (state) => {
			state.status = 'loading';
			state.teaItems = [];
		});
		builder.addCase(fetchTeas.fulfilled, (state, action) => {
			state.teaItems = action.payload;
			state.status = 'success';
		});
		builder.addCase(fetchTeas.rejected, (state) => {
			state.status = 'error';
			state.teaItems = [];
		});
	},
});

export const teaSelector = (state) => state.tea;

export const { setVisible, setTeaSize } = teaSlice.actions;

export default teaSlice.reducer;
