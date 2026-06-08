import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const navLinks = [
  { to: '/about',   label: 'Sobre Nós' },
  { to: '/cults',   label: 'Cultos' },
  { to: '/contact', label: 'Contato' },
  { to: '/offer',   label: 'Dízimos & Ofertas' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className={styles.header}>
      <div className={styles.inner}>

        <NavLink to="/" className={styles.brand} onClick={close}>
          <img
            src={`${import.meta.env.BASE_URL}assets/logoatt.png`}
            alt="Igreja Família"
            className={styles.logo}
          />
          <span className={styles.brandText}>
            IGREJA <span className={styles.accent}>FAMÍLIA</span>
          </span>
        </NavLink>

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

        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>

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
