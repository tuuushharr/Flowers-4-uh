import React, { useState } from 'react'
import BouquetDisplay from './BouquetDisplay'

export default function FinalPreview({ bouquet, wrapColor, message, recipientName }) {
  const [showConfetti, setShowConfetti] = useState(false)

  const handleOrder = () => {
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 3000)
  }

  if (bouquet.length === 0) return null

  return (
    <section className="preview" id="preview">
      <div className="section-header">
        <span className="section-number">04</span>
        <h2>Your Creation</h2>
        <p className="section-desc">Here's a preview of your beautiful bouquet, ready to brighten someone's day.</p>
      </div>

      <div className="preview-card">
        {showConfetti && (
          <div className="confetti-container">
            {[...Array(40)].map((_, i) => (
              <span key={i} className="confetti-piece" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
                background: ['#e74c6f', '#f4b942', '#b57edc', '#ffb7c5', '#4caf50', '#ff6b8a'][Math.floor(Math.random() * 6)],
                width: `${6 + Math.random() * 6}px`,
                height: `${6 + Math.random() * 6}px`,
                borderRadius: Math.random() > 0.5 ? '50%' : '2px',
              }} />
            ))}
          </div>
        )}

        <div className="preview-bouquet-wrapper">
          <BouquetDisplay bouquet={bouquet} />
        </div>

        {(recipientName || message) && (
          <div className="preview-note" style={{ borderColor: wrapColor.color }}>
            {recipientName && <p className="preview-to">To: {recipientName}</p>}
            {message && <p className="preview-message">"{message}"</p>}
            <p className="preview-from">— with love 💕</p>
          </div>
        )}

        <button className="btn-order" onClick={handleOrder}>
          {showConfetti ? '🎉 Sent with Love!' : '💝 Send This Bouquet'}
        </button>
      </div>
    </section>
  )
}
