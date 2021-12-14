import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CartItem} from '../../types';
import {RootState} from '../store';

const initialState: CartItem[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      return [...state, action.payload];
    },
    removeItem: (state, action: PayloadAction<CartItem>) => {
      return state.filter(
        cartItem => cartItem.productId !== action.payload.productId,
      );
    },
  },
});

export const {addItem, removeItem} = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;
export default cartSlice.reducer;
