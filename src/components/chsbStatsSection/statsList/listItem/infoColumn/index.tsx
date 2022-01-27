import React from 'react'

import * as infoColumnStyles from './infoColumnStyles.module.css'

interface Props {
  text: string
}

const InfoColumn = ({ text }: Props) => (
  <p className={infoColumnStyles.infoColumn}>{text}</p>
)

export default InfoColumn
