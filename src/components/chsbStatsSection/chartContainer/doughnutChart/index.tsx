import React from 'react'

import SvgDefinitions from './svgDefinitions'
import * as doughnutChartStyles from './doughnutChartStyles.module.css'
import ChsbYieldSegment from './chsbYieldSegment'
import ChsbPremiumSegment from './chsbPremiumSegment'
import RemainingSupplySegment from './remainingSupplySegment'
import ChsbBurnedSegment from './chsbBurnedSegement'
import ChsbBuyBackSegment from './chsbBuyBackSegment'

const DoughnutChart = () => (
  <svg
    className={doughnutChartStyles.doughnutChart}
    viewBox='0 0 153 153'
    xmlns='http://www.w3.org/2000/svg'
  >
    <SvgDefinitions />
    <RemainingSupplySegment />
    <ChsbPremiumSegment />
    <ChsbYieldSegment />
    <ChsbBurnedSegment />
    <ChsbBuyBackSegment />
  </svg>
)

export default DoughnutChart
