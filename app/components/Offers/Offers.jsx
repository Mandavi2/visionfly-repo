import React from 'react'
import styles from './offers.module.css'
import Image from 'next/image'
import Offer_one from '../../assets/offer1.png'
import Offer_two from '../../assets/offer2.png'
import offer_line from '../../assets/orange-line.png'

const Offers = () => {
  return (
    <section className={`container ${styles.section}`}>
      <p className={styles.offerHeading}>Special Offers</p>
      <h2 className={styles.offersubHeading}>Big Offers To Inspire You</h2>
      <Image
                src={offer_line}
                alt='icon'
                loading='lazy'
                width={60}
                height={60}
                className={styles.offerBar}
            />

      <div className={styles.offerImages}>
      <Image
        src={Offer_one}
        alt="offer"
        loading="lazy"
        width={1000}
        height={500}
        className={styles.offerImage}
        />
      <Image
        src={Offer_two}
        alt="offer"
        loading="lazy"
        width={1000}
        height={500}
        className={styles.offerImage}
        />
      </div>
    </section>
  )
}

export default Offers
