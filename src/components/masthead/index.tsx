import React from 'react'

import Layout from '../layout'
import * as mastheadStyles from './masthead.module.css'
import BgImage from './bgImage/'

const Masthead = () => (
  <Layout>
    <section className={mastheadStyles.masthead}>
      <BgImage />
    </section>
  </Layout>
)

export default Masthead
