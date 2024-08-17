"use client"

import styles from './slider.module.css'
import {data} from './data'
import left_arrow from '../../assets/left-arrow.png'
import right_arrow from '../../assets/right-arrow.png'
import Image from 'next/image'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import slider_line from "../../assets/orange-line.png"

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Pagination } from 'swiper/modules';



const Slider = () => {
  const reelswiperRef = useRef(null);

  const nextSlide = () =>{
    reelswiperRef.current.slideNext();
  }

  const prevSlide = () =>{
    reelswiperRef.current.slidePrev();
  }
  return (
    <section className={styles.section}>
       <p className={styles.sliderHeading}>Special Offers</p>
       <h2 className={styles.sliderSubHeading}>Hot Selling Destinations</h2>
       <Image
        src={slider_line}
        alt='icon'
        loading='lazy'
        width={60}
        height={60}
        className={styles.slideBar}
        />
        
       <Swiper

          onSwiper={(swiper) =>{
          reelswiperRef.current = swiper;
        }}
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          601:{slidesPerView:1},
          1024:{slidesPerView:4}
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={styles.mySwiper}
      >
        {
            data.map(({id,tag,image,name,icon, time, text, start, price, cta}) =>
                <SwiperSlide key={id} classname={styles.slideWrapper}>
                <div className={styles.sliderContainer}>
                <div className={styles.sliderCard}>
                <h6 className={styles.tagBox}>{tag}</h6>
                <Image
                  src={image}
                  alt="spot"
                  loading="lazy"
                  width={180}
                  height={140}
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
        <div className={styles.prevBtn} onClick={prevSlide}>
        <Image
                  src={left_arrow}
                  alt="spot"
                  loading="lazy"
                  width={45}
                  height={45}
                  className={styles.arrowImage}
                  
                />
        </div>

        <div className={styles.nextBtn} onClick={nextSlide}>
        <Image
                  src={right_arrow}
                  alt="spot"
                  loading="lazy"
                  width={45}
                  height={45}
                  className={styles.arrowImage}
                  
                />
        </div>
      </div>
    </section>
  )
}

export default Slider
