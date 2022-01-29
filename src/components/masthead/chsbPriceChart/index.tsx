import React from 'react'

import * as tradingViewStyles from './tradingView.module.css'
import TradingViewHeader from './tradingViewHeader'
import TradingView from './tradingView/'
import TradingViewFooter from './tradingViewFooter'

const ChsbPriceChart = () => (
  <div className={tradingViewStyles.wrapper}>
    <TradingViewHeader />
    <TradingView />
    <TradingViewFooter />
  </div>
)

export default ChsbPriceChart
