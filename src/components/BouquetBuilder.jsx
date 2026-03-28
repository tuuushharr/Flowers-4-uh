import React from 'react'
import BouquetDisplay from './BouquetDisplay'

export default function BouquetBuilder({ bouquet, bushIndex, onBushChange, onClearAll }) {
  return (
    <section className="builder" id="builder">
      <div className="section-header">
        <h2>Your Bouquet</h2>
        <p className="section-desc">Here's what you've picked so far — watch your arrangement come to life.</p>
      </div>

      <div className="bouquet-preview-container">
        {bouquet.length > 0 && (
          <BouquetDisplay bouquet={bouquet} bushIndex={bushIndex} />
        )}
      </div>

      {bouquet.length > 0 && (
        <>
          <div className="bq-clear-row">
            <button className="btn-bush" onClick={() => onBushChange((bushIndex + 1) % 3)}>
              🌿 Change Bush
            </button>
          </div>
          <div className="bq-clear-row">
            <span className="bq-count">{bouquet.length} bloom{bouquet.length !== 1 ? 's' : ''}</span>
            <button className="btn-clear" onClick={onClearAll}>Clear all</button>
          </div>
        </>
      )}
    </section>
  )
}
