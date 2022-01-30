import { configureStore } from '@reduxjs/toolkit'

import { swissBorgApiSlice } from '../features/apis/swissBorgApiSlice'
import { coinGeckoApiSlice } from '../features/apis/coinGeckoApiSlice'

export const store = configureStore({
  reducer: {
    [swissBorgApiSlice.reducerPath]: swissBorgApiSlice.reducer,
    [coinGeckoApiSlice.reducerPath]: coinGeckoApiSlice.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware()
      .concat(swissBorgApiSlice.middleware)
      .concat(coinGeckoApiSlice.middleware)
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
