import React from 'react'

import * as chsbStatsSectionStyles from './chsbStatsSectionStyles.module.css'
import SectionHeading from './sectionHeading/'
import ChartContainer from './chartContainer/'
import StatsList from './statsList/'

const ChsbStatsSection = () => (
  <section className={`${chsbStatsSectionStyles.chsbStatsSection} container`}>
    <SectionHeading />
    <ChartContainer />
    <StatsList />
  </section>
)

export default ChsbStatsSection
