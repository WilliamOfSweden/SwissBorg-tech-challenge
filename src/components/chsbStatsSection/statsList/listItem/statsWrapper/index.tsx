import React from 'react'

import * as statsWrapperStyles from './statsWrapperStyles.module.css'
import { getFormattedAmount } from '../../../../../utils/'
import StatsWrapperSkeleton from './statsWrapperSkeleton/'

interface Props {
  isFetching: boolean
  percentageString?: string
  stats?: number
}

const StatsWrapper = ({ isFetching, percentageString, stats }: Props) => {
  if (isFetching) {
    return <StatsWrapperSkeleton twoLines={percentageString !== undefined} />
  }

  const amount = stats && getFormattedAmount(stats)

  return (
    <div className={statsWrapperStyles.statsWrapper}>
      <p className={statsWrapperStyles.mainStats}>{amount}</p>
      {percentageString && (
        <p className={statsWrapperStyles.additionalStats}>{percentageString}</p>
      )}
    </div>
  )
}

export default StatsWrapper
