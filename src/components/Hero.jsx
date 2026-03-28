import React from 'react'

export default function Hero({ onStart }) {
  return (
    <section className="hero">
      <div className="hero-petals">
        {[...Array(12)].map((_, i) => (
          <span key={i} className="floating-petal" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${4 + Math.random() * 4}s`,
            fontSize: `${14 + Math.random() * 18}px`,
            opacity: 0.4 + Math.random() * 0.4,
          }}>
            {['🌸', '🌷', '🌹', '🌼', '💐', '✿'][Math.floor(Math.random() * 6)]}
          </span>
        ))}
      </div>
      <div className="hero-content">
        <p className="hero-tag">handcrafted with love</p>
        <h1 className="hero-title">
          Bloom <span className="amp">&</span> Bouquet
        </h1>
        <p className="hero-subtitle">
          Pick your favourite flowers, arrange them into a dreamy bouquet,
          and add a sweet little message for someone special.
        </p>
        <button className="btn-primary" onClick={onStart}>
          Start Creating <span className="btn-flower">🌸</span>
        </button>
      </div>
    </section>
  )
}
