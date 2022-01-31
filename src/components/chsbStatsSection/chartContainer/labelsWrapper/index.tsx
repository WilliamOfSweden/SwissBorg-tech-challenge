import React from 'react'
import { v4 as uuidv4 } from 'uuid'

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
        <li key={uuidv4()}>
          <span />
          <p>{label}</p>
        </li>
      ))}
    </ul>
  )
}

export default LabelsWrapper
