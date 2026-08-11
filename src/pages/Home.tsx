import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const SECTIONS = ['hero', 'sobre', 'cultos', 'recursos']

const cards = [
  {
    title: 'Conheça o\nDNA da Igreja',
    desc: 'Nossa missão, valores e a visão que nos move como comunidade de fé.',
    cta: 'Saiba mais',
    route: '/about',
  },
  {
    title: 'Agenda de\nCultos',
    desc: 'Confira os horários e prepare-se para participar dos nossos encontros.',
    cta: 'Ver agenda',
    route: '/cults',
  },
  {
    title: 'Contato &\nAtendimento',
    desc: 'Fale conosco, faça um pedido de oração ou tire suas dúvidas.',
    cta: 'Entre em contato',
    route: '/contact',
  },
  {
    title: 'Dízimos &\nOfertas',
    desc: 'Contribua com a missão da Igreja Família e seja parte desta visão.',
    cta: 'Contribuir',
    route: '/offer',
  },
]

export default function Home() {
  const [active, setActive] = useState(0)
  const refs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const i = refs.current.indexOf(e.target as HTMLElement)
            if (i >= 0) setActive(i)
          }
        })
      },
      { threshold: 0.45 }
    )
    refs.current.forEach(r => r && obs.observe(r))
    return () => obs.disconnect()
  }, [])

  const scrollTo = (i: number) =>
    refs.current[i]?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className={styles.page}>

      {/* ── Sidebar direita ── */}
      <aside className={styles.sidebar}>
        <p className={styles.sidebarLabel}>Acesso<br />Rápido</p>
        <div className={styles.dots}>
          {SECTIONS.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
              onClick={() => scrollTo(i)}
              aria-label={`Seção ${i + 1}`}
            />
          ))}
        </div>
        <div className={styles.sideIcons}>
          <a
            href="https://www.facebook.com/share/1G3kdtetBm/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/igrejafamilia.ofc"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="17" height="17">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>
      </aside>

      {/* ── 1. Hero ── */}
      <section
        ref={el => { refs.current[0] = el }}
        className={styles.hero}
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}assets/im1.jpg)` }}
      >
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>
            Uma família que<br />transforma vidas.
          </h1>
          <Link to="/about" className={styles.heroBtn}>
            Conheça a Igreja
          </Link>
        </div>
      </section>

      {/* ── 2. Sobre ── */}
      <section
        ref={el => { refs.current[1] = el }}
        className={styles.sobre}
      >
        <div className={styles.sobreInner}>
          <div className={styles.sobreText}>
            <span className={styles.sobreLine}>—</span>
            <h2 className={styles.sobreTitle}>
              Conheça a<br />Igreja Família
            </h2>
            <p className={styles.sobreDesc}>
              Somos uma comunidade movida pelo amor de Deus, comprometida em
              restaurar famílias e transformar vidas em São Bernardo do Campo.
            </p>
            <p className={styles.sobreVerse}>
              "Amor é a nossa razão.<br />Entrega é a nossa resposta."
            </p>
            <Link to="/about" className={styles.sobreBtn}>Saiba mais</Link>
          </div>
          <div
            className={styles.sobreImg}
            style={{ backgroundImage: `url(${import.meta.env.BASE_URL}assets/im2.jpg)` }}
          />
        </div>
      </section>

      {/* ── 3. Cultos ── */}
      <section
        ref={el => { refs.current[2] = el }}
        className={styles.cultos}
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}assets/cd2.jpg)` }}
      >
        <h2 className={styles.cultosTitle}>Participe dos nossos cultos</h2>
        <p className={styles.cultosSub}>
          Cada oportunidade de estar em comunhão é única e especial.
          <br />Confira a nossa agenda e programe-se para estar sempre conosco.
        </p>

        <div className={styles.schedule}>
          <div className={styles.scheduleRow}>
            <strong>Quinta 19h30</strong>
            <span>Culto de Oração e Intercessão</span>
          </div>
          <div className={styles.scheduleRow}>
            <strong>Sábado 19h30</strong>
            <span>Jovens e Adolescentes</span>
          </div>
          <div className={styles.scheduleRow}>
            <strong>Domingo 10h e 18h</strong>
            <span>Cultos de Celebração</span>
          </div>

          <p className={styles.onlineTitle}>Transmissões online</p>
          <p className={styles.onlineSub}>
            Os cultos são transmitidos ao vivo pelo YouTube.
          </p>

          <a
            href="https://www.youtube.com/@igrejafamiliasbc"
            target="_blank"
            rel="noreferrer"
            className={styles.cultosBtn}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" style={{ flexShrink: 0 }}>
              <path d="M22.54 6.42A2.78 2.78 0 0 0 20.6 4.47C18.88 4 12 4 12 4s-6.88 0-8.6.47A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.53C5.12 20 12 20 12 20s6.88 0 8.6-.47a2.78 2.78 0 0 0 1.94-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
              <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#1a0040" />
            </svg>
            Assista aqui
          </a>
        </div>
      </section>

      {/* ── 4. Cards ── */}
      <section
        ref={el => { refs.current[3] = el }}
        className={styles.cards}
      >
        <div className={styles.cardsGrid}>
          {cards.map(card => (
            <Link key={card.route} to={card.route} className={styles.card}>
              <h3 className={styles.cardTitle}>
                {card.title.split('\n').map((line, i) => (
                  <span key={i}>{line}{i < card.title.split('\n').length - 1 && <br />}</span>
                ))}
              </h3>
              <p className={styles.cardDesc}>{card.desc}</p>
              <span className={styles.cardCta}>{card.cta}</span>
            </Link>
          ))}
        </div>
      </section>

    </div>
  )
}
