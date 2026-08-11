import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const navLinks = [
  { to: '/about',   label: 'Sobre Nós' },
  { to: '/cults',   label: 'Cultos' },
  { to: '/contact', label: 'Contato' },
  { to: '/offer',   label: 'Dízimos & Ofertas' },
]

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  const nameSrc = `${import.meta.env.BASE_URL}assets/imglogo.jpeg`

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>

          <NavLink to="/" className={styles.brand} onClick={close}>
            <img src={nameSrc} alt="Igreja Família" className={styles.brandImg} />
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

          <div className={styles.rightActions}>
            <a
              href="https://www.youtube.com/@igrejafamiliasbc"
              target="_blank"
              rel="noreferrer"
              className={styles.ctaBtn}
            >
              ▶ Assista Ao Vivo
            </a>

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
      </header>

      {open && <div className={styles.backdrop} onClick={close} />}

      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`} aria-hidden={!open}>
        <div className={styles.drawerHeader}>
          <NavLink to="/" className={styles.drawerBrand} onClick={close}>
            <img src={nameSrc} alt="Igreja Família" className={styles.drawerBrandImg} />
          </NavLink>
          <button className={styles.drawerClose} onClick={close} aria-label="Fechar menu">
            <CloseIcon />
          </button>
        </div>

        <nav className={styles.drawerNav}>
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={close}
              className={({ isActive }) =>
                `${styles.drawerLink} ${isActive ? styles.drawerLinkActive : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.drawerFooter}>
          <a
            href="https://www.youtube.com/@igrejafamiliasbc"
            target="_blank"
            rel="noreferrer"
            className={styles.drawerCta}
            onClick={close}
          >
            ▶ Assista Ao Vivo
          </a>
        </div>
      </div>
    </>
  )
}
