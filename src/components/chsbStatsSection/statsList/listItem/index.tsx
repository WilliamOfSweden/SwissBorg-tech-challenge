import React, { ReactNode } from 'react'
import InfoWrapper from './infoWrapper'

import * as listItemStyles from './listItemStyles.module.css'
import StatsWrapper from './statsWrapper'

interface Props {
  content: {
    additionalInfo?: string
    icon: ReactNode
    stats: string
    text: string
  }
}

const ListItem = ({
  content: { additionalInfo, icon, stats, text },
}: Props) => {
  return (
    <div className={listItemStyles.listItem}>
      <div className={listItemStyles.iconWrapper}>{icon}</div>
      <StatsWrapper additionalInfo={additionalInfo} stats={stats} />
      <InfoWrapper text={text} />
    </div>
  )
}

export default ListItem
