import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import { ChsbMetricsData } from '../../../../@types/'
import DoughnutChartSkeleton from './doughnutChartSkeleton/'
import { getDoughnutChartData } from '../../../../utils/'
import * as doughnutChartStyles from './doughnutChartStyles.module.css'
import SvgDefinitions from './svgDefinitions'
import Segment from './segment'

interface Props {
  data?: ChsbMetricsData
  isFetching: boolean
}

const DoughnutChart = ({ data, isFetching }: Props) => {
  if (isFetching || !data) {
    return <DoughnutChartSkeleton />
  }

  const segmentData = getDoughnutChartData(data!)

  return (
    <svg
      className={doughnutChartStyles.doughnutChart}
      viewBox='0 0 153 153'
      xmlns='http://www.w3.org/2000/svg'
    >
      <SvgDefinitions />
      {segmentData.map(segment => (
        <Segment key={uuidv4()} segmentData={segment} />
      ))}
    </svg>
  )
}

export default DoughnutChart
