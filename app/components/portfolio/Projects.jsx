import React from 'react'
import styles from './portfolio.module.css'
import Card from '../card/Card'
import Image from 'next/image'

const Projects = ({projects}) => {
  return (
    <div className={styles.projects}>
      {
        projects.map(({id,category, image, title, desc}) =>
           <div key={id} className={styles.project}>
               <div className={styles.image}>
                 <Image src={image} alt='destination'/>
               </div>
               <div className={styles.content}>
                  <h4>{title}</h4>
                  <p>{desc}</p>
               </div>
           </div>
         )
      }
    </div>
  )
}

export default Projects
