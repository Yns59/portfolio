import '../styles/globals.css'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const cursor = document.createElement('div')
    cursor.className = 'cursor'
    const follower = document.createElement('div')
    follower.className = 'cursor-follower'
    document.body.appendChild(cursor)
    document.body.appendChild(follower)

    let mouseX = 0, mouseY = 0
    let followerX = 0, followerY = 0

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`
    }

    const animate = () => {
      followerX += (mouseX - followerX) * 0.12
      followerY += (mouseY - followerY) * 0.12
      follower.style.transform = `translate(${followerX - 18}px, ${followerY - 18}px)`
      requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMove)
    animate()

    return () => {
      document.removeEventListener('mousemove', onMove)
      cursor.remove()
      follower.remove()
    }
  }, [])

  return <Component {...pageProps} />
}
