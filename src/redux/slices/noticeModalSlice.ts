import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

const initialState: InitialStateType = {
  isShowed: false,
  message: null,
};

export const noticeModalSlice = createSlice({
  name: 'noticeModal',
  initialState,
  reducers: {
    showNoticeModal: (state, action: PayloadAction<string | null>) => {
      state.isShowed = true;
      state.message = action.payload;
    },
    hideNoticeModal: state => {
      state.isShowed = false;
    },
  },
});

export const {showNoticeModal, hideNoticeModal} = noticeModalSlice.actions;

export const selectNoticeModalState = (state: RootState) => state.noticeModal;
export default noticeModalSlice.reducer;

type InitialStateType = {
  isShowed: boolean;
  message: null | string;
};
