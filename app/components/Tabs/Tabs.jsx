"use client"
import React, { useState } from 'react'
import styles from './tabs.module.css'
import Image1 from '../../assets/jk.png'
import Image2 from '../../assets/sing.webp'
import Image3 from '../../assets/goa.png'
import Image4 from '../../assets/kerela.png'
import Image5 from '../../assets/thail.jpeg'
import Image6 from '../../assets/sikkim.jpg'
import Image7 from '../../assets/Manali.jpg'
import Image8 from '../../assets/Leh-Ladakh.jpg'
import Image9 from '../../assets/maldiv.jpg'
import Image10 from '../../assets/Switzerland.jpg'
import Image11 from '../../assets/bali.webp'
import Image12 from '../../assets/sey.webp'
import Image13 from '../../assets/hampi.jpg'
import Image14 from '../../assets/agra.webp'
import Image15 from '../../assets/Mysore.jpg'
import Image16 from '../../assets/varanasi.jpg'
import Image17 from '../../assets/Egypt.jpg'
import Image18 from '../../assets/Europe.jpg'
import Image19 from '../../assets/iceland.webp'
import Image20 from '../../assets/newzealand.jpg'
import Image21 from '../../assets/southafrica.webp'
import Image22 from '../../assets/norway.jpg'
import Image23 from '../../assets/himachal.webp'
import Image24 from '../../assets/japan.jpg'
import Image25 from '../../assets/andaman.jpeg'
import Image26 from '../../assets/Lakshadweep.webp'
import Image27 from '../../assets/Phuket-Krabi.jpg'
import Image28 from '../../assets/phillip.jpeg'
import Image29 from '../../assets/anta.jpg'
import Image30 from '../../assets/lang.jpg'

import Image from 'next/image'
import Dest_Line from '../../assets/orange-line.png'

const Tabs = () => {

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) =>{
    setToggleState(index);
   }

  return (
    <section className={styles.tripSection}>
      <p className={styles.tripHead}>Most Popular Destinations</p>
      <h2 className={styles.tripSubHeading}>Package Plan Your Perfect Trip</h2>
      <div className={styles.placeLine}>
            <Image
                src={Dest_Line}
                alt='icon'
                loading='lazy'
                width={60}
                height={60}
                className={styles.destBar}
            />
        </div>
      <div className={`container ${styles.sectionContainer}`}>
       <div className={styles.clientTabsBtns}>
       <button className={toggleState ===1 ? styles.clientActiveBtn : styles.clientBtn} onClick={() => toggleTab(1)}>Family-Friendly</button>
        <button className={toggleState ===2 ? styles.clientActiveBtn : styles.clientBtn} onClick={() => toggleTab(2)}>Romantic</button>
        <button className={toggleState ===3 ? styles.clientActiveBtn : styles.clientBtn} onClick={() => toggleTab(3)}>Cultural</button>
        <button className={toggleState ===4 ? styles.clientActiveBtn : styles.clientBtn} onClick={() => toggleTab(4)}>Nature</button>
        <button className={toggleState ===5 ? styles.clientActiveBtn : styles.clientBtn} onClick={() => toggleTab(5)}>Beach</button>
       </div>
       <div className={toggleState ===1 ? styles.activeTripList : styles.tripList}>
          <div className={styles.tripCard}>
          <Image
            src={Image1}
            alt='trip'
            width={650}
            height={200}
            className={styles.clientIcon}
          />
          <div className={styles.cardContent}>
            <h4>Jammu Kashmir</h4>
            <p>Flights.Hotels.Holidays</p>
          </div>
          </div>
          <div className={styles.tripCard}>
          <Image
            src={Image2}
            alt='trip'
            width={650}
            height={200}
            className={styles.clientIcon}
          />
          <div className={styles.cardContent}>
            <h4>Singapore</h4>
            <p>Flights.Hotels.Holidays</p>
          </div>
          </div>
          <div className={styles.tripCard}>
          <Image
            src={Image3}
            alt='trip'
            width={650}
            height={200}
            className={styles.clientIcon}
          />
          <div className={styles.cardContent}>
            <h4>Goa</h4>
            <p>Flights.Hotels.Holidays</p>
          </div>
          </div>
          <div className={styles.tripCard}>
          <Image
            src={Image4}
            alt='trip'
            width={650}
            height={200}
            className={styles.clientIcon}
          />
          <div className={styles.cardContent}>
            <h4>Kerela</h4>
            <p>Flights.Hotels.Holidays</p>
          </div>
          </div>
          <div className={styles.tripCard}>
          <Image
            src={Image5}
            alt='trip'
            width={900}
            height={600}
            className={styles.clientIcon}
          />
          <div className={styles.cardContent}>
            <h4>Thailand</h4>
            <p>Flights.Hotels.Holidays</p>
          </div>
          </div>
          <div className={styles.tripCard}>
          <Image
            src={Image6}
            alt='trip'
            width={650}
            height={200}
            className={styles.clientIcon}
          />
          <div className={styles.cardContent}>
            <h4>Sikkim</h4>
            <p>Flights.Hotels.Holidays</p>
          </div>
          </div>
       </div>

       <div className={toggleState ===2 ? styles.activeTripList : styles.tripList}>
          <div className={styles.tripCard}>
          <Image
            src={Image7}
            alt='trip'
            width={650}
            height={200}
            className={styles.clientIcon}
          />
          <div className={styles.cardContent}>
            <h4>Shimla Manali</h4>
            <p>Flights.Hotels.Holidays</p>
          </div>
          </div>
          <div className={styles.tripCard}>
          <Image
            src={Image8}
            alt='trip'
            width={650}
            height={200}
            className={styles.clientIcon}
          />
          <div className={styles.cardContent}>
            <h4>Leh Ladakh</h4>
            <p>Flights.Hotels.Holidays</p>
          </div>
          </div>
          <div className={styles.tripCard}>
          <Image
            src={Image9}
            alt='trip'
            width={650}
            height={200}
            className={styles.clientIcon}
          />
          <div className={styles.cardContent}>
            <h4>Maldives</h4>
            <p>Flights.Hotels.Holidays</p>
          </div>
          </div>
          <div className={styles.tripCard}>
          <Image
            src={Image10}
            alt='trip'
            width={650}
            height={200}
            className={styles.clientIcon}
          />
          <div className={styles.cardContent}>
            <h4>Switzerland</h4>
            <p>Flights.Hotels.Holidays</p>
          </div>
          </div>
          <div className={styles.tripCard}>
          <Image
            src={Image11}
            alt='trip'
            width={650}
            height={200}
            className={styles.clientIcon}
          />
          <div className={styles.cardContent}>
            <h4>Bali</h4>
            <p>Flights.Hotels.Holidays</p>
          </div>
          </div>
          <div className={styles.tripCard}>
          <Image
            src={Image12}
            alt='trip'
            width={650}
            height={200}
            className={styles.clientIcon}
          />
          <div className={styles.cardContent}>
            <h4>Seychelles</h4>
            <p>Flights.Hotels.Holidays</p>
          </div>
          </div>
       </div>

       
       <div className={toggleState ===3 ? styles.activeTripList : styles.tripList}>
          <div className={styles.tripCard}>
          <Image
            src={Image13}
            alt='trip'
            width={650}
            height={200}
            className={styles.clientIcon}
          />
          <div className={styles.cardContent}>
            <h4>Hampi</h4>
            <p>Flights.Hotels.Holidays</p>
          </div>
          </div>
          <div className={styles.tripCard}>
          <Image
            src={Image14}
            alt='trip'
            width={650}
            height={200}
            className={styles.clientIcon}
          />
          <div className={styles.cardContent}>
            <h4>Delhi Agra</h4>
            <p>Flights.Hotels.Holidays</p>
          </div>
          </div>
          <div className={styles.tripCard}>
          <Image
            src={Image15}
            alt='trip'
            width={650}
            height={200}
            className={styles.clientIcon}
          />
          <div className={styles.cardContent}>
            <h4>Mysore</h4>
            <p>Flights.Hotels.Holidays</p>
          </div>
          </div>
          <div className={styles.tripCard}>
          <Image
            src={Image16}
            alt='trip'
            width={650}
            height={200}
            className={styles.clientIcon}
          />
          <div className={styles.cardContent}>
            <h4>Varanasi</h4>
            <p>Flights.Hotels.Holidays</p>
          </div>
          </div>
          <div className={styles.tripCard}>
          <Image
            src={Image17}
            alt='trip'
            width={650}
            height={200}
            className={styles.clientIcon}
          />
          <div className={styles.cardContent}>
            <h4>Egypt</h4>
            <p>Flights.Hotels.Holidays</p>
          </div>
          </div>
          <div className={styles.tripCard}>
          <Image
            src={Image18}
            alt='trip'
            width={650}
            height={200}
            className={styles.clientIcon}
          />
          <div className={styles.cardContent}>
            <h4>Europe</h4>
            <p>Flights.Hotels.Holidays</p>
          </div>
          </div>
       </div>

       <div className={toggleState ===4 ? styles.activeTripList : styles.tripList}>
          <div className={styles.tripCard}>
          <Image
            src={Image19}
            alt='trip'
            width={650}
            height={200}
            className={styles.clientIcon}
          />
          <div className={styles.cardContent}>
            <h4>Iceland</h4>
            <p>Flights.Hotels.Holidays</p>
          </div>
          </div>
          <div className={styles.tripCard}>
          <Image
            src={Image20}
            alt='trip'
            width={650}
            height={200}
            className={styles.clientIcon}
          />
          <div className={styles.cardContent}>
            <h4>New Zealand</h4>
            <p>Flights.Hotels.Holidays</p>
          </div>
          </div>
          <div className={styles.tripCard}>
          <Image
            src={Image21}
            alt='trip'
            width={650}
            height={200}
            className={styles.clientIcon}
          />
          <div className={styles.cardContent}>
            <h4>South Africa</h4>
            <p>Flights.Hotels.Holidays</p>
          </div>
          </div>
          <div className={styles.tripCard}>
          <Image
            src={Image22}
            alt='trip'
            width={650}
            height={200}
            className={styles.clientIcon}
          />
          <div className={styles.cardContent}>
            <h4>Norway</h4>
            <p>Flights.Hotels.Holidays</p>
          </div>
          </div>
          <div className={styles.tripCard}>
          <Image
            src={Image23}
            alt='trip'
            width={650}
            height={200}
            className={styles.clientIcon}
          />
          <div className={styles.cardContent}>
            <h4>Himachal Pradesh</h4>
            <p>Flights.Hotels.Holidays</p>
          </div>
          </div>
          <div className={styles.tripCard}>
          <Image
            src={Image24}
            alt='trip'
            width={650}
            height={200}
            className={styles.clientIcon}
          />
          <div className={styles.cardContent}>
            <h4>Japan</h4>
            <p>Flights.Hotels.Holidays</p>
            
          </div>
          </div>
       </div>
       <div className={toggleState ===5 ? styles.activeTripList : styles.tripList}>
          <div className={styles.tripCard}>
          <Image
            src={Image25}
            alt='trip'
            width={650}
            height={200}
            className={styles.clientIcon}
          />
          <div className={styles.cardContent}>
            <h4>Andaman</h4>
            <p>Flights.Hotels.Holidays</p>
          </div>
          </div>
          <div className={styles.tripCard}>
          <Image
            src={Image26}
            alt='trip'
            width={650}
            height={200}
            className={styles.clientIcon}
          />
          <div className={styles.cardContent}>
            <h4>Lakshadweep</h4>
            <p>Flights.Hotels.Holidays</p>
          </div>
          </div>
          <div className={styles.tripCard}>
          <Image
            src={Image27}
            alt='trip'
            width={650}
            height={200}
            className={styles.clientIcon}
          />
          <div className={styles.cardContent}>
            <h4>Phuket and Krabi</h4>
            <p>Flights.Hotels.Holidays</p>
          </div>
          </div>
          <div className={styles.tripCard}>
          <Image
            src={Image28}
            alt='trip'
            width={650}
            height={200}
            className={styles.clientIcon}
          />
          <div className={styles.cardContent}>
            <h4>Phillipine</h4>
            <p>Flights.Hotels.Holidays</p>
          </div>
          </div>
          <div className={styles.tripCard}>
          <Image
            src={Image29}
            alt='trip'
            width={650}
            height={200}
            className={styles.clientIcon}
          />
          <div className={styles.cardContent}>
            <h4>Antalya</h4>
            <p>Flights.Hotels.Holidays</p>
          </div>
          </div>
          <div className={styles.tripCard}>
          <Image
            src={Image30}
            alt='trip'
            width={650}
            height={200}
            className={styles.clientIcon}
          />
          <div className={styles.cardContent}>
            <h4>Langkawi</h4>
            <p>Flights.Hotels.Holidays</p>
          </div>
          </div>
       </div>
      </div>
    </section>
  )
}

export default Tabs
