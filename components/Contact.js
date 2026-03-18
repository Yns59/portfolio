import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.bg} />
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.num}>05</span>
          <h2>Contact</h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.left}>
            <p className={styles.intro}>
              Vous cherchez un stagiaire motivé, curieux et passionné par l&apos;informatique ?
              N&apos;hésitez pas à me contacter.
            </p>

            <div className={styles.items}>
              {/* Téléphone retiré */}

              <a href="mailto:gallouchy@gmail.com" className={styles.item}>
                <div className={styles.itemIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <div className={styles.itemLabel}>Email</div>
                  <div className={styles.itemValue}>gallouchy@gmail.com</div>
                </div>
              </a>

              <div className={styles.item}>
                <div className={styles.itemIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <div className={styles.itemLabel}>Localisation</div>
                  <div className={styles.itemValue}>Lille, France</div>
                </div>
              </div>

              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.item}>
                <div className={styles.itemIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </div>
                <div>
                  <div className={styles.itemLabel}>LinkedIn</div>
                  <div className={styles.itemValue}>Younes Gallouch</div>
                </div>
              </a>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.bigText}>
              <span>Disponible</span>
              <span>pour un</span>
              <span className={styles.gold}>stage</span>
            </div>
            <div className={styles.duration}>
              <span className={styles.durationNum}>2</span>
              <span className={styles.durationLabel}>mois minimum</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
