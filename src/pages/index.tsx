import React, { Fragment } from 'react'

import SEO from '../components/shared/seo'
import Layout from '../components/layout/'
import Masthead from '../components/masthead/'
import ChsbStatsSection from '../components/chsbStatsSection/'

const IndexPage = () => (
  <Fragment>
    <SEO />
    <Layout>
      <Masthead />
      <ChsbStatsSection />
    </Layout>
  </Fragment>
)

export default IndexPage
