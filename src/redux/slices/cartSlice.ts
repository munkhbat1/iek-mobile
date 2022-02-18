import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CartItemType} from '../../types';
import {RootState} from '../store';

const initialState: CartItemType[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItemType>) => {
      return [...state, action.payload];
    },
    removeItem: (state, action: PayloadAction<CartItemType>) => {
      return state.filter(
        cartItem =>
          cartItem.productId !== action.payload.productId &&
          cartItem.option !== action.payload.option,
      );
    },
    removeAllItems: () => {
      return [];
    },
  },
});

export const {addItem, removeItem, removeAllItems} = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;
export default cartSlice.reducer;
