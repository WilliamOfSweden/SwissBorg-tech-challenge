import { ChsbMetricsData } from '../@types/'

export const getChsbInBuyBackPoolAmount = (data: ChsbMetricsData) => {
  const total = (data.chsbStackedTokens * 100) / data.chsbStackedPercentage

  const chsbInBuyBackPoolAmount =
    total -
    data.chsbCirculatingSupplyTokens -
    data.chsbStackedTokens -
    data.chsbYieldPledgedTokens -
    data.chsbBurnedTokens

  return Math.round(chsbInBuyBackPoolAmount)
}
