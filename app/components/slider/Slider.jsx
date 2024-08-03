"use client"

import styles from './slider.module.css'
import {data} from './data'
import Image from 'next/image'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const Slider = () => {
  return (
    <section className={styles.section}>
       <p>Special Offers</p>
       <h2>Hot Selling Destinations</h2>
        
       <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={styles.mySwiper}
      >
        {
            data.map(({id,image,name,icon, time, text, start, price, cta}) =>
                <SwiperSlide key={id} classname={styles.slideWrapper}>
                <div className={styles.sliderContainer}>
                <div className={styles.sliderCard}>
                <Image
                  src={image}
                  alt="spot"
                  loading="lazy"
                  width={80}
                  height={60}
                  className={styles.photoCard}
                  
                />
                <h4 className={styles.counName}>{name}</h4>
                <div className={styles.timePara}>
                <p className={styles.pIcon}>{icon}</p>
                <p>{time}</p>
                </div>
                <p className={styles.pInclude}>{text}</p>
                <div className={styles.lowContent}>
                <div className={styles.lowLeft}>
                <p>{start}</p>
                <h4>{price}</h4>
                </div>
                <div className={styles.lowerRight}>{cta}</div> 
                </div>
                </div>
                </div>
                </SwiperSlide>
            )
        }
      </Swiper>
      <div className={styles.btnContainer}>
        <div className={styles.prevBtn}></div>
        <div className={styles.nextBtn}></div>
      </div>
    </section>
  )
}

export default Slider
