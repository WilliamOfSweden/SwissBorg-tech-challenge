import React from 'react'
import ContentLoader from 'react-content-loader'

import * as priceLabelSkeletonStyles from './priceLabelSkeletonStyles.module.css'

const PriceLabelSkeleton = () => (
  <div className={priceLabelSkeletonStyles.skeleton}>
    <ContentLoader
      speed={2}
      backgroundColor='#333333'
      foregroundColor='#555555'
    >
      <rect width='100%' height='100%' />
    </ContentLoader>
    <ContentLoader
      speed={2}
      backgroundColor='#333333'
      foregroundColor='#555555'
    >
      <rect width='100%' height='100%' />
    </ContentLoader>
  </div>
)

export default PriceLabelSkeleton
