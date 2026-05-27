import { Link } from 'react-router-dom'
import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.aboutPage}>
      <div className={styles.aboutContainer}>

        <div className={styles.aboutImageSide}>
          <img src={`${import.meta.env.BASE_URL}assets/im4.jpg`} alt="Igreja Família" className={styles.aboutImg} />
          <div className={styles.aboutBadge}>
            <span className={styles.badgeNumber}>5+</span>
            <span className={styles.badgeLabel}>Anos de Comunidade</span>
          </div>
        </div>

        <div className={styles.aboutContent}>
          <span className={styles.aboutTag}>● NOSSA HISTÓRIA</span>

          <h1>Fé para o <span className={styles.highlight}>Mundo</span> Moderno</h1>

          <p className={styles.aboutDesc}>
            Acreditamos que verdades eternas podem ser expressas por meio de uma linguagem contemporânea
            e de uma comunidade acolhedora. Nossa igreja é construída sobre a base da inclusão radical
            e do crescimento espiritual genuíno.
          </p>
          <p className={styles.aboutDesc}>
            Seja você um crente de longa data ou alguém que está apenas começando sua jornada,
            aqui você encontrará um espaço que respeita seu caminho e desafia sua perspectiva.
          </p>

          <div className={styles.aboutFeatures}>
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>🤝</span>
              <span className={styles.featureLabel}>Comunidade Inclusiva</span>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>📖</span>
              <span className={styles.featureLabel}>Exploração Espiritual</span>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>❤️</span>
              <span className={styles.featureLabel}>Compaixão Ativa</span>
            </div>
          </div>

          <Link to="/cults" className={styles.aboutCta}>Conheça nossos Cultos →</Link>
        </div>

      </div>
    </section>
  )
}