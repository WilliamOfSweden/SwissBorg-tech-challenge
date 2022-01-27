import React, { Fragment } from 'react'
import { v4 as uuidv4 } from 'uuid'

import {
  BuyBackIcon,
  ChsbTokenIcon,
  ChsbYieldIcon,
  SwissBorgBurnedIcon,
  SwissBorgPremiumIcon,
} from '../../icons/'
import { useFetchChsbMetricsQuery } from '../../../redux/features/swissBorgApi/swissBorgApiSlice'
import ListItem from './listItem/'

const StatsList = () => {
  const { data, isFetching } = useFetchChsbMetricsQuery()

  const StatsListContent = [
    {
      icon: <ChsbTokenIcon />,
      stats: data?.chsbCirculatingSupplyTokens,
      text: 'Remaining circulating supply',
    },
    {
      additionalInfo: '(26.11% of Circulating supply)',
      icon: <SwissBorgPremiumIcon />,
      stats: data?.chsbStackedTokens,
      text: 'CHSB in Premium accounts',
    },
    {
      additionalInfo: '(54.06% of Circulating supply)',
      icon: <ChsbYieldIcon />,
      stats: data?.chsbYieldPledgedTokens,
      text: 'CHSB in Yield Program',
    },
    {
      icon: <SwissBorgBurnedIcon />,
      stats: data?.chsbBurnedTokens,
      text: 'Circulating supply burned',
    },
    {
      icon: <BuyBackIcon />,
      stats: data?.chsbBurnedTokens,
      text: 'CHSB in buyback pool',
    },
  ]

  console.log(data)
  return (
    <Fragment>
      {StatsListContent.map(listItem => (
        <ListItem content={listItem} key={uuidv4()} />
      ))}
    </Fragment>
  )
}

export default StatsList
