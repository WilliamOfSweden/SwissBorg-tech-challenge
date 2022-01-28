import { getChsbInBuyBackPoolAmount } from '.'
import { ChsbMetricsData, DoughnutChartData } from '../@types/'

export const getDoughnutChartData = (data: ChsbMetricsData) => {
  const total =
    data.chsbCirculatingSupplyTokens +
    data.chsbStackedTokens +
    data.chsbYieldPledgedTokens +
    data.chsbBurnedTokens +
    getChsbInBuyBackPoolAmount(data)

  const getStrokeDasharray = (amount: number) =>
    Math.max(amount / total, 0.002) * 377

  const getPercentage = (amount: number) => Math.max(amount / total, 0.002)

  const doughnutChartData: DoughnutChartData = [
    {
      color: "url('#stacked-gradient')",
      percentage: getPercentage(data.chsbStackedTokens),
      segmentName: 'chsbStackedPercentage',
      strokeDasharray: getStrokeDasharray(data.chsbStackedTokens),
    },
    {
      color: "url('#burned-gradient')",
      percentage: getPercentage(data.chsbBurnedTokens),
      segmentName: 'chsbBurnedTokens',
      strokeDasharray: getStrokeDasharray(data.chsbBurnedTokens),
    },
    {
      color: "url('#buy-back-gradient')",
      percentage: getPercentage(getChsbInBuyBackPoolAmount(data)),
      segmentName: 'chsbBurnedTokens',
      strokeDasharray: getStrokeDasharray(getChsbInBuyBackPoolAmount(data)),
    },
    {
      color: "url('#yield-gradient')",
      percentage: getPercentage(data.chsbYieldPledgedTokens),
      segmentName: 'chsbYieldSegment',
      strokeDasharray: getStrokeDasharray(data.chsbYieldPledgedTokens),
    },
    {
      color: "url('#circulating-gradient')",
      percentage: getPercentage(data.chsbCirculatingSupplyTokens),
      segmentName: 'chsbCirculatingSupplySegment',
      strokeDasharray: getStrokeDasharray(data.chsbCirculatingSupplyTokens),
    },
  ]

  // map(function(element, index, array) { /* ... */ }, thisArg)

  const doughnutChartDataWithRotation = doughnutChartData.map(
    (element, index, array) => {
      element.rotation =
        index === 0
          ? -90
          : array[index - 1].rotation + array[index - 1].percentage * 360

      return element
    }
  )

  return doughnutChartDataWithRotation
}
