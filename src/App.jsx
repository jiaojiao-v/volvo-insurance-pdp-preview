import { useState } from 'react'
import Header from './components/Header'
import MarketSelector from './components/MarketSelector'
import InsurancePDP from './components/InsurancePDP'
import { markets } from './data/markets'
import './App.css'

export default function App() {
  const [selectedMarketId, setSelectedMarketId] = useState('gb')

  const selectedMarket = markets.find((m) => m.id === selectedMarketId) || markets[0]

  return (
    <div className="app">
      <Header />

      <div className="toolbar">
        <div className="toolbarInner">
          <MarketSelector
            selectedMarketId={selectedMarketId}
            onChange={setSelectedMarketId}
          />
          <p className="toolbarHint">
            Switch markets to preview localised insurance content
          </p>
        </div>
      </div>

      <main className="main">
        <InsurancePDP key={selectedMarket.id} market={selectedMarket} />
      </main>
    </div>
  )
}
