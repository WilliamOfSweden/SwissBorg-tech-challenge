import React, { Fragment } from 'react'
import ContentLoader from 'react-content-loader'

import * as statsWrapperSkeletonStyles from './statsWrapperSkeletonStyles.module.css'

interface Props {
  twoLines: boolean
}

const StatsWrapperSkeleton = ({ twoLines }: Props) => (
  <div className={statsWrapperSkeletonStyles.skeleton}>
    <ContentLoader
      speed={2}
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect width='100%' height='100%' />
    </ContentLoader>
    {twoLines && (
      <Fragment>
        <ContentLoader
          speed={2}
          backgroundColor='#f3f3f3'
          foregroundColor='#ecebeb'
        >
          <rect width='100%' height='100%' />
        </ContentLoader>
        <ContentLoader
          speed={2}
          backgroundColor='#f3f3f3'
          foregroundColor='#ecebeb'
        >
          <rect width='100%' height='100%' />
        </ContentLoader>
      </Fragment>
    )}
  </div>
)

export default StatsWrapperSkeleton
