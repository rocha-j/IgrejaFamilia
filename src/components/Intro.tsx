import { useEffect, useState } from 'react'
import styles from './Intro.module.css'

interface IntroProps {
  onDone: () => void
}

export default function Intro({ onDone }: IntroProps) {
  const [logoEnter, setLogoEnter] = useState(false)
  const [textShow, setTextShow] = useState(false)
  const [lineExpand, setLineExpand] = useState(false)
  const [curtainExpand, setCurtainExpand] = useState(false)
  const [curtainCollapse, setCurtainCollapse] = useState(false)
  const [hiding, setHiding] = useState(false)

  useEffect(() => {
    const timers = [
      setTimeout(() => setLogoEnter(true), 300),
      setTimeout(() => setTextShow(true), 1200),
      setTimeout(() => setLineExpand(true), 1600),
      setTimeout(() => setCurtainExpand(true), 2200),
      setTimeout(() => setCurtainCollapse(true), 2900),
      setTimeout(() => setHiding(true), 3600),
      setTimeout(() => onDone(), 4000),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div className={`${styles.introOverlay} ${hiding ? styles.hiding : ''}`}>
      <div className={`${styles.curtainLeft} ${curtainExpand ? styles.expand : ''} ${curtainCollapse ? styles.collapse : ''}`} />
      <div className={`${styles.curtainRight} ${curtainExpand ? styles.expand : ''} ${curtainCollapse ? styles.collapse : ''}`} />

      <div className={styles.logoWrap}>
        <div className={`${styles.logoCircle} ${logoEnter ? styles.enter : ''}`}>
          <img src="assets/imglogo.jpeg" alt="Logo" />
        </div>
        <div className={`${styles.logoText} ${textShow ? styles.show : ''}`}>
          IGREJA<span>FAMÍLIA</span>
        </div>
        <div className={`${styles.dividerLine} ${lineExpand ? styles.expand : ''}`} />
      </div>
    </div>
  )
}