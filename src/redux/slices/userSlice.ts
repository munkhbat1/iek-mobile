import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import Config from 'react-native-config';
import {UserSignUpInfo, UserState} from '../../types';
import {RootState} from '../store';

const initialState: UserState = {
  status: 'loggedOut',
  jwt: '',
  userInfo: {
    name: '',
    phone: '',
  },
};

export const signUp = createAsyncThunk(
  'user/signUp',
  async (userSignUpInfo: UserSignUpInfo) => {
    const res = await axios.post(
      `${Config.API_URI}/api/user/auth/signUp`,
      userSignUpInfo,
    );

    return res.data;
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(signUp.pending, state => {
        state.status = 'pending';
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.status = 'loggedIn';
        console.log(action.payload);
      })
      .addCase(signUp.rejected, state => {
        state.status = 'loggedOut';
      });
  },
});

export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
