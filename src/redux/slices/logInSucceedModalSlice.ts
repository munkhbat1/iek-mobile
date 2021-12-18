import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

const initialState: InitialStateType = {
  logInSucceed: false,
  isShowed: false,
  message: null,
};

export const logInSucceedModalSlice = createSlice({
  name: 'logInSucceedModal',
  initialState,
  reducers: {
    showLogInSucceedModal: (state, action) => {
      state.isShowed = true;
      state.message = action.payload.message;
      state.logInSucceed = action.payload.logInSucceed;
    },
    hideLogInSucceedModal: state => {
      state.isShowed = false;
    },
  },
});

export const {showLogInSucceedModal, hideLogInSucceedModal} =
  logInSucceedModalSlice.actions;

export const selectLogInSucceedModalState = (state: RootState) =>
  state.logInSucceedModal;

export default logInSucceedModalSlice.reducer;

type InitialStateType = {
  logInSucceed: boolean;
  isShowed: boolean;
  message: null | string;
};
