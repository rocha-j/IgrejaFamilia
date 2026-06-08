import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import styles from './Header.module.css'

const navLinks = [
  { to: '/about',   label: 'Sobre Nós' },
  { to: '/cults',   label: 'Cultos' },
  { to: '/contact', label: 'Contato' },
  { to: '/offer',   label: 'Dízimos & Ofertas' },
]

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1"  x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22"   x2="5.64"  y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1"  y1="12" x2="3"  y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22"  y1="19.78" x2="5.64"  y2="18.36" />
      <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const close = () => setOpen(false)

  const logoSrc = theme === 'light'
    ? `${import.meta.env.BASE_URL}assets/logoLight.png`
    : `${import.meta.env.BASE_URL}assets/logoatt.png`

  return (
    <header className={styles.header}>
      <div className={styles.inner}>

        <NavLink to="/" className={styles.brand} onClick={close}>
          <img src={logoSrc} alt="Igreja Família" className={styles.logo} />
          <span className={styles.brandText}>
            IGREJA <span className={styles.accent}>FAMÍLIA</span>
          </span>
        </NavLink>

        {/* Desktop nav */}
        <nav className={styles.nav}>
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.navActive : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right side: theme toggle (mobile only) + burger */}
        <div className={styles.rightActions}>
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
          >
            <span className={`${styles.themeIcon} ${styles.themeIconSun} ${theme === 'light' ? styles.themeIconVisible : ''}`}>
              <SunIcon />
            </span>
            <span className={`${styles.themeIcon} ${styles.themeIconMoon} ${theme === 'dark' ? styles.themeIconVisible : ''}`}>
              <MoonIcon />
            </span>
          </button>

          <button
            className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Abrir menu"
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>

      </div>

      <div className={`${styles.mobileMenu} ${open ? styles.mobileOpen : ''}`}>
        {navLinks.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            onClick={close}
            className={({ isActive }) =>
              `${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ''}`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </header>
  )
}
