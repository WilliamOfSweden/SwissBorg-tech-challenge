import React from 'react'

import * as chartContainerStyles from './chartContainerStyles.module.css'
import DoughnutChart from './doughnutChart/'
import LabelsWrapper from './labelsWrapper/'

const ChartContainer = () => (
  <div className={chartContainerStyles.wrapper}>
    <DoughnutChart />
    <LabelsWrapper />
  </div>
)

export default ChartContainer
