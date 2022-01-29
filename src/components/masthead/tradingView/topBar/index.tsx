import React from 'react'

import * as topBarStyles from './topBarStyles.module.css'
import { ArrowIcon, ChsbToken, UsFlag } from '../../../icons/'

const TopBar = () => (
  <div className={topBarStyles.topBar}>
    <div className={topBarStyles.cornerBox}>
      <div className={topBarStyles.flagsWrapper}>
        <UsFlag />
        <ArrowIcon />
        <ChsbToken />
      </div>
    </div>
  </div>
)

export default TopBar
