import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.name}>Younes Gallouch</span>
        <span className={styles.copy}>© 2025 — Tous droits réservés</span>
        <span className={styles.made}>Fait avec ♥ à Lille</span>
      </div>
    </footer>
  )
}
