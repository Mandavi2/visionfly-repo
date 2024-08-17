import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import White_Logo from '../../assets/white-logo.png'
import Link from 'next/link';
import Grey_logo from '../../assets/grey-logo.png'
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={styles.footerSection}>
    <Image
                src={Grey_logo}
                alt="Logo"
                loading="lazy"
                width={250}
                height={220}
                className={styles.grayLogo}
              />
       <div className={`container ${styles.footerTop}`}>
       <div className={styles.colOne}>
       <Link href='/' >
        <Image
                src={White_Logo}
                alt="Logo"
                loading="lazy"
                width={250}
                height={220}
                className={styles.footerLogo}
              />
        </Link>
       </div>
       <div className={styles.colTwo}>
          <h4>Get In Touch</h4>
          <div className={styles.colorLine}></div>
          <ul className={styles.footList}>
            <li className={styles.footerLi}>M: + 91 9845248323</li>
            <li>Gmail: sales@visionflyholidays.com</li>
          </ul>
          <p className={styles.footerAdd}>Address</p>
          <p>No 122 5th cross CS layout JP Nagar</p>
          <p>6th phase Bangalore 560078</p>
       </div>
       <div className={styles.colThree}>
        <h4>Follow Us</h4>
        <div className={styles.colorLine}></div>
        <div className={styles.footerIcons}>
          <span><FaFacebook /></span>
          <span><FaSquareInstagram /></span>
          <span><FaLinkedin /></span>
          <span><FaSquareTwitter /></span>
        </div>
       </div>
       </div>
       <div className={styles.horLine}></div>
       <div className={styles.footerBottom}>
          <p>Copyright © 2024 Vision Fly Holidays</p>
          <div className={styles.botRight}>
          <p>Terms & Conditions  /</p>
          <p href="/" className={styles.priPol}> Privacy Policy</p>
          </div>
       </div>
      
    </footer>
  )
}

export default Footer
