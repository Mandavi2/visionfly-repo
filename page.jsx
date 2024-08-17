import React from 'react'
import styles from './contact.module.css'
import Image from 'next/image'
import contact_vector from '../assets/contact-vector.png'
import contact_girl from '../assets/contact-girl.png'
import location_icon from '../assets/loc-icon.png'
import telephone_icon from '../assets/tele-icon.png'
import email_icon from '../assets/mail-icon.png'
import clock_icon from '../assets/clock-icon.png'
import contact_line from '../assets/orange-line.png'
import { IoPersonOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { CiMobile1 } from "react-icons/ci";
import { FaRegPenToSquare } from "react-icons/fa6";

const page = () => {
  return (
    <section>
      <div className={styles.contactBackground}>
      <Image
        src={contact_vector}
        alt='contact'
        width={1500}
        height={270}
        className={styles.contactImage}
      />
      
      </div>
      <h2 className={styles.contactText}>Contact</h2>
      <Image
        src={contact_line}
        alt='icon'
        loading='lazy'
        width={100}
        height={80}
        className={styles.contactLine}
      />
       {/*  contact Header ends */}


       {/* box container starts */}

       <div className={styles.contactBox}>
        <p className={styles.conPara}>Connect with us to be part of our vibrant community. Whether you want to</p>
        <p className={styles.conParatwo}>Get in touch, collaborate join us. <span className={styles.contactPrimary}>Lets grow together!</span></p>
        <h3 className={styles.subHeading}>Contact & Join Together</h3>
        <Image
          src={contact_line}
        alt='icon'
        loading='lazy'
        width={100}
        height={80}
        className={styles.contactBoxLine}
        />
        <div className={`container ${styles.contactBoxes}`}>
          <div className={styles.contactSingleBox}>
             <div className={styles.boxTop}>
              <Image
                src={location_icon}
                alt='loc_icon'
                width={50}
                height={50}
                className={styles.boxIcon}
              />
              <div className={styles.boxRight}>
                <p className={styles.boxTitle}>Location</p>
                <p className={styles.boxOrange}>Visit Us At</p>
              </div>
             </div>
             <div className={styles.boxBottom}>No 122, 5th cross, CS Layout, JP Nagar 6th phase Bangalore - 560078</div>
          </div>
          <div className={styles.contactSingleBox}>
             <div className={styles.boxTop}>
              <Image
                src={telephone_icon}
                alt='loc_icon'
                width={50}
                height={50}
                className={styles.boxIcon}
              />
              <div className={styles.boxRight}>
                <p className={styles.boxTitle}>24*7 SERVICE..</p>
                <p className={styles.boxOrange}>Call Us On</p>
              </div>
             </div>
             <div className={styles.boxBottom}>Mob : +91 98452 48323</div>
          </div>
          <div className={styles.contactSingleBox}>
             <div className={styles.boxTop}>
              <Image
                src={email_icon}
                alt='loc_icon'
                width={50}
                height={50}
                className={styles.boxIcon}
              />
              <div className={styles.boxRight}>
                <p className={styles.boxTitle}>DROP A LINE..</p>
                <p className={styles.boxOrange}>Mail Address</p>
              </div>
             </div>
             <div className={styles.boxBottom}>sales@visionflyholidays.com</div>
          </div>
          <div className={styles.contactSingleBox}>
             <div className={styles.boxTop}>
              <Image
                src={clock_icon}
                alt='loc_icon'
                width={50}
                height={50}
                className={styles.boxIcon}
              />
              <div className={styles.boxRight}>
                <p className={styles.boxTitle}>OFFICE HOURS..</p>
                <p className={styles.boxOrange}>Opening Time</p>
              </div>
             </div>
             <div className={styles.boxBottom}>10 AM to 9 PM
             Sunday (Closed)</div>
          </div>
        </div>
        </div>
        
       {/* box container ends */}

       {/*-----Form Section starts ------ */}
        <div className={styles.formSection}>
          <div className={`container ${styles.formContainer}`}>
          <div className={styles.formContainerLeft}>
          <Image
           src={contact_girl}
           alt='contact'
           width={800}
           height={1000}
           className={styles.formImage}
      />
          </div>
          <div className={styles.formContainerRight}>
            <h3 className={styles.formHeading}><span className={styles.colorText}>Reach &</span> Get In Touch With Us!</h3>
            <p className={styles.formDesc}>Your Data Will Not Be Published. Required Fields Are Marked</p>
             <form>
             <div className={styles.inputBox}>
             <span className={styles.formIcon}><IoPersonOutline /></span>
             <input type="text" name='name' placeholder=' Your Name' required />
             </div>
             <div className={styles.inputBox}>
             <span className={styles.formIcon}><IoMailOutline /></span>
             <input type="text" name='name' placeholder=' Your Email' required />
             </div>
             <div className={styles.inputBox}>
             <span className={styles.formIcon}><CiMobile1 /></span>
             <input type="text" name='name' placeholder=' Your Number' required />
             </div>
             
             <p className={styles.messageText}><span className={styles.formIcon}><FaRegPenToSquare /></span>Enter Your Message here</p>
             <div className={styles.inputBox}>
             <textarea name="message" rows='6' placeholder='Your Message'></textarea>
             </div>
             <button className={styles.formBtn}>Send Message</button>
             </form>
          </div>
          </div>
        </div>


       {/* -----Form Section Ends------- */}
      
    </section>
  )
}
export default page

