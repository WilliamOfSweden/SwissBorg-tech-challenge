import { getPercentageString } from '../'
import { chsbMetricsMockData } from '../../../__mocks__/'

describe('Gets formatted string of percentage information for the stats table.', () => {
  it('should take a number and a string as arguments and return a formatted string.', () => {
    expect(
      getPercentageString(
        chsbMetricsMockData.chsbStackedPercentage,
        'of Circulating supply'
      )
    ).toBe('(19.83% of Circulating supply)')
  })
})
