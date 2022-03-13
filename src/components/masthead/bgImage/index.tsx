import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import * as bgImageStyles from './bgImage.module.css'

const BgImage = () => (
  <StaticImage
    alt='Abstract hero background image.'
    className={bgImageStyles.bgImage}
    formats={['auto', 'webp', 'avif']}
    layout='fullWidth'
    loading='eager'
    placeholder='none'
    src='../../../images/masthead-bg.png'
  />
)

export default BgImage
