import React, { ReactNode } from 'react'

import * as listItemStyles from './listItemStyles.module.css'
import StatsWrapper from './statsWrapper'
import InfoWrapper from './infoWrapper'

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
}: Props) => (
  <div className={listItemStyles.listItem}>
    <div className={listItemStyles.iconWrapper}>{icon}</div>
    <StatsWrapper additionalInfo={additionalInfo} stats={stats} />
    <InfoWrapper text={text} />
  </div>
)

export default ListItem
