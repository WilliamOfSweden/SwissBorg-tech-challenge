import { getFormattedChartHeaderData } from '../'
import { coinGeckoChsbUsdMockData } from '../../../__mocks__/'

describe('Gets formatted data for chart header.', () => {
  it('should take an object as an arguemnt and return an with the formatted data.', () => {
    expect(getFormattedChartHeaderData(coinGeckoChsbUsdMockData)).toEqual({
      deltaColor: '#ff274b',
      deltaInPrecent: '-3.46% 24 Hours',
      price: 'USD 0.583',
    })
  })
})
