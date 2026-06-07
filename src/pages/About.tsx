import styles from './About.module.css'

const pillars = [
  {
    word: 'Amar',
    script: 'nosso propósito',
    body: 'Manifestamos o amor de Deus em Cristo, pelo poder do Espírito Santo, servindo uns aos outros com dedicação e paixão. A cada dia, buscamos viver o caráter extraordinário de Cristo, transformando o mundo ao nosso redor.',
  },
  {
    word: 'Servir',
    script: 'nossa missão',
    body: 'Servimos de forma extraordinária, ultrapassando as quatro paredes e impactando todas as esferas da sociedade. Com compaixão, assistimos os necessitados e lideramos com excelência, gerando transformação e deixando um legado poderoso.',
  },
  {
    word: 'Restaurar',
    script: 'nossa visão',
    body: 'Valorizamos e cuidamos deste projeto extraordinário de Deus: a família. Inspiramos o caráter de Cristo, estabelecendo a cultura do Reino de Deus e transformando pessoas comuns em discípulos extraordinários de Jesus.',
  },
]

export default function About() {
  return (
    <section className={styles.aboutPage}>

      <div className={styles.hero}>
        <span className={styles.heroTag}>● QUEM SOMOS</span>
        <h1 className={styles.heroTitle}>
          Uma Igreja que <span className={styles.highlight}>transforma</span> vidas
        </h1>
        <p className={styles.heroSub}>
          Somos uma comunidade movida por três convicções que definem tudo o que fazemos.
        </p>
        <div className={styles.heroDivider} />
      </div>

      <div className={styles.pillarsGrid}>
        {pillars.map((p) => (
          <div key={p.word} className={styles.pillarCard}>
            <div className={styles.cardTop}>
              <h2 className={styles.pillarWord}>{p.word}</h2>
              <span className={styles.pillarScript}>{p.script}</span>
            </div>
            <div className={styles.cardDivider} />
            <p className={styles.pillarBody}>{p.body}</p>
          </div>
        ))}
      </div>

    </section>
  )
}
