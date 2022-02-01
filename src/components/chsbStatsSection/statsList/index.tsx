import React, { Fragment } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { ChsbMetricsData } from '../../../@types/'
import {
  BuyBackIcon,
  ChsbTokenIcon,
  ChsbYieldIcon,
  SwissBorgBurnedIcon,
  SwissBorgPremiumIcon,
} from '../../icons/'
import {
  getPercentageString,
  getChsbInBuyBackPoolAmount,
} from '../../../utils/'
import ListItem from './listItem/'

interface Props {
  data?: ChsbMetricsData
  isFetching: boolean
}

const StatsList = ({ data, isFetching }: Props) => {
  const StatsListContent = [
    {
      icon: <ChsbTokenIcon />,
      stats: data?.chsbCirculatingSupplyTokens,
      text: 'Remaining circulating supply',
    },
    {
      icon: <SwissBorgPremiumIcon />,
      percentageString: getPercentageString(
        data?.chsbStackedPercentage,
        'of Circulating supply'
      ),
      stats: data?.chsbStackedTokens,
      text: 'CHSB in Premium accounts',
    },
    {
      icon: <ChsbYieldIcon />,
      percentageString: getPercentageString(
        data?.chsbInYieldPercentage,
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
      {StatsListContent.map(listItem => (
        <ListItem content={listItem} isFetching={isFetching} key={uuidv4()} />
      ))}
    </Fragment>
  )
}

export default StatsList
