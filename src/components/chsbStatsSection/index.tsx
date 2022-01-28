import React from 'react'

import { useFetchChsbMetricsQuery } from '../../redux/features/swissBorgApi/swissBorgApiSlice'
import * as chsbStatsSectionStyles from './chsbStatsSectionStyles.module.css'
import SectionHeading from './sectionHeading/'
import ChartContainer from './chartContainer/'
import StatsList from './statsList/'

const ChsbStatsSection = () => {
  const { data, isFetching } = useFetchChsbMetricsQuery()

  return (
    <section className={`${chsbStatsSectionStyles.chsbStatsSection} container`}>
      <SectionHeading />
      <ChartContainer data={data} isFetching={isFetching} />
      <StatsList data={data} isFetching={isFetching} />
    </section>
  )
}

export default ChsbStatsSection
