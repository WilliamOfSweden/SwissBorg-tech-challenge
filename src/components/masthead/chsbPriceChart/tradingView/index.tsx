import React, { Fragment, lazy, Suspense, useEffect, useState } from 'react'

import * as chartWrapperStyles from './chartWrapperStyles.module.css'
const TradingViewChart = lazy(() => import('./tradingViewChart'))

const TradingView = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className={chartWrapperStyles.chartWrapper} />
  }

  return (
    <Suspense fallback={<div className={chartWrapperStyles.chartWrapper} />}>
      <TradingViewChart />
    </Suspense>
  )
}

export default TradingView
