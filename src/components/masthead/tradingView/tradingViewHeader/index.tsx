import React from 'react'

import * as tradingViewHeaderStyles from './tradingViewHeaderStyles.module.css'
import { ArrowIcon, ChsbToken, UsFlag } from '../../../icons/'

const TopBar = () => (
  <header className={tradingViewHeaderStyles.header}>
    <div className={tradingViewHeaderStyles.flagsWrapper}>
      <UsFlag />
      <ArrowIcon />
      <ChsbToken />
    </div>
    <div className={tradingViewHeaderStyles.priceLabel}>
      <p>USD 0.188</p>
      <p>+4.8% 24 Hours</p>
    </div>
  </header>
)

export default TopBar
