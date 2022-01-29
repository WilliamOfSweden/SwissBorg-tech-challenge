import React from 'react'
import ReactApexChart from 'react-apexcharts'

import { useFetchChsbPriceMonthQuery } from '../../../../redux/features/swissBorgApi/swissBorgApiSlice'
import { getFormatteChsbPriceData } from '../../../../utils/'
import options from './apexchartOptions'
import * as chartWrapperStyles from './chartWrapperStyles.module.css'

const ApexChart = () => {
  const { data, isFetching } = useFetchChsbPriceMonthQuery()

  const formattedData = data && getFormatteChsbPriceData(data!)

  return (
    <div className={chartWrapperStyles.chartWrapper} id='chart'>
      <div id='area-datetime'>
        {data && (
          <ReactApexChart
            height='100%'
            options={options}
            series={formattedData}
            type='area'
            width={'100%'}
          />
        )}
      </div>
    </div>
  )
}

export default ApexChart
