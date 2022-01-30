import { getChsbInBuyBackPoolAmount } from '../'
import { chsbMetricsMockData } from '../../../__mocks__/'

describe('Gets the amount of CHSB that is in the buy-back-pool.', () => {
  it('should take ChsbMetricsData as an argument and return a number.', () => {
    expect(typeof getChsbInBuyBackPoolAmount(chsbMetricsMockData)).toBe(
      'number'
    )
    expect(getChsbInBuyBackPoolAmount(chsbMetricsMockData)).toBe(107882)
  })
})
