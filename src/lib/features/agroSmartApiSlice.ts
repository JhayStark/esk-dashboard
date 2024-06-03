import { apiSlice } from '../api/apiSlice';

const backendUrl = process.env.NEXT_PUBLIC_MTN_BACKEND_URL;

const agroSmartApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getFarmerTypes: builder.query({
      query: ({}) => `${backendUrl}/farmer-types`,
    }),
    getWeatherData: builder.query({
      query: ({ location }) =>
        `${backendUrl}/weather-forecasts?location=${location}`,
    }),
  }),
});

export const { useGetFarmerTypesQuery, useGetWeatherDataQuery } =
  agroSmartApiSlice;
