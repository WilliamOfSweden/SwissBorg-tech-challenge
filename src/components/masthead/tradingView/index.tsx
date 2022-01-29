import React from 'react'

import * as tradingViewStyles from './tradingView.module.css'
import TradingViewHeader from './tradingViewHeader/'
import ChartWrapper from './chartWrapper/'
import TradingViewFooter from './tradingViewFooter/'

const TradingView = () => (
  <div className={tradingViewStyles.wrapper}>
    <TradingViewHeader />
    <ChartWrapper />
    <TradingViewFooter />
  </div>
)

export default TradingView
