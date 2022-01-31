import React from 'react'

import { useFetchCoinGeckoChsbUsdPriceQuery } from '../../../../../redux/features/apis/coinGeckoApiSlice'
import PriceLabelSkeleton from './priceLabelSkeleton/'
import { getFormattedChartHeaderData } from '../../../../../utils/'
import * as priceLabelStyles from './priceLabelStyles.module.css'

const PriceLabel = () => {
  const { data, isFetching } = useFetchCoinGeckoChsbUsdPriceQuery()

  if (isFetching) {
    return <PriceLabelSkeleton />
  }

  const formattedData = data?.swissborg && getFormattedChartHeaderData(data)

  if (!formattedData) {
    return null
  }

  return (
    <div className={priceLabelStyles.priceLabel}>
      <p>{formattedData && formattedData?.price}</p>
      <p style={{ color: formattedData?.deltaColor }}>
        {formattedData && formattedData?.deltaInPrecent}
      </p>
    </div>
  )
}

export default PriceLabel
