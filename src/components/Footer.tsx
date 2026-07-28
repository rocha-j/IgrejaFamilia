import { NavLink } from 'react-router-dom'
import styles from './Footer.module.css'

const cols = [
  {
    title: 'Comunidade',
    links: [
      { label: 'Sobre Nós',  to: '/about' },
      { label: 'Cultos',     to: '/cults' },
    ],
  },
  {
    title: 'Conecte-se',
    links: [
      { label: 'Contato',          to: '/contact' },
      { label: 'Dízimos & Ofertas', to: '/offer' },
    ],
  },
]

function IgIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="17" height="17">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FbIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="17" height="17">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function YtIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="17" height="17">
      <path d="M22.54 6.42A2.78 2.78 0 0 0 20.6 4.47C18.88 4 12 4 12 4s-6.88 0-8.6.47A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.53C5.12 20 12 20 12 20s6.88 0 8.6-.47a2.78 2.78 0 0 0 1.94-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default function Footer() {
  const logoSrc = `${import.meta.env.BASE_URL}assets/logoatt.png`

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* Topo: logo + redes */}
        <div className={styles.top}>
          <img src={logoSrc} alt="Igreja Família" className={styles.logo} />
          <div className={styles.socials}>
            <a href="https://www.instagram.com/igrejafamilia.ofc" target="_blank" rel="noreferrer" aria-label="Instagram">
              <IgIcon />
            </a>
            <a href="https://www.facebook.com/share/1G3kdtetBm/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FbIcon />
            </a>
            <a href="https://www.youtube.com/@igrejafamiliasbc" target="_blank" rel="noreferrer" aria-label="YouTube">
              <YtIcon />
            </a>
          </div>
        </div>

        {/* Colunas de nav */}
        <nav className={styles.nav}>
          {cols.map(col => (
            <div key={col.title} className={styles.col}>
              <p className={styles.colTitle}>{col.title}</p>
              <div className={styles.colLinks}>
                {col.links.map(link => (
                  <NavLink key={link.to} to={link.to} className={styles.colLink}>
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}

          <div className={styles.col}>
            <p className={styles.colTitle}>Localização</p>
            <p className={styles.colAddr}>
              Av. Wallace Simonsen, 414<br />
              Nova Petrópolis<br />
              São Bernardo do Campo / SP
            </p>
          </div>
        </nav>

        {/* Barra inferior */}
        <div className={styles.bottom}>
          <p>© 2026 Primeira Igreja Família em São Bernardo</p>
          <p>Desenvolvido por <span className={styles.dev}>Jeferson Rocha</span></p>
        </div>

      </div>
    </footer>
  )
}
