import React from 'react'

import * as labelsWrapperStyles from './labelsWrapperStyles.module.css'

type Props = {}

const LabelsWrapper = (props: Props) => (
  <ul className={labelsWrapperStyles.labelsWrapper}>
    <li>
      <span />
      <p>In Premium accounts</p>
    </li>
    <li>
      <span />
      <p>Burned</p>
    </li>
    <li>
      <span />
      <p>In Yield Program</p>
    </li>
    <li>
      <span />
      <p>Circulating supply</p>
    </li>
    <li>
      <span />
      <p>In Buyback Pool</p>
    </li>
  </ul>
)

export default LabelsWrapper
