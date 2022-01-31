import { CoinGeckoChsbUsdData } from '../@types/'

export const getFormattedChartHeaderData = (data: CoinGeckoChsbUsdData) => ({
  price: `USD ${data.swissborg.usd.toFixed(3)}`,
  deltaInPrecent: `${
    data.swissborg.usd_24h_change >= 0 ? '+' : ''
  }${data.swissborg.usd_24h_change.toFixed(2)}% 24 Hours`,
  deltaColor: data.swissborg.usd_24h_change >= 0 ? '#019c71' : '#ff274b',
})
