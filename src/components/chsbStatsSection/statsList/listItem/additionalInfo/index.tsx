import React from 'react'

import * as additionalInfoStyles from './additionalInfoStyles.module.css'

interface Props {
  additionalInfo: string
}

const AdditionalInfo = ({ additionalInfo }: Props) => (
  <p className={additionalInfoStyles.additionalInfo}>{additionalInfo}</p>
)

export default AdditionalInfo
