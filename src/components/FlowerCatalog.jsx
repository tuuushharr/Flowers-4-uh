import React from 'react'
import { flowers } from '../data/flowers'

const SIZES = [180, 220, 160, 240, 200, 170, 230, 190, 210, 150, 200, 180]
const OFFSETS_Y = [0, -14, 8, -6, 12, -10, 4, -8, 10, -4, 6, -12]
const ROTATIONS = [-2, 1.5, -1, 2.5, -1.5, 0.8, -2.2, 1.8, -0.5, 2, -1.8, 1]

export default function FlowerCatalog({ bouquet, onAddFlower, onRemoveAllOfFlower }) {
  const getCount = (id) => bouquet.filter(f => f.id === id).length
  const maxReached = bouquet.length >= 8

  return (
    <section className="catalog" id="catalog">
      <div className="section-header">
        <h2>Choose Your Flowers</h2>
        <p className="section-desc">
          {maxReached
            ? "You've picked all 8 blooms! Double-tap a flower to remove it."
            : `Pick up to 8 blooms — ${8 - bouquet.length} remaining`}
        </p>
      </div>

      <div className="flower-scatter">
        {flowers.map((flower, i) => {
          const count = getCount(flower.id)
          const disabled = maxReached && count === 0
          const sz = SIZES[i % SIZES.length]
          const offY = OFFSETS_Y[i % OFFSETS_Y.length]
          const rot = ROTATIONS[i % ROTATIONS.length]
          return (
            <div
              key={flower.id}
              className={`flower-card ${count > 0 ? 'flower-card-selected' : ''} ${disabled ? 'flower-card-disabled' : ''}`}
              style={{
                transform: `translateY(${offY}px) rotate(${rot}deg)`,
                cursor: disabled ? 'not-allowed' : 'pointer',
              }}
              onClick={() => {
                if (disabled) return
                onAddFlower(flower)
              }}
              onDoubleClick={(e) => {
                e.preventDefault()
                if (count > 0) onRemoveAllOfFlower(flower.id)
              }}
            >
              <div className="flower-card-top">
                <div className="flower-img-preview" style={{ width: sz, height: sz }}>
                  <img
                    src={flower.image}
                    alt={flower.name}
                    width={sz}
                    height={sz}
                    loading="lazy"
                    style={{ width: sz, height: sz }}
                  />
                </div>
                {count > 0 && (
                  <span className="flower-badge">{count}</span>
                )}
              </div>
              <h3 className="flower-name">{flower.name}</h3>
              <p className="flower-meaning">{flower.meaning}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
