import React, { Fragment } from 'react'

import {
  BuyBackIcon,
  ChsbTokenIcon,
  ChsbYieldIcon,
  SwissBorgBurnedIcon,
  SwissBorgPremiumIcon,
} from '../../icons/'
import ListItem from './listItem/'

const StatsListContent = [
  {
    icon: <ChsbTokenIcon />,
    stats: '128,338,928',
    text: 'Remaining circulating supply',
  },
  {
    additionalInfo: '(26.11% of Circulating supply)',
    icon: <SwissBorgPremiumIcon />,
    stats: '183,431,153',
    text: 'CHSB in Premium accounts',
  },
  {
    additionalInfo: '(54.06% of Circulating supply)',
    icon: <ChsbYieldIcon />,
    stats: '380,661,565',
    text: 'CHSB in Yield Program',
  },
  {
    icon: <SwissBorgBurnedIcon />,
    stats: '10,564,614.29',
    text: 'Circulating supply burned',
  },
  {
    icon: <BuyBackIcon />,
    stats: '942,260',
    text: 'CHSB in buyback pool',
  },
]

const StatsList = () => (
  <Fragment>
    {StatsListContent.map(listItem => (
      <ListItem content={listItem} />
    ))}
  </Fragment>
)

export default StatsList
