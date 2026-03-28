import React, { useMemo } from 'react'

const BUSH_VARIANTS = [
  {
    back: 'https://pub-4ac1b7f0da8c43e8983d7821a18a8c0d.r2.dev/color/bush/bush-1.png',
    top: 'https://pub-4ac1b7f0da8c43e8983d7821a18a8c0d.r2.dev/color/bush/bush-1-top.png',
  },
  {
    back: 'https://pub-4ac1b7f0da8c43e8983d7821a18a8c0d.r2.dev/color/bush/bush-2.png',
    top: 'https://pub-4ac1b7f0da8c43e8983d7821a18a8c0d.r2.dev/color/bush/bush-2-top.png',
  },
  {
    back: 'https://pub-4ac1b7f0da8c43e8983d7821a18a8c0d.r2.dev/color/bush/bush-3.png',
    top: 'https://pub-4ac1b7f0da8c43e8983d7821a18a8c0d.r2.dev/color/bush/bush-3-top.png',
  },
]

export default function BouquetDisplay({ bouquet, bushIndex = 0 }) {
  const bush = BUSH_VARIANTS[bushIndex % BUSH_VARIANTS.length]

  const flowerItems = useMemo(() => {
    return bouquet.map((flower, i) => ({
      flower,
      order: Math.floor(sr(i * 7 + 3) * Math.max(bouquet.length, 1)),
      rot: ((sr(i * 13) - 0.5) * 10).toFixed(2),
    }))
  }, [bouquet])

  if (bouquet.length === 0) return null

  return (
    <div className="bq-outer">
      <div className="bq-arrangement">
        <div className="bq-relative-container">

          <img
            alt=""
            width="600" height="500"
            className="bq-bush-img"
            src={bush.back}
          />

          <div className="bq-flower-grid">
            {flowerItems.map(({ flower, order, rot }, i) => {
              const sz = flower.size || 120
              return (
                <div key={i} className="bq-flower-cell" style={{ order }}>
                  <div className="bq-flower-inner" style={{
                    width: sz, height: sz,
                    transform: `rotate(${rot}deg)`,
                  }}>
                    <img
                      src={flower.image}
                      alt={flower.name}
                      width={sz} height={sz}
                      className="bq-flower-img"
                      loading="lazy"
                    />
                  </div>
                </div>
              )
            })}
          </div>

          <img
            alt=""
            width="600" height="500"
            className="bq-bush-img bq-bush-top"
            src={bush.top}
          />

        </div>
      </div>
    </div>
  )
}

function sr(seed) {
  const x = Math.sin(seed + 1) * 10000
  return x - Math.floor(x)
}
