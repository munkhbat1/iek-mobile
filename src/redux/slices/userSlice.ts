import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import Config from 'react-native-config';
import {UserLoginInfo, UserSignUpInfo, UserState} from '../../types';
import {RootState} from '../store';
import {hideLoadingModal, showLoadingModal} from './loadingModalSlice';

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
  async (userSignUpInfo: UserSignUpInfo, thunkApi) => {
    thunkApi.dispatch(showLoadingModal);
    const res = await axios.post(
      `${Config.API_URI}/api/user/auth/signUp`,
      userSignUpInfo,
    );

    thunkApi.dispatch(hideLoadingModal);
    return {
      jwt: res.data.access_token,
      userInfo: {
        name: userSignUpInfo.lastName,
        phone: userSignUpInfo.phone,
      },
    };
  },
);

export const logIn = createAsyncThunk(
  'user/login',
  async (userLoginInfo: UserLoginInfo, thunkApi) => {
    thunkApi.dispatch(showLoadingModal);
    const res = await axios.post(
      `${Config.API_URI}/api/user/auth/login`,
      userLoginInfo,
    );

    thunkApi.dispatch(hideLoadingModal);
    return {
      jwt: res.data.access_token,
      userInfo: {
        name: res.data.firstName,
        phone: res.data.phone,
      },
    };
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut: state => {
      state.jwt = initialState.jwt;
      state.status = initialState.status;
      state.userInfo = initialState.userInfo;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(signUp.pending, state => {
        state.status = 'pending';
        console.log('Sign Up request pending');
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.status = 'loggedIn';
        state.jwt = action.payload.jwt;
        state.userInfo = action.payload.userInfo;
        console.log('Sign Up succeeded');
      })
      .addCase(signUp.rejected, state => {
        state.status = 'loggedOut';
        console.log('SignUp failed');
      })
      .addCase(logIn.pending, state => {
        state.status = 'pending';
        console.log('Login request pending');
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.status = 'loggedIn';
        state.jwt = action.payload.jwt;
        state.userInfo = action.payload.userInfo;
        console.log('Login succeeded');
      })
      .addCase(logIn.rejected, state => {
        state.status = 'loggedOut';
        console.log('Login failed');
      });
  },
});

export const {logOut} = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
