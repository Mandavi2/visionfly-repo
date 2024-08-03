import React from 'react'
import styles from './hero.module.css'

const Hero = () => {
  return (
    <div className={styles.heroSection}>
    
    <div className={`container ${styles.heroText}`}>
        <h1>Explore Beyond Boundaries</h1>
        <p className={styles.heroPara}>YOUR JOURNEY STARTS HERE!</p>
    </div>
      
    </div>
  )
}

export default Hero
