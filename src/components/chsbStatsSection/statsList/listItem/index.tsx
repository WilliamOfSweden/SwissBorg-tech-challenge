import React, { ReactNode } from 'react'

import * as listItemStyles from './listItemStyles.module.css'
import StatsColumn from './statsColumn/'
import InfoColumn from './infoColumn'
import AdditionalInfo from './additionalInfo/'

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
      <div style={{ paddingTop: '0.2rem' }}>{icon}</div>
      <div style={{ marginLeft: '2.2rem' }}>
        <StatsColumn stats={stats} />
        {additionalInfo && <AdditionalInfo additionalInfo={additionalInfo} />}
        <div style={{ height: '0.5rem' }} />
        <InfoColumn text={text} />
      </div>
    </div>
  )
}

export default ListItem
