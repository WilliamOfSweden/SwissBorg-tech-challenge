import React from 'react'

import * as mastheadStyles from './masthead.module.css'
import Heading from './heading/'
import Subheading from './subheading/'
import TradingView from './tradingView/'
import BgImage from './bgImage/'

const Masthead = () => (
  <section className={mastheadStyles.masthead}>
    <div className={`${mastheadStyles.wrapper} container`}>
      <Heading />
      <Subheading />
      <TradingView />
    </div>
    <BgImage />
  </section>
)

export default Masthead
