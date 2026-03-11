import styles from './Formation.module.css'

export default function Formation() {
  return (
    <section id="formation" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.num}>04</span>
          <h2>Formation</h2>
        </div>

        <div className={styles.grid}>
          {/* Bachelor */}
          <div className={styles.card}>
            <div className={styles.badge}>En cours</div>
            <div className={styles.period}>2025 — 2028</div>
            <h3>Bachelor Informatique</h3>
            <p className={styles.school}>École Supérieure des Sciences de l'Informatique</p>
            <p className={styles.school2}>Enigma School</p>
            <p className={styles.desc}>
              Formation intensive couvrant la programmation, la sécurité informatique, 
              le développement web et mobile, l'IoT, l'IA et la gestion de projet.
            </p>
            <div className={styles.highlights}>
              <span>Développement Web</span>
              <span>Sécurité IoT</span>
              <span>Intelligence Artificielle</span>
              <span>Gestion de Projet</span>
            </div>
          </div>

          {/* Bac */}
          <div className={`${styles.card} ${styles.cardAlt}`}>
            <div className={styles.period}>2023 — 2024</div>
            <h3>Baccalauréat</h3>
            <p className={styles.school}>Mention Assez Bien</p>
            <p className={styles.desc}>Obtention du baccalauréat avec mention assez bien.</p>
          </div>

          {/* Langues */}
          <div className={`${styles.card} ${styles.cardLangues}`}>
            <div className={styles.cardTitle}>Langues</div>
            <div className={styles.langsList}>
              <div className={styles.langItem}>
                <span className={styles.flag}>🇫🇷</span>
                <div>
                  <div className={styles.langName}>Français</div>
                  <div className={styles.langLevel}>Langue maternelle</div>
                </div>
              </div>
              <div className={styles.langItem}>
                <span className={styles.flag}>🇬🇧</span>
                <div>
                  <div className={styles.langName}>Anglais</div>
                  <div className={styles.langLevel}>Professionnel</div>
                </div>
              </div>
              <div className={styles.langItem}>
                <span className={styles.flag}>🇸🇦</span>
                <div>
                  <div className={styles.langName}>Arabe</div>
                  <div className={styles.langLevel}>Courant</div>
                </div>
              </div>
            </div>
          </div>

          {/* Passions */}
          <div className={`${styles.card} ${styles.cardPassions}`}>
            <div className={styles.cardTitle}>Passions</div>
            <div className={styles.passionsList}>
              <div className={styles.passionItem}>
                <span>🥊</span>
                <span>Sport de combat</span>
              </div>
              <div className={styles.passionItem}>
                <span>🎬</span>
                <span>Cinéma</span>
              </div>
              <div className={styles.passionItem}>
                <span>✈️</span>
                <span>Voyages</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
