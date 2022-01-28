import React from 'react'

import * as labelsWrapperStyles from './labelsWrapperStyles.module.css'

const LabelsWrapper = () => {
  const labels = [
    'In Premium accounts',
    'Burned',
    'In Buyback Pool',
    'In Yield Program',
    'Circulating supply',
  ]

  return (
    <ul className={labelsWrapperStyles.labelsWrapper}>
      {labels.map(label => (
        <li>
          <span />
          <p>{label}</p>
        </li>
      ))}
    </ul>
  )
}

export default LabelsWrapper
