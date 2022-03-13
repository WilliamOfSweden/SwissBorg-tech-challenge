import React from 'react'

import * as infoWrapperStyles from './infoWrapperStyles.module.css'

interface Props {
  text: string
}

const InfoWrapper = ({ text }: Props) => (
  <div className={infoWrapperStyles.infoWrapper}>
    <p className={infoWrapperStyles.paragraph}>{text}</p>
  </div>
)

export default InfoWrapper
