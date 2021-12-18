import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

const initialState: InitialStateType = {
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
  isShowed: boolean;
  message: null | string;
};
