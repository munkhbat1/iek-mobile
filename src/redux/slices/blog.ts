import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

const initialState = {
  type: '',
};

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    changeBlogType: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
  },
});

export const {changeBlogType} = blogSlice.actions;

export const selectType = (state: RootState) => state.blog.type;
export default blogSlice.reducer;
