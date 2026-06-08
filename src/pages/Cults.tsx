import styles from './Cults.module.css'

const cultos = [
  { id: 1, nome: 'Culto da Família', dia: 'DOMINGO', horario: '10:00H', descricao: 'Nossa celebração semanal com louvor, palavra e comunhão.', color: '#f0c040' },
  { id: 2, nome: 'Quarta Profética', dia: 'QUARTA', horario: '19:30H', descricao: 'Quarta Profética com louvor, palavra e comunhão.', color: '#f0c040' },
  { id: 3, nome: 'Culto de Ensino', dia: 'SEGUNDA', horario: '19:30H', descricao: 'Um culto especial de fé, intercessão e crescimento.', color: '#f0c040' },
  { id: 4, nome: 'Instituto Saber', dia: 'DOMINGO', horario: '08:00H', descricao: 'Todo domingo uma oportunidade de aprendizado e crescimento espiritual.', color: '#f0c040' },
  { id: 5, nome: 'Instituto Saber', dia: 'DOMINGO', horario: '08:00H', descricao: 'Todo domingo uma oportunidade de aprendizado e crescimento espiritual.', color: '#f0c040' },
  { id: 6, nome: 'Instituto Saber', dia: 'DOMINGO', horario: '08:00H', descricao: 'Todo domingo uma oportunidade de aprendizado e crescimento espiritual.', color: '#f0c040' },
]

function ClockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

export default function Cults() {
  return (
    <section className={styles.cultosPage}>

      <div className={styles.hero}>
        <span className={styles.heroTag}>● PROGRAMAÇÃO</span>
        <h1 className={styles.heroTitle}>
          Nossos <span className={styles.highlight}>Cultos</span>
        </h1>
        <p className={styles.heroSub}>
          Venha fazer parte da nossa família. Participe dos nossos encontros semanais.
        </p>
        <div className={styles.heroDivider} />
      </div>

      <div className={styles.cardsGrid}>
        {cultos.map(culto => (
          <div
            key={culto.id}
            className={styles.cultoCard}
            style={{ '--accent': culto.color } as React.CSSProperties}
          >
            <div className={styles.cardDay}>{culto.dia}</div>
            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>{culto.nome}</h2>
              <div className={styles.cardTime}>
                <ClockIcon />
                {culto.horario}
              </div>
              <div className={styles.cardDivider} />
              <p className={styles.cardDesc}>{culto.descricao}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
