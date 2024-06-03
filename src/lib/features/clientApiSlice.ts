import { apiSlice } from '@/lib/api/apiSlice';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const clientApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    transactions: builder.query({
      query: ({ pageNumber = 1, pageSize = 10, filterText = '' }) =>
        `${backendUrl}/reports/transactions?page=${pageNumber}&limit=${pageSize}&search=${filterText}`,
    }),
    clientServiceTotals: builder.query({
      query: () => `${backendUrl}/reports/service-total`,
    }),
    getClients: builder.query({
      query: ({ pageNumber = 1, pageSize = 10, filterText = '' }) =>
        `${backendUrl}/clients?page=${pageNumber}&limit=${pageSize}&search=${filterText}`,
    }),
    getClientServiceStats: builder.query({
      query: ({}) => `${backendUrl}/clients/total-users`,
    }),
  }),
});

export const {
  useTransactionsQuery,
  useClientServiceTotalsQuery,
  useGetClientsQuery,
  useGetClientServiceStatsQuery,
} = clientApiSlice;
