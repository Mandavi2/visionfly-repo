"use client"

import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import {data} from './data'
import styles from './masonry.module.css'
import Image from 'next/image'
import mason_bar from '../../assets/orange-line.png'

const MasonryGrid = () => {

  return (
    <section className={`container ${styles.masSection}`}>
      <h2 className={styles.masonHeader}>Mesmerizing International</h2>
      <h2 className={styles.masonTitle}>Holiday Locations</h2>
      <Image
                src={mason_bar}
                alt='icon'
                loading='lazy'
                width={60}
                height={60}
                className={styles.masonBar}
            />
      <ResponsiveMasonry columnsCountBreakPoints={{350:1, 750:2, 900:3}} className={styles.colImages}>
      <Masonry columnsCount={4} gutter='10px'>
        {
          data.map((photo,travel, name, id) =>
          <div key={id}>
          <Image
           src={photo.pic}
           alt='missing'
           className={styles.masonImage}
         />
         <p className={styles.photoTravel}>{photo.travel}</p>
         <p className={styles.photoName}>{photo.name}</p>
          </div>
          
          )
        }
      </Masonry>
      </ResponsiveMasonry>
    </section>
  )
}

export default MasonryGrid
