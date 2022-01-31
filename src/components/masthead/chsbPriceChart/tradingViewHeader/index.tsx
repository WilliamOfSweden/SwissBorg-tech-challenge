import React from 'react'

import * as tradingViewHeaderStyles from './tradingViewHeaderStyles.module.css'
import { ArrowIcon, ChsbToken, UsFlag } from '../../../icons/'
import PriceLabel from './priceLabel/'

const TopBar = () => (
  <header className={tradingViewHeaderStyles.header}>
    <div className={tradingViewHeaderStyles.flagsWrapper}>
      <UsFlag />
      <ArrowIcon />
      <ChsbToken />
    </div>
    <PriceLabel />
  </header>
)

export default TopBar
