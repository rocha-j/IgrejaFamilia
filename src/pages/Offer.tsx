import styles from './Offer.module.css'

const cards = [
  {
    id: 1,
    tag: 'PROJETO',
    title: 'UMA NOVA CASA',
    desc: 'Faça parte deste projeto! Doe através do QR Code ou pela chave PIX.',
    pix: 'familiaemprojeto.ofc@gmail.com',
    qr: `${import.meta.env.BASE_URL}assets/qrcodevermelho.png`,
    color: '#c0284a'
  },
  {
    id: 2,
    tag: 'DÍZIMOS',
    title: 'DÍZIMOS & OFERTAS',
    desc: 'Cada um dê conforme determinou em seu coração, pois Deus ama quem dá com alegria. 2 Cor 9:7',
    pix: 'igrejafamiliaa@gmail.com',
    qr: `${import.meta.env.BASE_URL}assets/qrcodeazul.png`,
    color: '#1d4888'
  },
  {
    id: 3,
    tag: 'MISSÃO',
    title: 'MISSÃO FAMÍLIA',
    desc: 'Contribua e nos ajude nas ações sociais. Para mais informações fale com Paulo César.',
    pix: 'missaoigrejafamiliaa@gmail.com',
    qr: `${import.meta.env.BASE_URL}assets/qrcodeverde.png`,
    color: '#1a7a3a'
  },
]

export default function Offer() {
  return (
    <section className={styles.offerPage}>
      <h1 className={styles.offerTitle}>DÍZIMOS E OFERTAS</h1>

      <div className={styles.offerCards}>
        {cards.map(card => (
          <div
            key={card.id}
            className={styles.offerCard}
            style={{ '--accent': card.color } as React.CSSProperties}
          >
            <div className={styles.cardHeader}>
              <span className={styles.cardTag}>{card.tag}</span>
              <h2 className={styles.cardTitle}>{card.title}</h2>
              <p className={styles.cardDesc}>{card.desc}</p>
            </div>

            <div className={styles.cardQr}>
              <img src={card.qr} alt={card.title} />
            </div>

            <div className={styles.cardFooter}>
              <span className={styles.pixLabel}>Chave PIX</span>
              <span className={styles.pixKey}>{card.pix}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}