import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { login, logout } from '../features/auth/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: '/',
  credentials: 'omit',
  prepareHeaders: (headers, { getState }: any) => {
    const token = getState().auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReath = async (args: any, api: any, extraOptions: any) => {
  const { dispatch } = api;
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    const persistedData = localStorage.getItem('persistedData');
    dispatch(login(persistedData));
    // Retry original query with existing token
    result = await baseQuery(args, api, extraOptions);
    if (result.error && result.error.status === 401) {
      localStorage.removeItem('persistedData');
      dispatch(logout());
      window.location.replace('/login');
    }
    console.log('no token');
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReath,
  tagTypes: ['User', 'Prices', 'Auth'],
  endpoints: builder => ({}),
});
