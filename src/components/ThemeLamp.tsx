import { useEffect, useRef, useState, useCallback } from 'react'
import { useTheme } from '../context/ThemeContext'
import styles from './ThemeLamp.module.css'

const PULL_THRESHOLD = 80
const MAX_PULL = 130

function GlobeLamp({ isOn }: { isOn: boolean }) {
  const metal   = isOn ? '#2a2a2a' : '#8B6914'
  const stem    = isOn ? '#333'    : '#9A6E3E'
  const globe   = isOn ? 'rgba(255,238,130,0.88)' : 'rgba(210,195,170,0.22)'
  const mid     = isOn ? 'rgba(255,252,190,0.72)'  : 'none'
  const core    = isOn ? 'rgba(255,255,240,0.92)'  : 'none'
  const rim     = isOn ? 'rgba(255,215,60,0.25)'   : 'rgba(160,140,110,0.35)'
  const reflex  = isOn ? 'rgba(255,255,255,0.55)'  : 'rgba(255,255,255,0.18)'

  return (
    <svg width="48" height="56" viewBox="0 0 48 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Cap */}
      <rect x="18" y="0" width="12" height="5" rx="2.5" fill={metal} />
      {/* Stem */}
      <line x1="24" y1="5" x2="24" y2="13" stroke={stem} strokeWidth="2.5" strokeLinecap="round" />
      {/* Globe outer */}
      <circle cx="24" cy="32" r="19" fill={globe} />
      {/* Mid glow */}
      {isOn && <circle cx="24" cy="32" r="13" fill={mid} />}
      {/* Core */}
      {isOn && <circle cx="24" cy="32" r="6"  fill={core} />}
      {/* Glass rim */}
      <circle cx="24" cy="32" r="19" fill="none" stroke={rim} strokeWidth="1.5" />
      {/* Highlight reflection (top-left) */}
      <ellipse cx="16" cy="23" rx="4" ry="3" fill={reflex} />
      {/* Bottom stem */}
      <line x1="24" y1="51" x2="24" y2="55" stroke={stem} strokeWidth="2.5" strokeLinecap="round" />
      <rect x="19" y="54" width="10" height="4" rx="2" fill={metal} />
    </svg>
  )
}

export default function ThemeLamp() {
  const { theme, toggleTheme } = useTheme()
  const isOn = theme === 'dark'

  const [pulling,  setPulling]  = useState(false)
  const [pullDist, setPullDist] = useState(0)
  const [hovering, setHovering] = useState(false)
  const [toggling, setToggling] = useState(false)

  const startY = useRef(0)

  const doToggle = useCallback(() => {
    toggleTheme()
    setToggling(true)
    setTimeout(() => setToggling(false), 500)
  }, [toggleTheme])

  useEffect(() => {
    if (!pulling) return

    const onMove = (e: MouseEvent) => {
      const d = Math.max(0, e.clientY - startY.current)
      setPullDist(Math.min(d, MAX_PULL))
    }
    const onUp = (e: MouseEvent) => {
      const d = e.clientY - startY.current
      setPulling(false)
      setPullDist(0)
      if (d >= PULL_THRESHOLD) doToggle()
    }
    const onTouchMove = (e: TouchEvent) => {
      const d = Math.max(0, e.touches[0].clientY - startY.current)
      setPullDist(Math.min(d, MAX_PULL))
    }
    const onTouchEnd = (e: TouchEvent) => {
      const d = e.changedTouches[0].clientY - startY.current
      setPulling(false)
      setPullDist(0)
      if (d >= PULL_THRESHOLD) doToggle()
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    window.addEventListener('touchend', onTouchEnd)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [pulling, doToggle])

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setPulling(true)
    setHovering(false)
    startY.current = e.clientY
  }

  const onTouchStart = (e: React.TouchEvent) => {
    setPulling(true)
    setHovering(false)
    startY.current = e.touches[0].clientY
  }

  const nearThreshold = pullDist >= PULL_THRESHOLD * 0.65
  const cordH = 34 + pullDist

  return (
    <div className={styles.container}>
      <div className={styles.wire} />

      <div className={`${styles.lampWrap} ${toggling ? styles.toggling : ''}`}>
        <GlobeLamp isOn={isOn} />
        {isOn && <div className={styles.glow} />}
      </div>

      <div
        className={`${styles.cordArea} ${hovering && !pulling ? styles.swaying : ''}`}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => { if (!pulling) setHovering(false) }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        style={{ cursor: pulling ? 'grabbing' : 'grab' }}
      >
        <div
          className={styles.cord}
          style={{
            height: `${cordH}px`,
            transition: pulling ? 'none' : 'height 0.5s cubic-bezier(0.34,1.56,0.64,1)',
          }}
        />
        <div className={`${styles.knot} ${nearThreshold ? styles.knotReady : ''}`} />
      </div>
    </div>
  )
}
