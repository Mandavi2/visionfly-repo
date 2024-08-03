import React from 'react'
import styles from './offers.module.css'
import Image from 'next/image'
import Offer_one from '../../assets/offer1.png'
import Offer_two from '../../assets/offer2.png'

const Offers = () => {
  return (
    <section className={`container ${styles.section}`}>
      <p>Special Offers</p>
      <h2>Big Offers To Inspire You</h2>

      <div className={styles.offerImages}>
      <Image
        src={Offer_one}
        alt="offer"
        loading="lazy"
        width={650}
        height={450}
        className={styles.offerImage}
        />
      <Image
        src={Offer_two}
        alt="offer"
        loading="lazy"
        width={650}
        height={450}
        className={styles.offerImage}
        />
      </div>
    </section>
  )
}

export default Offers
