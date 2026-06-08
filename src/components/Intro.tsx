import { useEffect, useState } from 'react'
import styles from './Intro.module.css'

interface IntroProps {
  onDone: () => void
}

export default function Intro({ onDone }: IntroProps) {
  const [logoEnter,  setLogoEnter]  = useState(false)
  const [ringPulse,  setRingPulse]  = useState(false)
  const [textShow,   setTextShow]   = useState(false)
  const [lineExpand, setLineExpand] = useState(false)
  const [tagShow,    setTagShow]    = useState(false)
  const [curtainIn,  setCurtainIn]  = useState(false)
  const [curtainOut, setCurtainOut] = useState(false)
  const [hiding,     setHiding]     = useState(false)

  useEffect(() => {
    const t = [
      setTimeout(() => setLogoEnter(true),  150),
      setTimeout(() => setRingPulse(true),  200),
      setTimeout(() => setTextShow(true),   750),
      setTimeout(() => setLineExpand(true), 1100),
      setTimeout(() => setTagShow(true),    1450),
      setTimeout(() => setCurtainIn(true),  2150),
      setTimeout(() => setCurtainOut(true), 2900),
      setTimeout(() => setHiding(true),     3450),
      setTimeout(() => onDone(),            3850),
    ]
    return () => t.forEach(clearTimeout)
  }, [onDone])

  return (
    <div className={`${styles.overlay} ${hiding ? styles.hiding : ''}`}>

      <div className={`${styles.curtainLeft}  ${curtainIn ? styles.curtainIn : ''} ${curtainOut ? styles.curtainOut : ''}`} />
      <div className={`${styles.curtainRight} ${curtainIn ? styles.curtainIn : ''} ${curtainOut ? styles.curtainOut : ''}`} />

      <div className={styles.center}>

        {/* Logo com anéis de pulso */}
        <div className={styles.logoWrap}>
          <div className={`${styles.ring} ${ringPulse ? styles.ringPulse : ''}`} />
          <div className={`${styles.ring} ${styles.ringDelay} ${ringPulse ? styles.ringPulse : ''}`} />
          <div className={`${styles.logoCircle} ${logoEnter ? styles.logoEnter : ''}`}>
            <img
              src={`${import.meta.env.BASE_URL}assets/imglogo.jpeg`}
              alt="Logo Igreja Família"
            />
          </div>
        </div>

        {/* Nome */}
        <div className={`${styles.nameWrap} ${textShow ? styles.nameShow : ''}`}>
          <span className={styles.nameChurch}>IGREJA</span>
          <span className={styles.nameFamilia}>FAMÍLIA</span>
        </div>

        {/* Linha divisória */}
        <div className={`${styles.line} ${lineExpand ? styles.lineExpand : ''}`} />

        {/* Tagline */}
        <p className={`${styles.tagline} ${tagShow ? styles.taglineShow : ''}`}>
          São Bernardo do Campo
        </p>

      </div>
    </div>
  )
}
