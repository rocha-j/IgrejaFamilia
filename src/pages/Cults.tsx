import styles from './Cults.module.css'

const cultos = [
  { id: 1, nome: 'Culto da Família', dia: 'DOMINGO', horario: '10:00H', descricao: 'Nossa celebração semanal com louvor, palavra e comunhão.', color: '#f0c040' },
  { id: 2, nome: 'Quarta Profética', dia: 'QUARTA', horario: '19:30H', descricao: 'Quarta Profética com louvor, palavra e comunhão.', color: '#4fc3f7' },
  { id: 3, nome: 'Culto de Ensino', dia: 'SEGUNDA', horario: '19:30H', descricao: 'Um culto especial de fé, intercessão e crescimento.', color: '#a78bfa' },
  { id: 4, nome: 'Instituto Saber', dia: 'DOMINGO', horario: '08:00H', descricao: 'Todo domingo uma oportunidade de aprendizado e crescimento espiritual.', color: '#f97316' },
  { id: 5, nome: 'Instituto Saber', dia: 'DOMINGO', horario: '08:00H', descricao: 'Todo domingo uma oportunidade de aprendizado e crescimento espiritual.', color: '#22c55e' },
  { id: 6, nome: 'Instituto Saber', dia: 'DOMINGO', horario: '08:00H', descricao: 'Todo domingo uma oportunidade de aprendizado e crescimento espiritual.', color: '#ec4899' },
]

export default function Cults() {
  return (
    <section className={styles.cultosPage}>
      <div className={styles.cultosHeader}>
        <h1>CULTOS</h1>
        <p className={styles.subtitle}>Venha fazer parte da nossa família</p>
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
                <span className={styles.timeIcon}>⏱</span>
                {culto.horario}
              </div>
              <p className={styles.cardDesc}>{culto.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}