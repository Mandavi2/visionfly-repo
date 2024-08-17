import React from 'react'
import styles from './world.module.css'
import Image from 'next/image'
import Icon1 from '../../assets/item1.png'
import Icon2 from '../../assets/item2.png'
import Icon3 from '../../assets/item3.png'
import World_image from '../../assets/world.png'
import orange_line from '../../assets/orange-line.png'

const World = () => {
  return (
    <section className={styles.worldSection}>
      <div className={styles.worldContainer}>
      <div className={styles.leftContainer}>
      <p className={styles.subHeading}>LETS EXPLORE THE WORLD</p>
      <h2>WE MAKE YOUR WORLD</h2>
      <h2>MORE ENJOYABLE</h2>
      <Image
        src={orange_line}
        alt='line'
        loading='lazy'
        width={120}
        height={10}
        className={styles.orange}
        />
      

      <div className={styles.contentContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.paraHeading}>
            <Image
                src={Icon1}
                alt='icon'
                loading='lazy'
                width={60}
                height={60}
                className={styles.iconOne}
            />
            <h4 className={styles.paraTitle}>Most Popular Destinations</h4>
        </div>
        <div className={styles.paraContent}>
            <div className={styles.dotLineOne}></div>
            <div className={styles.paraText}>Discover the worlds most sought-after destinations, from breathtaking wonders to vibrant cityscapes.</div>
        </div>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.paraHeading}>
            <Image
                src={Icon2}
                alt='icon'
                loading='lazy'
                width={60}
                height={60}
                className={styles.iconOne}
            />
            <h4 className={styles.paraTitle}>Budget Friendly Packages</h4>
        </div>
        <div className={styles.paraContent}>
            <div className={styles.dotLine}></div>
            <div className={styles.paraText}>Travel does not have to break the bank! Explore our curated selection of budget-friendly packages, where you can experience incredible adventures </div>
        </div>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.paraHeading}>
            <Image
                src={Icon3}
                alt='icon'
                loading='lazy'
                width={60}
                height={60}
                className={styles.iconOne}
            />
            <h4 className={styles.paraTitle}>Satisfaction Guarranted</h4>
        </div>
        <div className={styles.paraContent}>
            <div className={styles.dotLine}></div>
            <div className={styles.paraText}>Your satisfaction is our top priority. With meticulous planning and personalized service, we ensure your travel experiences exceed expectations. </div>
        </div>
      </div>
      </div>
      </div>
      <div className={styles.rightContainer}>
      <Image
        src={World_image}
        alt='icon'
        loading='lazy'
        width={490}
        height={490}
        className={styles.worldPhoto}
        />
      </div>
      </div>
    </section>
  )
}

export default World
