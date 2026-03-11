import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { href: '#profil', label: 'Profil' },
  { href: '#competences', label: 'Compétences' },
  { href: '#experience', label: 'Expérience' },
  { href: '#formation', label: 'Formation' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#" className={styles.logo}>YG</a>
      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
          </li>
        ))}
      </ul>
      <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
        <span className={menuOpen ? styles.x1 : ''}></span>
        <span className={menuOpen ? styles.x2 : ''}></span>
        <span className={menuOpen ? styles.x3 : ''}></span>
      </button>
    </nav>
  )
}
