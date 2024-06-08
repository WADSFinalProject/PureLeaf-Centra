import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import History from './History.jsx'
import Ongoing from './Ongoing.jsx'
import NewBatch from './New Batch.jsx'
import DryBatch from './Update Batch dry.jsx'
import PowderBatch from './Update Batch Powder.jsx'
import ShipBatch from './Update Batch Ship.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShipBatch />
  </React.StrictMode>,
)
