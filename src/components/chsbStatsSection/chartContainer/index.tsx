import React from 'react'

import { ChsbMetricsData } from '../../../@types'
import * as chartContainerStyles from './chartContainerStyles.module.css'
import DoughnutChart from './doughnutChart/'
import LabelsWrapper from './labelsWrapper/'

interface Props {
  data?: ChsbMetricsData
  isFetching: boolean
}

const ChartContainer = ({ data, isFetching }: Props) => (
  <div className={chartContainerStyles.wrapper}>
    <DoughnutChart data={data} isFetching={isFetching} />
    {data && <LabelsWrapper />}
  </div>
)

export default ChartContainer
