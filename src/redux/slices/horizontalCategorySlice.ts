import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

const initialState = 'Бүгд';

export const horizontalCategorySlice = createSlice({
  name: 'horizontalCategory',
  initialState,
  reducers: {
    filter: (state, action: PayloadAction<string>) => {
      state = action.payload;
      return state;
    },
  },
});

export const {filter} = horizontalCategorySlice.actions;

export const selectHorizontalCategoryState = (state: RootState) =>
  state.horizontalCategory;
export default horizontalCategorySlice.reducer;
