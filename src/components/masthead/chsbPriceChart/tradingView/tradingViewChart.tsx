import React from 'react'

import * as chartWrapperStyles from './chartWrapperStyles.module.css'
import { SymbolOverview } from 'react-ts-tradingview-widgets'

const TradingViewChart = () => (
  <div className={chartWrapperStyles.chartWrapper}>
    <div id='chart'>
      <SymbolOverview
        autosize
        bottomColor='#01c38d00'
        chartOnly
        chartType='area'
        colorTheme='dark'
        container_id='chart'
        fontColor='#ffffff'
        gridLineColor='#666666'
        isTransparent
        lineColor='#01c38d'
        scaleMode='Logarithmic'
        symbols={[['CHSBUSD']]}
        topColor='#01c38d66'
      />
    </div>
  </div>
)

export default TradingViewChart
