import React from 'react'

import * as chsbPriceChartStyles from './chsbPriceChartStyles.module.css'
import TradingViewHeader from './tradingViewHeader/'
import TradingView from './tradingView/'
import TradingViewFooter from './tradingViewFooter/'

const ChsbPriceChart = () => (
  <div className={chsbPriceChartStyles.wrapper}>
    <TradingViewHeader />
    <TradingView />
    <TradingViewFooter />
  </div>
)

export default ChsbPriceChart
