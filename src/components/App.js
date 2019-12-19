import React from 'react'
import { Provider } from 'react-redux'

import store from '../store/store'

import '../styles/App.styl'

const App = () => {
  return (
    <Provider store={store}>
      <div className="wrapper"></div>
    </Provider>
  )
}

export default App
