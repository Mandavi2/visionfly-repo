"use client"

import React, { useState } from 'react'
import styles from './portfolio.module.css'
import {data} from './data'
import CategoryButtons from './CategoryButtons'
import Projects from './Projects'

const Portfolio = () => {
   //function to filter projects as per category
   const [projects, setProjects] = useState(data)
   const categories = data.map(item => item.category);
   const uniqueCategories = [...new Set(categories)]

   const filterProjectsHandler = (category) =>{
      const filteredProjects = data.filter(project => project.category === category);
      setProjects(filteredProjects);
   }

  return (
    <section className={styles.portfolioSection}>
        <p>Most Popular Destinations</p>
        <h2>Package Plan Your Perfect Trip</h2>

        <div className={styles.container}>
          <CategoryButtons categories={uniqueCategories} onFilterProjects={filterProjectsHandler}/>
          <Projects projects={projects}/>
        </div>
    </section>
  )
}

export default Portfolio
