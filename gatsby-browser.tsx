import React, { ReactElement } from 'react'
import { Provider } from 'react-redux'

import { store } from './src/redux/store'
import './src/styles/global.css'
import './src/styles/fonts/index.css'
import './src/styles/fonts/100.css'
import './src/styles/fonts/200.css'
import './src/styles/fonts/300.css'
import './src/styles/fonts/600.css'

interface Props {
  element: ReactElement
}

export const wrapRootElement = ({ element }: Props) => (
  <Provider store={store}>{element}</Provider>
)
