import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMain}>
        <div className={styles.footerInfo}>
          <div className={styles.footerInfoBox}>
            <img src="assets/imglogo.jpeg" alt="Igreja Família" className={styles.footerLogo} />
            <div className={styles.logoText}>
              IGREJA FAMÍLIA<br />
              <span>SÃO BERNARDO</span>
            </div>
          </div>

          <p className={styles.footerAddress}>
            Av. Wallace Simonsen, 414<br />
            Nova Petrópolis, São Bernardo do Campo /SP
          </p>

          <div className={styles.footerSocials}>
            <a href="https://www.instagram.com/igrejafamilia.ofc" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="https://www.facebook.com/share/1G3kdtetBm/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="https://www.youtube.com/@igrejafamiliasbc" target="_blank" rel="noreferrer" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42A2.78 2.78 0 0 0 20.6 4.47C18.88 4 12 4 12 4s-6.88 0-8.6.47A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.53C5.12 20 12 20 12 20s6.88 0 8.6-.47a2.78 2.78 0 0 0 1.94-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.footerMap}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.1494290921837!2d-46.54778202436974!3d-23.702666978702975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce422f55f16241%3A0x2d891678b09eee7a!2sAv.%20Wallace%20Simonsen%2C%20414%20-%20Nova%20Petr%C3%B3polis%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP%2C%2009771-210!5e1!3m2!1sen!2sbr!4v1776715401842!5m2!1sen!2sbr"
            width="100%"
            height="180"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© 2026 - Primeira Igreja Família em São Bernardo - CNPJ 00.000.000/0000-00</p>
        <p>Desenvolvido por Jeferson Rocha</p>
      </div>
    </footer>
  )
}