import { getFormattedAmount } from '../'
import { chsbMetricsMockData } from '../../../__mocks__/'

describe('Gets formatted amount.', () => {
  it('should take a number as an argument and return a string of the amount formatted.', () => {
    expect(getFormattedAmount(chsbMetricsMockData.chsbBurnedTokens)).toBe(
      '4,898,917.07'
    )
  })
})
