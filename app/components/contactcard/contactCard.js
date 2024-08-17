import React from 'react'
import Image from 'next/image'
import location_icon from '../../assets/loc-icon.png'
import telephone_icon from '../../assets/tele-icon.png'
import email_icon from '../../assets/mail-icon.png'
import clock_icon from '../../assets/clock-icon.png'

const contactCard = () => {
  return (
    <div className={styles.contactBoxes}>
          <div className={styles.contactBox}>
             <div className={styles.boxTop}>
              <Image
                src={location_icon}
                alt='loc_icon'
                width={50}
                height={50}
                className={styles.boxIcon}
              />
              <div className={styles.boxRight}>
                <p>Location</p>
                <p className={styles.boxOrange}>Visit Us At</p>
              </div>
             </div>
             <div className={styles.boxBottom}>No 122, 5th cross, CS Layout, JP Nagar 6th phase Bangalore - 560078</div>
          </div>
        </div>
  )
}

export default contactCard
