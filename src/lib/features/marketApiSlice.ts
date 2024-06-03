import { apiSlice } from '../api/apiSlice';

const backendUrl = process.env.NEXT_PUBLIC_MARKETPRICE_BACKEND_URL;

const marketPriceApis = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getMarketPrices: builder.query({
      query: ({
        pageNumber = 1,
        pageSize = 10,
        markets = '',
        startDate = '',
        endDate = '',
        country = '',
        commodity = '',
      }) =>
        `${backendUrl}/market-prices?page=${pageNumber}&limit=${pageSize}&commodity=${commodity}&markets=${markets}&startDate=${startDate}&endDate=${endDate}&country=${country}`,
    }),
    getCountries: builder.query({
      query: () => `${backendUrl}/countries`,
    }),
    getCommodities: builder.query({
      query: () => `${backendUrl}/market-prices/commodities`,
    }),
  }),
});

export const {
  useGetMarketPricesQuery,
  useGetCountriesQuery,
  useGetCommoditiesQuery,
} = marketPriceApis;
