import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.mainHeader}>
        <NavLink to="/" className={styles.brand}>
          <div className={styles.logoContainer}>
            <img src="assets/imglogo.jpeg" alt="Igreja Família" className={styles.logo} />
          </div>
          <div className={styles.titleContainer}>
            <h1>IGREJA <span>FAMÍLIA</span></h1>
          </div>
        </NavLink>

        <nav className={styles.menu}>
          <ul>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''}>Sobre Nós</NavLink></li>
            <li><NavLink to="/cults" className={({ isActive }) => isActive ? styles.active : ''}>Cultos</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : ''}>Contato</NavLink></li>
            <li><NavLink to="/offer" className={({ isActive }) => isActive ? styles.active : ''}>Dízimos e Ofertas</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}