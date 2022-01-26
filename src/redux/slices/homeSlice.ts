import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

const initialState = {
  category: '',
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    changeCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
  },
});

export const {changeCategory} = homeSlice.actions;

export const selectCategory = (state: RootState) => state.home.category;
export default homeSlice.reducer;
