import React from 'react'

const S = 1.8 // outline stroke width
const O = '#2a1a1a' // outline color

/* ─── ROSE ─── */
function Rose({ color = '#e74c6f', size = 100 }) {
  const dk = d(color, 15)
  const lt = l(color, 18)
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      {/* Outer petals */}
      <path d="M50 82 C30 78, 10 62, 14 42 C16 32, 26 28, 36 34 C28 24, 30 12, 42 10 C52 8, 56 18, 52 28 C60 16, 74 14, 78 26 C82 36, 72 42, 62 38 C76 46, 84 60, 74 76 C68 84, 56 84, 50 82Z"
        fill={color} stroke={O} strokeWidth={S} />
      {/* Mid petals */}
      <path d="M50 72 C38 68, 24 56, 28 42 C30 36, 38 34, 42 40 C38 32, 42 22, 50 22 C58 22, 62 32, 58 40 C62 34, 70 36, 72 42 C76 56, 62 68, 50 72Z"
        fill={lt} stroke={O} strokeWidth={S * 0.8} />
      {/* Inner petals */}
      <path d="M50 62 C42 58, 36 50, 40 44 C42 40, 48 40, 50 44 C52 40, 58 40, 60 44 C64 50, 58 58, 50 62Z"
        fill={dk} stroke={O} strokeWidth={S * 0.7} />
      {/* Center spiral */}
      <path d="M50 54 C46 52, 44 48, 46 46 C48 44, 52 44, 54 46 C56 48, 54 52, 50 54Z"
        fill={d(color, 28)} stroke={O} strokeWidth={S * 0.5} />
    </svg>
  )
}

/* ─── TULIP ─── */
function Tulip({ color = '#ff6b8a', size = 100 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg">
      {/* Left petal */}
      <path d="M40 85 C32 72, 10 48, 14 22 C16 10, 26 2, 36 12 C40 16, 40 28, 40 40Z"
        fill={color} stroke={O} strokeWidth={S} />
      {/* Right petal */}
      <path d="M40 85 C48 72, 70 48, 66 22 C64 10, 54 2, 44 12 C40 16, 40 28, 40 40Z"
        fill={l(color, 12)} stroke={O} strokeWidth={S} />
      {/* Center petal */}
      <path d="M40 80 C36 64, 26 38, 30 18 C34 8, 40 6, 40 16 C40 6, 46 8, 50 18 C54 38, 44 64, 40 80Z"
        fill={d(color, 8)} stroke={O} strokeWidth={S * 0.7} opacity="0.7" />
    </svg>
  )
}

/* ─── SUNFLOWER ─── */
function Sunflower({ color = '#f4b942', size = 100 }) {
  const petals = 16
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      {/* Petals */}
      {Array.from({ length: petals }).map((_, i) => {
        const a = (360 / petals) * i
        return <ellipse key={i} cx="50" cy="24" rx="6.5" ry="16"
          fill={i % 2 === 0 ? color : l(color, 12)}
          stroke={O} strokeWidth={S * 0.8}
          transform={`rotate(${a} 50 50)`} />
      })}
      {/* Center disk */}
      <circle cx="50" cy="50" r="16" fill="#5D4037" stroke={O} strokeWidth={S} />
      <circle cx="50" cy="50" r="12" fill="#4E342E" stroke={O} strokeWidth={S * 0.5} />
      {/* Fibonacci seeds */}
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = i * 137.508 * (Math.PI / 180)
        const r = 2.2 * Math.sqrt(i)
        return <circle key={i} cx={50 + Math.cos(angle) * r} cy={50 + Math.sin(angle) * r}
          r="1.5" fill="#795548" stroke="#3E2723" strokeWidth="0.4" />
      })}
    </svg>
  )
}

/* ─── DAISY ─── */
function Daisy({ color = '#fff9c4', size = 100 }) {
  const petals = 14
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      {Array.from({ length: petals }).map((_, i) => {
        const a = (360 / petals) * i
        return <ellipse key={i} cx="50" cy="26" rx="5.5" ry="14"
          fill="white" stroke={O} strokeWidth={S * 0.7}
          transform={`rotate(${a} 50 50)`} />
      })}
      <circle cx="50" cy="50" r="10" fill="#FFD54F" stroke={O} strokeWidth={S * 0.8} />
      <circle cx="50" cy="50" r="6.5" fill="#FFCA28" stroke={O} strokeWidth={S * 0.4} />
    </svg>
  )
}

/* ─── CHERRY BLOSSOM ─── */
function CherryBlossom({ color = '#ffb7c5', size = 100 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      {[0, 72, 144, 216, 288].map((a, i) => (
        <g key={i} transform={`rotate(${a} 50 50)`}>
          <path d="M50 50 C44 34, 34 14, 42 6 C47 1, 53 1, 58 6 C66 14, 56 34, 50 50Z"
            fill={color} stroke={O} strokeWidth={S} />
        </g>
      ))}
      <circle cx="50" cy="50" r="7" fill="white" stroke={O} strokeWidth={S * 0.6} />
      {[0, 72, 144, 216, 288].map((a, i) => {
        const rad = (a * Math.PI) / 180
        return <circle key={i} cx={50 + Math.cos(rad) * 4.5} cy={50 + Math.sin(rad) * 4.5}
          r="1.5" fill="#e8456b" stroke={O} strokeWidth="0.5" />
      })}
    </svg>
  )
}

/* ─── HIBISCUS ─── */
function Hibiscus({ color = '#e8456b', size = 100 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      {[0, 72, 144, 216, 288].map((a, i) => (
        <g key={i} transform={`rotate(${a} 50 50)`}>
          <path d="M50 50 C40 32, 28 8, 38 0 C45 -4, 55 -4, 62 0 C72 8, 60 32, 50 50Z"
            fill={i % 2 === 0 ? color : l(color, 8)} stroke={O} strokeWidth={S} />
          <path d="M50 44 L50 12" stroke={d(color, 20)} strokeWidth="0.8" opacity="0.3" />
        </g>
      ))}
      <circle cx="50" cy="50" r="6" fill={d(color, 25)} stroke={O} strokeWidth={S * 0.6} />
      <line x1="50" y1="48" x2="50" y2="28" stroke="#FDD835" strokeWidth="3" strokeLinecap="round" />
      <circle cx="50" cy="27" r="3" fill="#FDD835" stroke={O} strokeWidth="0.8" />
    </svg>
  )
}

/* ─── LAVENDER ─── */
function LavenderSprig({ color = '#b57edc', size = 100 }) {
  return (
    <svg width={size * 0.5} height={size} viewBox="0 0 40 80" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 78 Q19 48, 20 10" stroke="#3d6b3d" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      {Array.from({ length: 9 }).map((_, i) => {
        const y = 12 + i * 6
        const s = i % 2 === 0 ? -1 : 1
        const sz = 4.5 - i * 0.15
        return (
          <g key={i}>
            <ellipse cx={20 + s * 5.5} cy={y} rx={sz} ry={sz * 0.7}
              fill={i < 3 ? l(color, 18) : color} stroke={O} strokeWidth="0.8" />
            <ellipse cx={20 - s * 3} cy={y + 2.8} rx={sz * 0.7} ry={sz * 0.55}
              fill={color} stroke={O} strokeWidth="0.6" opacity="0.8" />
          </g>
        )
      })}
      <ellipse cx="20" cy="10" rx="3.5" ry="3" fill={l(color, 15)} stroke={O} strokeWidth="0.7" />
    </svg>
  )
}

/* ─── PEONY ─── */
function Peony({ color = '#f8a4c8', size = 100 }) {
  const dk = d(color, 12)
  const lt = l(color, 15)
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      {/* Outer ruffled petals */}
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (360 / 8) * i
        return <path key={`o${i}`}
          d={`M50 50 C${44 - (i%2)*2} ${50 - 20}, ${40 - (i%3)} ${50 - 32}, 50 ${50 - 28} C${60 + (i%3)} ${50 - 32}, ${56 + (i%2)*2} ${50 - 20}, 50 50`}
          fill={i % 2 === 0 ? lt : color} stroke={O} strokeWidth={S * 0.7}
          transform={`rotate(${a} 50 50)`} />
      })}
      {/* Inner petals */}
      {Array.from({ length: 6 }).map((_, i) => {
        const a = (360 / 6) * i + 15
        return <ellipse key={`i${i}`} cx="50" cy="38" rx="7" ry="10"
          fill={dk} stroke={O} strokeWidth={S * 0.6}
          transform={`rotate(${a} 50 50)`} />
      })}
      <circle cx="50" cy="50" r="5" fill={d(color, 25)} stroke={O} strokeWidth={S * 0.5} />
    </svg>
  )
}

/* ─── LILY ─── */
function Lily({ color = '#f0ead6', size = 100 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      {[0, 60, 120, 180, 240, 300].map((a, i) => (
        <g key={i} transform={`rotate(${a} 50 50)`}>
          <path d="M50 50 C44 34, 38 14, 44 2 C47 -2, 53 -2, 56 2 C62 14, 56 34, 50 50Z"
            fill={color} stroke={O} strokeWidth={S} />
          <path d="M50 44 L50 10" stroke={d(color, 18)} strokeWidth="0.7" opacity="0.35" />
          <circle cx="49" cy="24" r="1.2" fill={d(color, 35)} opacity="0.4" />
          <circle cx="51" cy="30" r="1" fill={d(color, 35)} opacity="0.35" />
        </g>
      ))}
      <circle cx="50" cy="50" r="5.5" fill="#e8d5a0" stroke={O} strokeWidth={S * 0.5} />
      {[0, 120, 240].map((a, i) => {
        const rad = (a * Math.PI) / 180
        return <g key={i}>
          <line x1="50" y1="50" x2={50 + Math.cos(rad) * 8} y2={50 + Math.sin(rad) * 8 - 4}
            stroke="#8d6e2e" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx={50 + Math.cos(rad) * 9} cy={50 + Math.sin(rad) * 9 - 5}
            r="2" fill="#A67C3D" stroke={O} strokeWidth="0.5" />
        </g>
      })}
    </svg>
  )
}

/* ─── ORCHID ─── */
function Orchid({ color = '#da70d6', size = 100 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      {/* Top sepals */}
      <ellipse cx="28" cy="24" rx="14" ry="9" fill={color} stroke={O} strokeWidth={S} transform="rotate(-25 28 24)" />
      <ellipse cx="72" cy="24" rx="14" ry="9" fill={color} stroke={O} strokeWidth={S} transform="rotate(25 72 24)" />
      <ellipse cx="50" cy="16" rx="8" ry="14" fill={l(color, 12)} stroke={O} strokeWidth={S} />
      {/* Lower petals */}
      <ellipse cx="26" cy="52" rx="12" ry="7" fill={l(color, 8)} stroke={O} strokeWidth={S} transform="rotate(-40 26 52)" />
      <ellipse cx="74" cy="52" rx="12" ry="7" fill={l(color, 8)} stroke={O} strokeWidth={S} transform="rotate(40 74 52)" />
      {/* Lip */}
      <path d="M50 42 C36 50, 30 66, 36 76 C42 82, 58 82, 64 76 C70 66, 64 50, 50 42Z"
        fill={d(color, 10)} stroke={O} strokeWidth={S} />
      {/* Inner lip */}
      <path d="M50 48 C42 52, 38 62, 42 68 C46 72, 54 72, 58 68 C62 62, 58 52, 50 48Z"
        fill={d(color, 22)} stroke={O} strokeWidth={S * 0.5} />
      <circle cx="50" cy="42" r="3.5" fill="#f4e242" stroke={O} strokeWidth="0.8" />
    </svg>
  )
}

/* ─── CARNATION ─── */
function Carnation({ color = '#ff91a4', size = 100 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      {/* Outer ruffled ball */}
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (360 / 12) * i
        const r = 14 + (i % 3) * 3
        return <path key={i}
          d={`M50 50 C${46-(i%2)*2} ${50-r}, ${42} ${50-r-6}, 50 ${50-r-3} C58 ${50-r-6}, ${54+(i%2)*2} ${50-r}, 50 50`}
          fill={i % 3 === 0 ? l(color, 14) : (i % 2 === 0 ? color : d(color, 6))}
          stroke={O} strokeWidth={S * 0.65}
          transform={`rotate(${a} 50 50)`} />
      })}
      {/* Inner ruffles */}
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (360 / 8) * i + 12
        return <ellipse key={`in${i}`} cx="50" cy="40" rx="5" ry="7.5"
          fill={d(color, 10)} stroke={O} strokeWidth={S * 0.45}
          transform={`rotate(${a} 50 50)`} />
      })}
    </svg>
  )
}

/* ─── JASMINE ─── */
function Jasmine({ color = '#fffdd0', size = 100 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      {[0, 72, 144, 216, 288].map((a, i) => (
        <g key={i} transform={`rotate(${a} 50 50)`}>
          <ellipse cx="50" cy="26" rx="9" ry="16" fill={color} stroke={O} strokeWidth={S * 0.8} />
        </g>
      ))}
      <circle cx="50" cy="50" r="7.5" fill="#f5e660" stroke={O} strokeWidth={S * 0.6} />
      <circle cx="50" cy="50" r="4.5" fill="#e8d030" stroke={O} strokeWidth={S * 0.4} />
    </svg>
  )
}

/* ═══ FOLIAGE — dramatic dark green leaves ═══ */

function DarkLeaf({ size = 120, variant = 0 }) {
  const fills = ['#2d5a2d', '#1e4d2b', '#234f23', '#2a5e35']
  const fill = fills[variant % fills.length]
  const strk = '#1a3a1a'
  const shapes = [
    // Long pointed sword leaf
    <svg key="a" width={size * 0.22} height={size} viewBox="0 0 22 120">
      <path d="M11 118 C10 80, 2 50, 1 20 C0 8, 6 0, 11 0 C16 0, 22 8, 21 20 C20 50, 12 80, 11 118Z"
        fill={fill} stroke={strk} strokeWidth="1.5" />
      <path d="M11 110 L11 6" stroke={strk} strokeWidth="0.8" opacity="0.3" />
    </svg>,
    // Wide tropical leaf
    <svg key="b" width={size * 0.32} height={size} viewBox="0 0 38 120">
      <path d="M19 118 C18 80, 2 50, 1 22 C0 10, 10 0, 19 0 C28 0, 38 10, 37 22 C36 50, 20 80, 19 118Z"
        fill={fill} stroke={strk} strokeWidth="1.5" />
      <path d="M19 110 L19 6" stroke={strk} strokeWidth="0.8" opacity="0.3" />
      {[20, 35, 50, 65, 78].map((y, i) => {
        const s = i % 2 === 0 ? -1 : 1
        return <path key={i} d={`M19 ${y} L${19 + s * 14} ${y - 5}`}
          stroke={strk} strokeWidth="0.6" opacity="0.2" />
      })}
    </svg>,
    // Curved blade
    <svg key="c" width={size * 0.25} height={size} viewBox="0 0 28 120">
      <path d="M14 118 C12 85, -2 55, 2 20 C4 8, 10 0, 14 2 C20 0, 26 10, 26 22 C28 55, 16 85, 14 118Z"
        fill={fill} stroke={strk} strokeWidth="1.5" />
      <path d="M14 112 Q8 60, 12 8" stroke={strk} strokeWidth="0.7" opacity="0.25" />
    </svg>,
    // Thin grass-like blade
    <svg key="d" width={size * 0.12} height={size} viewBox="0 0 12 120">
      <path d="M6 118 C5 70, 1 30, 2 8 C3 2, 6 0, 9 2 C11 8, 7 30, 6 118Z"
        fill={fill} stroke={strk} strokeWidth="1.2" />
    </svg>,
  ]
  return shapes[variant % shapes.length]
}

function SmallSprig({ size = 60, variant = 0 }) {
  const shapes = [
    // Berry sprig
    <svg key="a" width={size * 0.5} height={size} viewBox="0 0 30 60">
      <path d="M15 58 Q14 35, 10 12" stroke="#5a3a3a" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M10 22 Q18 18, 22 10" stroke="#5a3a3a" strokeWidth="1" fill="none" strokeLinecap="round" />
      {[[10, 12], [7, 18], [13, 16], [22, 10], [18, 6], [24, 14]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.8" fill={i % 2 === 0 ? '#c44569' : '#e77f8f'}
          stroke={O} strokeWidth="0.7" />
      ))}
    </svg>,
    // Small eucalyptus branch
    <svg key="b" width={size * 0.4} height={size} viewBox="0 0 24 60">
      <path d="M12 58 Q11 32, 12 6" stroke="#3d6b3d" strokeWidth="1" fill="none" strokeLinecap="round" />
      {[10, 20, 30, 40, 48].map((y, i) => {
        const s = i % 2 === 0 ? -1 : 1
        return <ellipse key={i} cx={12 + s * 6} cy={y} rx="4.5" ry="3"
          fill={i < 2 ? '#6aae6a' : '#4a8a4a'} stroke="#3a6a3a" strokeWidth="0.7"
          transform={`rotate(${s * 15} ${12 + s * 6} ${y})`} />
      })}
    </svg>,
    // Baby's breath cluster
    <svg key="c" width={size * 0.5} height={size} viewBox="0 0 30 60">
      <path d="M15 56 Q14 35, 12 18" stroke="#7da67d" strokeWidth="0.8" fill="none" />
      <path d="M12 28 Q6 22, 4 16" stroke="#7da67d" strokeWidth="0.6" fill="none" />
      <path d="M13 22 Q20 16, 24 10" stroke="#7da67d" strokeWidth="0.6" fill="none" />
      {[[4, 15], [12, 17], [24, 9], [8, 10], [18, 12], [14, 6], [20, 16]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.2" fill="white" stroke="#ccc" strokeWidth="0.4" />
      ))}
    </svg>,
  ]
  return shapes[variant % shapes.length]
}

/* ═══ HELPERS ═══ */
function l(hex, pct) {
  const n = parseInt(hex.replace('#', ''), 16)
  const r = Math.min(255, (n >> 16) + Math.round(255 * pct / 100))
  const g = Math.min(255, ((n >> 8) & 0xFF) + Math.round(255 * pct / 100))
  const b = Math.min(255, (n & 0xFF) + Math.round(255 * pct / 100))
  return `rgb(${r},${g},${b})`
}
function d(hex, pct) {
  const n = parseInt(hex.replace('#', ''), 16)
  const r = Math.max(0, (n >> 16) - Math.round(255 * pct / 100))
  const g = Math.max(0, ((n >> 8) & 0xFF) - Math.round(255 * pct / 100))
  const b = Math.max(0, (n & 0xFF) - Math.round(255 * pct / 100))
  return `rgb(${r},${g},${b})`
}

const FLOWER_COMPONENTS = {
  1: Rose, 2: Tulip, 3: Sunflower, 4: Daisy,
  5: CherryBlossom, 6: Hibiscus, 7: LavenderSprig, 8: Peony,
  9: Lily, 10: Orchid, 11: Carnation, 12: Jasmine,
}

export default function FlowerSVG({ flowerId, color, size = 100 }) {
  const Component = FLOWER_COMPONENTS[flowerId]
  if (!Component) return null
  return <Component color={color} size={size} />
}

export { DarkLeaf, SmallSprig, FlowerSVG, FLOWER_COMPONENTS }
