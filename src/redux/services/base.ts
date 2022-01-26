import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';
import {selectUser} from '../slices/userSlice';
import {RootState} from '../store';

const baseQuery = fetchBaseQuery({
  baseUrl: `${Config.API_URI}/api`,
  prepareHeaders: (headers, {getState}) => {
    const token = selectUser(getState() as RootState).jwt;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseApi = createApi({
  tagTypes: ['Product', 'SearchProduct'],
  baseQuery: baseQuery,
  endpoints: () => ({}),
});
