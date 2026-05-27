import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const slides = [
  { bg: '#1a1a2e', imgUrl: `${import.meta.env.BASE_URL}assets/im1.jpg`, label: 'Slide 1' },
  { bg: '#16213e', imgUrl: `${import.meta.env.BASE_URL}assets/im2.jpg`, label: 'Slide 2' },
  { bg: '#0f3460', imgUrl: `${import.meta.env.BASE_URL}assets/im3.webp`, label: 'Slide 3' },
  { bg: '#533483', imgUrl: `${import.meta.env.BASE_URL}assets/im4.jpg`, label: 'Slide 4' },
]

const cards = [
  { title: 'CULTOS', desc: 'Confira nossa agenda e participe!', cta: 'Saiba mais', imgUrl: `${import.meta.env.BASE_URL}assets/cd2.jpg`, bg: '#1a1a2e', route: '/cults' },
  { title: 'NÓS', desc: 'Conheça nossa história e comunidade.', cta: 'Saiba mais', imgUrl: `${import.meta.env.BASE_URL}assets/cd3.jpg`, bg: '#16213e', route: '/about' },
  { title: 'CONTATO', desc: 'Deseja falar conosco ou fazer um pedido?', cta: 'Saiba mais', imgUrl: `${import.meta.env.BASE_URL}assets/cd1.webp`, bg: '#0f3460', route: '/contact' },
]

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

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

  return (
    <div className={styles.homePage}>
      <div className={styles.carouselWrapper}>
        <button className={`${styles.navBtn} ${styles.prev}`} onClick={movePrev}>&#10094;</button>

        <div className={styles.carouselViewport}>
          <div
            className={styles.carouselTrack}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map(slide => (
              <div
                key={slide.label}
                className={styles.slide}
                style={{
                  backgroundColor: slide.bg,
                  backgroundImage: `url(${slide.imgUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            ))}
          </div>
        </div>

        <button className={`${styles.navBtn} ${styles.next}`} onClick={moveNext}>&#10095;</button>

        <div className={styles.dots}>
          {slides.map((slide, i) => (
            <span
              key={slide.label}
              className={`${styles.dot} ${i === currentIndex ? styles.active : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>

      <div className={styles.homeCards}>
        {cards.map(card => (
          <Link
            key={card.route}
            to={card.route}
            className={styles.homeCard}
            style={{
              backgroundColor: card.bg,
              backgroundImage: `url(${card.imgUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className={styles.cardOverlay} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.desc}</p>
              <span className={styles.cardBtn}>{card.cta}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}