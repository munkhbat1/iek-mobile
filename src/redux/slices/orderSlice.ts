import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import Config from 'react-native-config';
import {UserState} from '../../types';
import {RootState} from '../store';

const initialState = {
  qrCode: '',
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
        state.qrCode = action.payload;
        console.log('Get order succeeded');
      })
      .addCase(getOrder.rejected, () => {
        console.log('Get order failed');
      });
  },
});

export const selectOrder = (state: RootState) => state.order;
export default orderSlice.reducer;
