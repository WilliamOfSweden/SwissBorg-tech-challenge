import { getDoughnutChartData } from '../'
import { chsbMetricsMockData } from '../../../__mocks__/'

describe('Gets data needed for the doughnut chart.', () => {
  it('should take ChsbMetricsData as an argument and return a an object with formatted data.', () => {
    expect(Array.isArray(getDoughnutChartData(chsbMetricsMockData))).toBe(true)

    expect(typeof getDoughnutChartData(chsbMetricsMockData)[0]).toBe('object')

    expect(getDoughnutChartData(chsbMetricsMockData)[0]).toEqual({
      color: "url('#stacked-gradient')",
      percentage: 0.1982999999849768,
      segmentName: 'chsbStackedPercentage',
      strokeDasharray: 74.75909999433625,
      rotation: -90,
    })
  })
})
