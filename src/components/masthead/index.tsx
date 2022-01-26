import React from 'react'

import Layout from '../layout'
import * as mastheadStyles from './masthead.module.css'
import Heading from './heading/'
import Subheading from './subheading/'
import TradingView from './tradingView/'
import BgImage from './bgImage/'

const Masthead = () => (
  <Layout>
    <section className={mastheadStyles.masthead}>
      <div className={`${mastheadStyles.wrapper} container`}>
        <Heading />
        <Subheading />
        <TradingView />
      </div>
      <BgImage />
    </section>
  </Layout>
)

export default Masthead
