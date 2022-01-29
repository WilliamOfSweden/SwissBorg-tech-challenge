import { ChsbPriceMonthData } from '../@types'

export const getFormatteChsbPriceData = (data: ChsbPriceMonthData[]) => [
  { data: data.map(item => [item.time, item.price]) },
]
