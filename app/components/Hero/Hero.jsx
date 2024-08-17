import React from 'react'
import styles from './hero.module.css'
import Image from 'next/image'
import head_line from '../../assets/orange-line.png'

const Hero = () => {
  return (
    <div className={styles.heroSection}>
    
    <div className={`container ${styles.heroText}`}>
        <h1>Explore Beyond Boundaries</h1>
        <p className={styles.heroPara}>YOUR JOURNEY STARTS HERE!</p>
        <Image
        src={head_line}
        alt='icon'
        loading='lazy'
        width={60}
        height={60}
        className={styles.headBar}
            />
    </div>
      
    </div>
  )
}

export default Hero
