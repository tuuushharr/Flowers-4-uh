const CDN = 'https://pub-4ac1b7f0da8c43e8983d7821a18a8c0d.r2.dev/color/flowers'

export const flowers = [
  { id: 1,  name: 'Rose',           image: `${CDN}/rose.webp`,        meaning: 'Love & Romance',       category: 'classic',  size: 120 },
  { id: 2,  name: 'Tulip',          image: `${CDN}/tulip.webp`,       meaning: 'Perfect Love',         category: 'spring',   size: 120 },
  { id: 3,  name: 'Sunflower',      image: `${CDN}/sunflower.webp`,   meaning: 'Adoration & Loyalty',  category: 'bright',   size: 160 },
  { id: 4,  name: 'Daisy',          image: `${CDN}/daisy.webp`,       meaning: 'Innocence & Purity',   category: 'classic',  size: 80 },
  { id: 5,  name: 'Peony',          image: `${CDN}/peony.webp`,       meaning: 'Prosperity & Romance', category: 'classic',  size: 120 },
  { id: 6,  name: 'Orchid',         image: `${CDN}/orchid.webp`,      meaning: 'Luxury & Strength',    category: 'exotic',   size: 120 },
  { id: 7,  name: 'Lily',           image: `${CDN}/lily.webp`,        meaning: 'Devotion & Purity',    category: 'classic',  size: 160 },
  { id: 8,  name: 'Carnation',      image: `${CDN}/carnation.webp`,   meaning: 'Fascination & Love',   category: 'classic',  size: 160 },
  { id: 9,  name: 'Anemone',        image: `${CDN}/anemone.webp`,     meaning: 'Anticipation',         category: 'garden',   size: 120 },
  { id: 10, name: 'Dahlia',         image: `${CDN}/dahlia.webp`,      meaning: 'Elegance & Dignity',   category: 'garden',   size: 80 },
  { id: 11, name: 'Ranunculus',     image: `${CDN}/ranunculus.webp`,  meaning: 'Radiant Charm',        category: 'spring',   size: 120 },
  { id: 12, name: 'Zinnia',         image: `${CDN}/zinnia.webp`,      meaning: 'Thinking of You',      category: 'bright',   size: 120 },
]

export const categories = [
  { id: 'all', label: 'All Flowers' },
  { id: 'classic', label: 'Classic' },
  { id: 'spring', label: 'Spring' },
  { id: 'bright', label: 'Bright' },
  { id: 'garden', label: 'Garden' },
  { id: 'exotic', label: 'Exotic' },
]
