import { useEffect, useRef, useState } from 'react'
import styles from './Skills.module.css'

const langages = [
  { name: 'HTML/CSS', level: 85 },
  { name: 'JavaScript', level: 70 },
  { name: 'Python', level: 72 },
  { name: 'PHP / Symfony', level: 65 },
  { name: 'Java', level: 60 },
  { name: 'C / C++ / C#', level: 58 },
  { name: 'SQL', level: 68 },
]

const modules = [
  'Programmation Orientée Objet',
  'Sécurité appliquée à l\'IOT',
  'Framework Symfony',
  'Green IT & Énergie',
  'SEO & Webmarketing',
  'Développement objets connectés',
  'Introduction à la Domotique & IA',
  'Administration Windows & LINUX',
  'Programmation de jeux vidéos',
  'Management & Gestion de Projet',
]

export default function Skills() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="competences" className={styles.section} ref={ref}>
      <div className={styles.header}>
        <span className={styles.num}>02</span>
        <h2>Compétences</h2>
      </div>

      <div className={styles.grid}>
        {/* Languages */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Langages</h3>
          <div className={styles.bars}>
            {langages.map((l, i) => (
              <div key={l.name} className={styles.barItem} style={{ animationDelay: `${i * 0.08}s` }}>
                <div className={styles.barLabel}>
                  <span>{l.name}</span>
                  <span className={styles.barPct}>{l.level}%</span>
                </div>
                <div className={styles.barTrack}>
                  <div
                    className={styles.barFill}
                    style={{ width: visible ? `${l.level}%` : '0%', transitionDelay: `${i * 0.08}s` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modules */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Modules & Domaines</h3>
          <div className={styles.tags}>
            {modules.map((m, i) => (
              <span
                key={m}
                className={`${styles.moduleTag} ${visible ? styles.tagVisible : ''}`}
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                {m}
              </span>
            ))}
          </div>
        </div>

        {/* OS */}
        <div className={`${styles.card} ${styles.cardSmall}`}>
          <h3 className={styles.cardTitle}>Systèmes</h3>
          <div className={styles.osGrid}>
            <div className={styles.osItem}>
              <svg width="32" height="32" viewBox="0 0 88 88" fill="none">
                <rect width="40" height="40" fill="#F35325"/>
                <rect x="48" width="40" height="40" fill="#81BC06"/>
                <rect y="48" width="40" height="40" fill="#05A6F0"/>
                <rect x="48" y="48" width="40" height="40" fill="#FFBA08"/>
              </svg>
              <span>Windows</span>
            </div>
            <div className={styles.osItem}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <ellipse cx="16" cy="9" rx="12" ry="6" fill="#FCC624"/>
                <rect x="4" y="9" width="24" height="14" rx="0" fill="#FCC624"/>
                <ellipse cx="16" cy="23" rx="12" ry="6" fill="#FCC624"/>
                <text x="16" y="18" textAnchor="middle" fontSize="10" fill="#000" fontWeight="bold">Lin</text>
              </svg>
              <span>Linux</span>
            </div>
          </div>
        </div>

        {/* Soft skills */}
        <div className={`${styles.card} ${styles.cardSmall}`}>
          <h3 className={styles.cardTitle}>Soft Skills</h3>
          <ul className={styles.softList}>
            <li>Résolution de problèmes</li>
            <li>Travail en équipe</li>
            <li>Adaptabilité</li>
            <li>Curiosité technique</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
