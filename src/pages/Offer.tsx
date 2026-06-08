import { useState } from 'react'
import styles from './Offer.module.css'

const cards = [
  {
    id: 1,
    tag: 'PROJETO',
    title: 'UMA NOVA CASA',
    desc: 'Faça parte deste projeto! Faça sua contribuição  através do QR Code ao lado, ou através da chave Pix.',
    pix: 'familiaemprojeto.ofc@gmail.com',
    qr: `${import.meta.env.BASE_URL}assets/qrcodevermelho.png`,
    accent: '#f0c040',
    verse: null,
    note: null,
  },
  {
    id: 2,
    tag: 'DÍZIMOS',
    title: 'Dízimos & Ofertas',
    desc: 'Cada um contribua segundo propôs no seu coração; não com tristeza, ou por necessidade; porque Deus ama ao que dá com alegria.',
    pix: 'igrejafamiliaa@gmail.com',
    qr: `${import.meta.env.BASE_URL}assets/qrcodeazul.png`,
    accent: '#f0c040',
    verse: '2 Coríntios 9:7',
    note: null,
  },
  {
    id: 3,
    tag: 'MISSÃO',
    title: 'MISSÃO FAMÍLIA',
    desc: 'Contribua e nos ajude nas ações sociais da Igreja Família.',
    pix: 'missaoigrejafamilia@gmail.com',
    qr: `${import.meta.env.BASE_URL}assets/qrcodeverde.png`,
    accent: '#f0c040',
    verse: null,
    note: 'Para conhecer os projetos e ajudar de outras maneiras, procure o líder de missões, Paulo César.',
  },
]

function CopyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function PixRow({ pix, accent }: { pix: string; accent: string }) {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(pix).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className={styles.pixRow}>
      <div className={styles.pixInfo}>
        <span className={styles.pixLabel}>CHAVE PIX</span>
        <span className={styles.pixKey}>{pix}</span>
      </div>
      <button
        className={styles.copyBtn}
        style={{ '--accent': accent } as React.CSSProperties}
        onClick={handleCopy}
        title="Copiar chave PIX"
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
        <span>{copied ? 'Copiado!' : 'Copiar'}</span>
      </button>
    </div>
  )
}

export default function Offer() {
  return (
    <section className={styles.offerPage}>

      <div className={styles.hero}>
        <span className={styles.heroTag}>● CONTRIBUIÇÕES</span>
        <h1 className={styles.heroTitle}>
          Dízimos & <span className={styles.highlight}>Ofertas</span>
        </h1>
        <p className={styles.heroSub}>Sua generosidade impulsiona a missão e transforma vidas.</p>
        <div className={styles.heroDivider} />
      </div>

      <div className={styles.cardsList}>
        {cards.map((card) => (
          <div
            key={card.id}
            className={styles.offerCard}
            style={{ '--accent': card.accent } as React.CSSProperties}
          >
            <div className={styles.accentBar} />

            <div className={styles.cardBody}>
              <div className={styles.cardInfo}>
                <span className={styles.cardTag}>{card.tag}</span>
                <h2 className={styles.cardTitle}>{card.title}</h2>
                {card.verse && <span className={styles.cardVerse}>{card.verse}</span>}
                <p className={styles.cardDesc}>{card.desc}</p>
                {card.note && <p className={styles.cardNote}>{card.note}</p>}
                <PixRow pix={card.pix} accent={card.accent} />
              </div>

              <div className={styles.qrWrap}>
                <img src={card.qr} alt={`QR Code ${card.title}`} className={styles.qrImg} />
                <span className={styles.qrHint}>Escaneie para doar</span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
