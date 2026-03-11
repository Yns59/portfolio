import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const lineRef = useRef(null)

  useEffect(() => {
    const el = lineRef.current
    if (!el) return
    setTimeout(() => el.classList.add(styles.lineIn), 400)
  }, [])

  return (
    <section className={styles.hero}>
      {/* Background grid */}
      <div className={styles.grid} />
      
      {/* Noise overlay */}
      <div className={styles.noise} />

      <div className={styles.inner}>
        <div className={styles.tag}>
          <span className={styles.dot} />
          Disponible pour un stage — 2 mois
        </div>

        <h1 className={styles.name}>
          <span className={styles.first}>Younes</span>
          <span className={styles.last}>Gallouch</span>
        </h1>

        <div ref={lineRef} className={styles.line} />

        <p className={styles.title}>
          Étudiant en Bachelor Informatique
          <br />
          <em>@ Enigma School — Lille</em>
        </p>

        <div className={styles.langs}>
          <span>Python</span>
          <span>JavaScript</span>
          <span>PHP</span>
          <span>C / C++</span>
          <span>SQL</span>
        </div>

        <div className={styles.cta}>
          <a href="#contact" className={styles.btnPrimary}>Me contacter</a>
          <a href="#competences" className={styles.btnSecondary}>Voir mes compétences</a>
        </div>
      </div>

      <div className={styles.scroll}>
        <span />
        Scroll
      </div>
    </section>
  )
}
