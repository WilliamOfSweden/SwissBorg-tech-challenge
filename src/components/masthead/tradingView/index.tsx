import React from 'react'

import * as tradingViewStyles from './tradingView.module.css'
import TopBar from './topBar/'
import ChartWrapper from './chartWrapper/'

const TradingView = () => (
  <div className={tradingViewStyles.wrapper}>
    <TopBar />
    <ChartWrapper />
  </div>
)

export default TradingView
