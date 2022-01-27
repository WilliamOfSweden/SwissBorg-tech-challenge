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
import { getPercentageString, getChsbInBuyBackPoolAmount } from '../../../utils'
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
      icon: <SwissBorgPremiumIcon />,
      percentageString:
        data &&
        getPercentageString(
          data.chsbStackedPercentage,
          'of Circulating supply'
        ),
      stats: data?.chsbStackedTokens,
      text: 'CHSB in Premium accounts',
    },
    {
      icon: <ChsbYieldIcon />,
      percentageString:
        data &&
        getPercentageString(
          data.chsbInYieldPercentage,
          'of Circulating supply'
        ),
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
      stats: data && getChsbInBuyBackPoolAmount(data),
      text: 'CHSB in buyback pool',
    },
  ]

  return (
    <Fragment>
      {!isFetching &&
        StatsListContent.map(listItem => (
          <ListItem content={listItem} key={uuidv4()} />
        ))}
    </Fragment>
  )
}

export default StatsList
