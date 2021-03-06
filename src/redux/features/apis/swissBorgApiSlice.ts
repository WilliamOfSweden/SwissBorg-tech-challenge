import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ChsbMetricsData, ChsbPriceMonthData } from '../../../@types'

export const swissBorgApiSlice = createApi({
  reducerPath: 'swissBorgApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://chsb.my-test-domain.website',
  }),
  endpoints(builder) {
    return {
      fetchChsbPriceMonth: builder.query<ChsbPriceMonthData[], void>({
        query() {
          return '/chsb-price-month'
        },
      }),
      fetchChsbMetrics: builder.query<ChsbMetricsData, void>({
        query() {
          return '/chsb-metrics'
        },
      }),
    }
  },
})

export const { useFetchChsbMetricsQuery, useFetchChsbPriceMonthQuery } =
  swissBorgApiSlice
