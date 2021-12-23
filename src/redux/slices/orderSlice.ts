import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import Config from 'react-native-config';
import {OrderType, UserState} from '../../types';
import {RootState} from '../store';

const initialState: OrderType = {
  qrCode: '',
  urls: [],
};

export const getOrder = createAsyncThunk(
  'order/getOrder',
  async (user: UserState) => {
    const res = await axios.get(`${Config.API_URI}/api/invoices/id`, {
      headers: {
        Authorization: `Bearer ${user.jwt}`,
      },
    });

    return res.data;
  },
);

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getOrder.pending, () => {
        console.log('Get order request pending');
      })
      .addCase(getOrder.fulfilled, (state, action) => {
        const urls = JSON.parse(action.payload.urls);
        state = action.payload;
        state.urls = urls;
        console.log('Get order succeeded');
        console.log(state);
        return state;
      })
      .addCase(getOrder.rejected, () => {
        console.log('Get order failed');
      });
  },
});

export const selectOrder = (state: RootState) => state.order;
export default orderSlice.reducer;
