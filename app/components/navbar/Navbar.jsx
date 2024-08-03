import React from 'react'
import styles from './navbar.module.css'
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";
import Link from 'next/link';
import Image from 'next/image'
import Logo_white from '../../assets/logo-final.png'


const data = [
    { id:1, link:'/',caption: 'Home'},
    { id:2, link:'/about',caption: 'About'},
    { id:3, link:'/bharat',caption: 'Holidays', icon:<MdKeyboardArrowDown />},
    { id:4, link:'/Mice',caption: 'MICE'},
    { id:5, link:'/contact',caption: 'Contact'}
]
const Navbar = () => {
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
         <ul className={styles.navItems}>
           {
            data.map(({id, link, caption, icon})=>
                <li key={id}>
                    <Link href={link}>{caption}{icon}</Link>
                </li>
            )
           }
         </ul>
         <div className={styles.searchBox}>
            <input type="text" placeholder='Search...' />
            <a href='#'>
            <i><MdOutlineSearch /></i>
            </a>
         </div>
      </div>
    </nav>
  )
}

export default Navbar
