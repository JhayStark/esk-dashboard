import { apiSlice } from '@/lib/api/apiSlice';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: `${backendUrl}/auth/login`,
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;
