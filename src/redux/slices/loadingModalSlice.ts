import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

const initialState = false;

export const loadingModalSlice = createSlice({
  name: 'loadingModal',
  initialState,
  reducers: {
    showLoadingModal: () => {
      return true;
    },
    hideLoadingModal: () => {
      return false;
    },
  },
});

export const {showLoadingModal, hideLoadingModal} = loadingModalSlice.actions;

export const selectLoadingModalState = (state: RootState) => state.loadingModal;
export default loadingModalSlice.reducer;
