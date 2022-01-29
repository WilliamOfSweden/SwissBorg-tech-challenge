import React from 'react'

import * as chartWrapperStyles from './chartWrapperStyles.module.css'
import { SymbolOverview } from 'react-ts-tradingview-widgets'

const TradingView = () => (
  <div className={chartWrapperStyles.chartWrapper} id='chart'>
    <SymbolOverview
      autosize
      bottomColor='#01c38d00'
      chartOnly
      chartType='area'
      colorTheme='dark'
      container_id='chart'
      gridLineColor='#666666'
      isTransparent
      lineColor='#01c38d'
      symbols={[['CHSBUSD']]}
      topColor='#01c38d66'
      fontColor='#ffffff'
      scaleMode='Logarithmic'
    />
  </div>
)

export default TradingView
