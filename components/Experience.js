import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.num}>03</span>
          <h2>Expérience Pro</h2>
        </div>

        <div className={styles.timeline}>
          <div className={styles.item}>
            <div className={styles.dot} />
            <div className={styles.content}>
              <div className={styles.meta}>
                <span className={styles.year}>2022</span>
                <span className={styles.type}>Stage • 1 mois</span>
              </div>
              <h3>Centre Lazar Garreau</h3>
              <p className={styles.desc}>
                Stage d&apos;initiation au monde professionnel de l&apos;informatique.
              </p>
              <ul className={styles.tasks}>
                <li>Résolution de problèmes techniques : identification et correction de dysfonctionnements matériels et logiciels</li>
                <li>Installation, configuration et mise à jour de systèmes d&apos;exploitation et de logiciels</li>
              </ul>
              <div className={styles.tags}>
                <span>Support IT</span>
                <span>Windows</span>
                <span>Linux</span>
                <span>Maintenance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
