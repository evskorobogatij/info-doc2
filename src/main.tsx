import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import './models/init'

const rootDoc = document.getElementById('root')
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(rootDoc!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
