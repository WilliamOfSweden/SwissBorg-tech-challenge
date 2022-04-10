import React, { ReactElement } from 'react'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'

interface Props {
  element: ReactElement
}

export const wrapRootElement = ({ element }: Props) => (
  <Provider store={store}>{element}</Provider>
)
