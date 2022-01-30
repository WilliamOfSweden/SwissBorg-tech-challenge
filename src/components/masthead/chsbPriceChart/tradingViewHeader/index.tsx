import React from 'react'

import { useFetchCoinGeckoChsbUsdPriceQuery } from '../../../../redux/features/apis/coinGeckoApiSlice'
import { getFormattedChartHeaderData } from '../../../../utils'
import * as tradingViewHeaderStyles from './tradingViewHeaderStyles.module.css'
import { ArrowIcon, ChsbToken, UsFlag } from '../../../icons'

const TopBar = () => {
  const { data, isFetching } = useFetchCoinGeckoChsbUsdPriceQuery()

  const formattedData = data && getFormattedChartHeaderData(data)

  return (
    <header className={tradingViewHeaderStyles.header}>
      <div className={tradingViewHeaderStyles.flagsWrapper}>
        <UsFlag />
        <ArrowIcon />
        <ChsbToken />
      </div>
      <div className={tradingViewHeaderStyles.priceLabel}>
        <p>{data && formattedData?.price}</p>
        <p style={{ color: formattedData?.deltaColor }}>
          {data && formattedData?.deltaInPrecent}
        </p>
      </div>
    </header>
  )
}

export default TopBar
