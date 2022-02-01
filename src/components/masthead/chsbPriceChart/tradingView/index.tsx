import React, { Fragment, lazy, Suspense, useEffect, useState } from 'react'

import * as chartWrapperStyles from './chartWrapperStyles.module.css'
const TradingViewChart = lazy(() => import('./tradingViewChart'))

const TradingView = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <Fragment>
      {!isMounted ? (
        <div className={chartWrapperStyles.chartWrapper} />
      ) : (
        <Suspense
          fallback={<div className={chartWrapperStyles.chartWrapper} />}
        >
          <TradingViewChart />
        </Suspense>
      )}
    </Fragment>
  )
}

export default TradingView
