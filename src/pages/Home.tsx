import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const slides = [
  { bg: '#1a1a2e', imgUrl: `${import.meta.env.BASE_URL}assets/im1.jpg`,   label: 'Slide 1' },
  { bg: '#16213e', imgUrl: `${import.meta.env.BASE_URL}assets/im2.jpg`,   label: 'Slide 2' },
  { bg: '#0f3460', imgUrl: `${import.meta.env.BASE_URL}assets/im3.webp`,  label: 'Slide 3' },
  { bg: '#533483', imgUrl: `${import.meta.env.BASE_URL}assets/im4.jpg`,   label: 'Slide 4' },
]

const cards = [
  { title: 'CULTOS',   desc: 'Confira nossa agenda e participe dos nossos encontros semanais.',  imgUrl: `${import.meta.env.BASE_URL}assets/cd2.jpg`,   route: '/cults' },
  { title: 'SOBRE NÓS', desc: 'Conheça nossa história, missão e comunidade.',                    imgUrl: `${import.meta.env.BASE_URL}assets/cd3.jpg`,   route: '/about' },
  { title: 'CONTATO',  desc: 'Fale conosco, tire dúvidas ou faça um pedido de oração.',        imgUrl: `${import.meta.env.BASE_URL}assets/cd1.webp`,  route: '/contact' },
]

function ChevronLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const touchStartX = useRef(0)

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % slides.length)
    }, 5000)
  }

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  useEffect(() => {
    startAutoPlay()
    return () => stopAutoPlay()
  }, [])

  const goTo = (index: number) => {
    setCurrentIndex(index)
    stopAutoPlay()
    startAutoPlay()
  }

  const moveNext = () => goTo((currentIndex + 1) % slides.length)
  const movePrev = () => goTo((currentIndex - 1 + slides.length) % slides.length)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) { if (diff > 0) moveNext(); else movePrev() }
  }

  return (
    <div className={styles.homePage}>

      {/* ── Hero carousel ── */}
      <div
        className={styles.carouselWrapper}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className={styles.carouselViewport}>
          <div
            className={styles.carouselTrack}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map(slide => (
              <div
                key={slide.label}
                className={styles.slide}
                style={{ backgroundColor: slide.bg, backgroundImage: `url(${slide.imgUrl})` }}
              />
            ))}
          </div>
        </div>

        {/* Overlay com texto hero */}
        <div className={styles.heroOverlay}>
          <span className={styles.heroTag}>● BEM-VINDO</span>
          <h1 className={styles.heroTitle}>
            Uma família que<br />
            <span className={styles.heroAccent}>transforma vidas</span>
          </h1>
          <Link to="/about" className={styles.heroCta}>Conheça nossa missão</Link>
        </div>

        <button className={`${styles.navBtn} ${styles.prev}`} onClick={movePrev} aria-label="Slide anterior">
          <ChevronLeft />
        </button>
        <button className={`${styles.navBtn} ${styles.next}`} onClick={moveNext} aria-label="Próximo slide">
          <ChevronRight />
        </button>

        <div className={styles.dots}>
          {slides.map((slide, i) => (
            <button
              key={slide.label}
              className={`${styles.dot} ${i === currentIndex ? styles.dotActive : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ── Seção Descubra ── */}
      <section className={styles.discoverSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>● EXPLORE</span>
          <h2 className={styles.sectionTitle}>
            Descubra a <span className={styles.accent}>Igreja Família</span>
          </h2>
        </div>

        <div className={styles.homeCards}>
          {cards.map(card => (
            <Link key={card.route} to={card.route} className={styles.homeCard}>
              <div className={styles.cardBg} style={{ backgroundImage: `url(${card.imgUrl})` }} />
              <div className={styles.cardOverlay} />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDesc}>{card.desc}</p>
                <span className={styles.cardBtn}>Saiba mais →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  )
}
