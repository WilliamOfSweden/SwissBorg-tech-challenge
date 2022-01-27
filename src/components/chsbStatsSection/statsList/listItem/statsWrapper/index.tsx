import React from 'react'

import * as statsWrapperStyles from './statsWrapperStyles.module.css'
import { getFormattedAmount } from '../../../../../utils/'

interface Props {
  percentageString?: string
  stats?: number
}

const StatsWrapper = ({ percentageString, stats }: Props) => {
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
