import React from 'react'

import Layout from '../layout'
import * as mastheadStyles from './masthead.module.css'
import Heading from './heading/'
import BgImage from './bgImage/'

const Masthead = () => (
  <Layout>
    <section className={mastheadStyles.masthead}>
      <Heading />
      <BgImage />
    </section>
  </Layout>
)

export default Masthead
