import React, { useState } from 'react'
import Hero from './components/Hero'
import FlowerCatalog from './components/FlowerCatalog'
import BouquetBuilder from './components/BouquetBuilder'
import MessageCard from './components/MessageCard'
import './App.css'

export default function App() {
  const [bouquet, setBouquet] = useState([])
  const [bushIndex, setBushIndex] = useState(0)
  const [message, setMessage] = useState('')
  const [recipientName, setRecipientName] = useState('')

  const handleStart = () => {
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })
  }

  const addFlower = (flower) => {
    if (bouquet.length >= 8) return
    setBouquet(prev => [...prev, flower])
  }

  const removeFlower = (flowerId) => {
    setBouquet(prev => {
      const idx = prev.findLastIndex(f => f.id === flowerId)
      if (idx === -1) return prev
      return [...prev.slice(0, idx), ...prev.slice(idx + 1)]
    })
  }

  const removeAllOfFlower = (flowerId) => {
    setBouquet(prev => prev.filter(f => f.id !== flowerId))
  }

  const clearAll = () => {
    setBouquet([])
  }

  return (
    <div className="app">
      <nav className="navbar">
        <span className="nav-logo">🌸 Bloom & Bouquet</span>
        <div className="nav-links">
          <a href="#catalog">Flowers</a>
          <a href="#builder">Bouquet</a>
          <a href="#message">Message</a>
        </div>
        {bouquet.length > 0 && (
          <span className="nav-count">{bouquet.length} 🌼</span>
        )}
      </nav>

      <Hero onStart={handleStart} />

      <main className="main-content">
        <FlowerCatalog
          bouquet={bouquet}
          onAddFlower={addFlower}
          onRemoveAllOfFlower={removeAllOfFlower}
        />

        <BouquetBuilder
          bouquet={bouquet}
          bushIndex={bushIndex}
          onBushChange={setBushIndex}
          onClearAll={clearAll}
        />

        <MessageCard
          message={message}
          onMessageChange={setMessage}
          recipientName={recipientName}
          onRecipientChange={setRecipientName}
        />

      </main>

      <footer className="footer">
        <p>Made with 💕 and a little bit of magic</p>
        <p className="footer-small">Bloom & Bouquet — spread the love, one petal at a time</p>
      </footer>
    </div>
  )
}
