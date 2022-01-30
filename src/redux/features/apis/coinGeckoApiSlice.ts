import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CoinGeckoChsbUsdData } from '../../../@types/'

export const coinGeckoApiSlice = createApi({
  reducerPath: 'coinGeckoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.coingecko.com/api/v3',
  }),
  endpoints(builder) {
    return {
      fetchCoinGeckoChsbUsdPrice: builder.query<CoinGeckoChsbUsdData, void>({
        query() {
          return '/simple/price?ids=swissborg&vs_currencies=usd&include_24hr_change=true'
        },
      }),
    }
  },
})

export const { useFetchCoinGeckoChsbUsdPriceQuery } = coinGeckoApiSlice
