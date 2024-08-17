"use client"

import React, { useEffect, useState } from 'react'
import styles from './navbar.module.css'
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";
import Link from 'next/link';
import Image from 'next/image'
import Logo_white from '../../assets/logo-final.png'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const data = [
    { id:1, link:'/',caption: 'Home'},
    { id:2, link:'/about',caption: 'About'},
    { id:3, link:'/bharat',caption: 'Holidays', icon:<MdKeyboardArrowDown />},
    { id:4, link:'/Mice',caption: 'MICE'},
    { id:5, link:'/contact',caption: 'Contact'}
]
const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() =>{
    if(window.innerWidth > 600){
      setNavOpen(true);
    }
  }, [navOpen])

  const closeNavHandler = () =>{
    if(window.innerWidth <= 600){
      setNavOpen(false);
    }
  }

  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.navContainer}`}>
        <Link href='/' >
        <Image
                src={Logo_white}
                alt="Logo"
                loading="lazy"
                width={140}
                height={110}
                className={styles.navLogo}
              />
        </Link>
         { navOpen && <ul className={styles.navItems}>
           {
            data.map(({id, link, caption, icon})=>
                <li key={id}>
                    <Link href={link} onClick={closeNavHandler}>{caption}{icon}</Link>
                </li>
            )
           }
         </ul>}
         <div className={styles.searchBox}>
            <input type="text" placeholder='Search...' />
            <a href='#'>
            <span className={styles.searchIcon}><MdOutlineSearch /></span>
            </a>
         </div>
         <div className={styles.navBtn} onClick={() => setNavOpen(!navOpen)}>{ navOpen? <AiOutlineClose /> : <FaBars />}</div>
      </div>
    </nav>
  )
}

export default Navbar
