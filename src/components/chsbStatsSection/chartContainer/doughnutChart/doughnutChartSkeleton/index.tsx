import React from 'react'

import * as doughnutChartSkeletonStyles from './doughnutChartSkeletonStyles.module.css'

const DoughnutChartSkeleton = () => (
  <svg
    className={doughnutChartSkeletonStyles.doughnutChartSkeleton}
    viewBox='0 0 153 153'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle
      cx='76.5'
      cy='76.5'
      fill='transparent'
      opacity='1'
      r='60'
      stroke='#edeff1'
      strokeDasharray='120 1880'
      strokeWidth='20'
      style={{ transform: `rotateZ(-90deg)` }}
    />
    <circle
      cx='76.5'
      cy='76.5'
      fill='transparent'
      opacity='1'
      r='60'
      stroke='#f9fafa'
      strokeDasharray='90 1880'
      strokeWidth='20'
      style={{ transform: `rotateZ(24.666deg)` }}
    />
    <circle
      cx='76.5'
      cy='76.5'
      fill='transparent'
      opacity='1'
      r='60'
      stroke='#cccccc'
      strokeDasharray='100 1880'
      strokeWidth='20'
      style={{ transform: `rotateZ(110.7deg)` }}
    />
    <circle
      cx='76.5'
      cy='76.5'
      fill='transparent'
      opacity='1'
      r='60'
      stroke='#bbbbbb'
      strokeDasharray='27 1880'
      strokeWidth='20'
      style={{ transform: `rotateZ(206deg)` }}
    />
    <circle
      cx='76.5'
      cy='76.5'
      fill='transparent'
      opacity='1'
      r='60'
      stroke='#f2f2f2'
      strokeDasharray='40 1880'
      strokeWidth='20'
      style={{ transform: `rotateZ(232deg)` }}
    />
  </svg>
)

export default DoughnutChartSkeleton
