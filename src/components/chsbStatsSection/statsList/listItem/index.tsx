import React, { ReactNode } from 'react'

import * as listItemStyles from './listItemStyles.module.css'
import StatsWrapper from './statsWrapper'
import InfoWrapper from './infoWrapper'

interface Props {
  content: {
    percentageString?: string
    icon: ReactNode
    stats?: number
    text: string
  }
}

const ListItem = ({
  content: { percentageString, icon, stats, text },
}: Props) => (
  <div className={listItemStyles.listItem}>
    <div className={listItemStyles.iconWrapper}>{icon}</div>
    <StatsWrapper percentageString={percentageString} stats={stats} />
    <InfoWrapper text={text} />
  </div>
)

export default ListItem
