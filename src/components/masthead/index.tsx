import React from 'react'

import * as mastheadStyles from './masthead.module.css'
import Heading from './heading/'
import Subheading from './subheading/'
import ChsbPriceChart from './chsbPriceChart'
import BgImage from './bgImage/'

const Masthead = () => (
  <section className={mastheadStyles.masthead}>
    <div className={`${mastheadStyles.wrapper} container`}>
      <Heading />
      <Subheading />
      <ChsbPriceChart />
    </div>
    <BgImage />
  </section>
)

export default Masthead
