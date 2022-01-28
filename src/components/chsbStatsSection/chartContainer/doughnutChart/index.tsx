import React from 'react'

import { ChsbMetricsData } from '../../../../@types/'
import { getDoughnutChartData } from '../../../../utils'
import SvgDefinitions from './svgDefinitions'
import * as doughnutChartStyles from './doughnutChartStyles.module.css'
import Segment from './segment'

interface Props {
  data?: ChsbMetricsData
  isFetching: boolean
}

const DoughnutChart = ({ data, isFetching }: Props) => {
  const segmentData = data && getDoughnutChartData(data!)

  return (
    <svg
      className={doughnutChartStyles.doughnutChart}
      viewBox='0 0 153 153'
      xmlns='http://www.w3.org/2000/svg'
    >
      <SvgDefinitions />
      {segmentData &&
        segmentData.map(segment => <Segment segmentData={segment} />)}
    </svg>
  )
}

export default DoughnutChart
