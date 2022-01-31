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

  const formattedData = data && getFormattedChartHeaderData(data)

  return (
    <div className={priceLabelStyles.priceLabel}>
      <p>{data && formattedData?.price}</p>
      <p style={{ color: formattedData?.deltaColor }}>
        {data && formattedData?.deltaInPrecent}
      </p>
    </div>
  )
}

export default PriceLabel
