import React from 'react'

import * as statsWrapperStyles from './statsWrapperStyles.module.css'

interface Props {
  additionalInfo?: string
  stats: string
}

const StatsWrapper = ({ additionalInfo, stats }: Props) => {
  return (
    <div className={statsWrapperStyles.statsWrapper}>
      <p className={statsWrapperStyles.mainStats}>{stats}</p>
      {additionalInfo && (
        <p className={statsWrapperStyles.additionalStats}>{additionalInfo}</p>
      )}
    </div>
  )
}

export default StatsWrapper
