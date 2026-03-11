import styles from './About.module.css'

export default function About() {
  return (
    <section id="profil" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.num}>01</span>
          <h2>À Propos</h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.left}>
            <p className={styles.bio}>
              Actuellement étudiant en Bachelor à Enigma School, je suis passionné par
              l'informatique dans toutes ses dimensions — développement, sécurité, IoT,
              et intelligence artificielle.
            </p>
            <p className={styles.bio}>
              Je suis à la recherche d'un <strong>stage de 2 mois</strong> pour mettre en pratique
              mes compétences, découvrir les enjeux du secteur en entreprise, et renforcer
              mon expertise sur le terrain.
            </p>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>10+</span>
                <span className={styles.statLabel}>Langages maîtrisés</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>3</span>
                <span className={styles.statLabel}>Langues parlées</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>2025</span>
                <span className={styles.statLabel}>Promo Bachelor</span>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.photoWrapper}>
              <div className={styles.photoFrame} />
              <div className={styles.photoPlaceholder}>
                <span className={styles.initials}>YG</span>
              </div>
              <div className={styles.photoTag}>
                <span className={styles.tagDot} />
                Open to work
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
