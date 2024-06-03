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
    getClimateAdviceByDate: builder.query({
      query: ({ date }) => `${backendUrl}/climate-smart?date_published=${date}`,
    }),
    addClimateAdvice: builder.mutation({
      query: ({ body }) => ({
        url: `${backendUrl}/climate-smart`,
        method: 'POST',
        body,
      }),
    }),
    editClimateAdvice: builder.mutation({
      query: ({ body, id }) => ({
        url: `${backendUrl}/climate-smart/${id}`,
        method: 'PUT',
        body,
      }),
    }),
  }),
});

export const {
  useGetFarmerTypesQuery,
  useGetWeatherDataQuery,
  useEditClimateAdviceMutation,
  useGetClimateAdviceByDateQuery,
  useAddClimateAdviceMutation,
} = agroSmartApiSlice;
