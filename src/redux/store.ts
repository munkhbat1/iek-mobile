import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import {baseApi} from './services/base';
import cartSlice from './slices/cartSlice';
import horizontalCategorySlice from './slices/horizontalCategorySlice';
import loadingModalSlice from './slices/loadingModalSlice';
import logInSucceedModalSlice from './slices/logInSucceedModalSlice';
import noticeModalSlice from './slices/noticeModalSlice';
import orderSlice from './slices/orderSlice';
import userSlice from './slices/userSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    user: userSlice,
    loadingModal: loadingModalSlice,
    noticeModal: noticeModalSlice,
    logInSucceedModal: logInSucceedModalSlice,
    horizontalCategory: horizontalCategorySlice,
    order: orderSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
