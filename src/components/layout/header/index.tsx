import React from 'react'
import Headroom from 'react-headroom'

import * as headerStyles from './headerStyles.module.css'
import SbBrandLogo from '../../icons/sbBrandLogo'

const Header = () => (
  <Headroom className={headerStyles.headroom}>
    <header className={headerStyles.header}>
      <div className='container'>
        <SbBrandLogo />
      </div>
    </header>
  </Headroom>
)

export default Header
