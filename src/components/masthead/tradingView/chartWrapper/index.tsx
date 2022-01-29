import React, { Fragment } from 'react'

const LazyChart = React.lazy(() => import('./apexchart'))

const ChartWrapper = () => {
  const isSSR = typeof window === 'undefined'

  return (
    <Fragment>
      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <LazyChart />
        </React.Suspense>
      )}
    </Fragment>
  )
}

export default ChartWrapper
