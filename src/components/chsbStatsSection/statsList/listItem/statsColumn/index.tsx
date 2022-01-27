import React from 'react'

import * as statsColumnStyles from './statsColumnStyles.module.css'

interface Props {
  stats: string
}

const StatsColumn = ({ stats }: Props) => (
  <p className={statsColumnStyles.statsColumn}>{stats}</p>
)

export default StatsColumn
