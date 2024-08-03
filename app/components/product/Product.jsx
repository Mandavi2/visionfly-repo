"use client"
import React, { useState } from 'react'
import styles from './product.module.css'
import Image from 'next/image'
import Image1 from '../../assets/Goa.jpg'
import Image2 from '../../assets/Manali.jpg'
import Image3 from '../../assets/Andaman.jpg'
import Image4 from '../../assets/singapore.jpg'
import Image5 from '../../assets/Switzerland.jpg'

const Product = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) =>{
        setToggleState(index);
       }

  return (
    <section className={styles.portfolioSection}>
    <p>Most Popular Destinations</p>
    <h2>Package Plan Your Perfect Trip</h2>
    <div className={styles.projectCategories}>
        <button className={toggleState ===1 ? `btn ${styles.catBtn}` : 'btn'} onClick={() => toggleTab(1)}>Family-Friendly</button>
        <button className={toggleState ===2 ? `btn ${styles.catBtn}` : 'btn'} onClick={() => toggleTab(2)}>Romantic</button>
        <button className={toggleState ===3 ? `btn ${styles.catBtn}` : 'btn'} onClick={() => toggleTab(3)}>Cultural</button>
        <button className={toggleState ===4 ? `btn ${styles.catBtn}` : 'btn'} onClick={() => toggleTab(4)}>Nature</button>
        <button className={toggleState ===5 ? `btn ${styles.catBtn}` : 'btn'} onClick={() => toggleTab(5)}>Beach</button>
    </div>
    <div className={styles.productLine}>
        <div className={toggleState ===1 ? 'active--line' : 'product-line'}>
            <Image
                src={Image1}
                alt='destination'
                loading='Lazy'
            />
            <div className={styles.productContent}>
                <h4>Jammu-Kashmir</h4>
                <p>Flights.Hotels.Holidays</p>
            </div>
            
        </div>
        <div className={styles.productCard}>
            <Image
                src={Image2}
                alt='destination'
                loading='Lazy'
            />
            <div className={styles.productContent}>
                <h4>Singapore</h4>
                <p>Flights.Hotels.Holidays</p>
            </div>
            
        </div>
        <div className={styles.productCard}>
            <Image
                src={Image3}
                alt='destination'
                loading='Lazy'
            />
            <div className={styles.productContent}>
                <h4>Goa</h4>
                <p>Flights.Hotels.Holidays</p>
            </div>
            
        </div>
        <div className={styles.productCard}>
            <Image
                src={Image4}
                alt='destination'
                loading='Lazy'
            />
            <div className={styles.productContent}>
                <h4>Kerela</h4>
                <p>Flights.Hotels.Holidays</p>
            </div>
            
        </div>
        <div className={styles.productCard}>
            <Image
                src={Image5}
                alt='destination'
                loading='Lazy'
            />
            <div className={styles.productContent}>
                <h4>Thailand</h4>
                <p>Flights.Hotels.Holidays</p>
            </div>
            
        </div>
        <div className={styles.productCard}>
            <Image
                src={Image1}
                alt='destination'
                loading='Lazy'
            />
            <div className={styles.productContent}>
                <h4>Sikkim</h4>
                <p>Flights.Hotels.Holidays</p>
            </div>
            
        </div>

        <div className={toggleState ===2 ? 'active-product-line' : 'product-line'}>
            
        <div className={styles.productCard}>
            <Image
                src={Image1}
                alt='destination'
                loading='Lazy'
            />
            <div className={styles.productContent}>
                <h4>Shimla Manali</h4>
                <p>Flights.Hotels.Holidays</p>
            </div>
            
        </div>
        <div className={styles.productCard}>
            <Image
                src={Image1}
                alt='destination'
                loading='Lazy'
            />
            <div className={styles.productContent}>
                <h4>Leh-Ladakh</h4>
                <p>Flights.Hotels.Holidays</p>
            </div>
            
        </div>
        <div className={styles.productCard}>
            <Image
                src={Image1}
                alt='destination'
                loading='Lazy'
            />
            <div className={styles.productContent}>
                <h4>Maldives</h4>
                <p>Flights.Hotels.Holidays</p>
            </div>
            
        </div>
        <div className={styles.productCard}>
            <Image
                src={Image1}
                alt='destination'
                loading='Lazy'
            />
            <div className={styles.productContent}>
                <h4>Switzerland</h4>
                <p>Flights.Hotels.Holidays</p>
            </div>
            
        </div>
        <div className={styles.productCard}>
            <Image
                src={Image1}
                alt='destination'
                loading='Lazy'
            />
            <div className={styles.productContent}>
                <h4>Bali</h4>
                <p>Flights.Hotels.Holidays</p>
            </div>
            
        </div>
        <div className={styles.productCard}>
            <Image
                src={Image1}
                alt='destination'
                loading='Lazy'
            />
            <div className={styles.productContent}>
                <h4>Seychelles</h4>
                <p>Flights.Hotels.Holidays</p>
            </div>
            
        </div>
        </div>

        <div className={toggleState ===3 ? 'active-product-line' : 'product-line'}>
            
        <div className={styles.productCard}>
            <Image
                src={Image1}
                alt='destination'
                loading='Lazy'
            />
            <div className={styles.productContent}>
                <h4>Hampi</h4>
                <p>Flights.Hotels.Holidays</p>
            </div>
            
        </div>
        <div className={styles.productCard}>
            <Image
                src={Image1}
                alt='destination'
                loading='Lazy'
            />
            <div className={styles.productContent}>
                <h4>Delhi Agra</h4>
                <p>Flights.Hotels.Holidays</p>
            </div>
            
        </div>
        <div className={styles.productCard}>
            <Image
                src={Image1}
                alt='destination'
                loading='Lazy'
            />
            <div className={styles.productContent}>
                <h4>Mysore</h4>
                <p>Flights.Hotels.Holidays</p>
            </div>
            
        </div>
        <div className={styles.productCard}>
            <Image
                src={Image1}
                alt='destination'
                loading='Lazy'
            />
            <div className={styles.productContent}>
                <h4>Varanasi</h4>
                <p>Flights.Hotels.Holidays</p>
            </div>
            
        </div>
        <div className={styles.productCard}>
            <Image
                src={Image1}
                alt='destination'
                loading='Lazy'
            />
            <div className={styles.productContent}>
                <h4>Egypt</h4>
                <p>Flights.Hotels.Holidays</p>
            </div>
            
        </div>
        <div className={styles.productCard}>
            <Image
                src={Image1}
                alt='destination'
                loading='Lazy'
            />
            <div className={styles.productContent}>
                <h4>Europe</h4>
                <p>Flights.Hotels.Holidays</p>
            </div>
            
        </div>
        </div>

        <div className={toggleState ===4 ? 'active-product-line' : 'product-line'}>
            
        <div className={styles.productCard}>
            <Image
                src={Image1}
                alt='destination'
                loading='Lazy'
            />
            <div className={styles.productContent}>
                <h4>Iceland</h4>
                <p>Flights.Hotels.Holidays</p>
            </div>
            
        </div>
        <div className={styles.productCard}>
            <Image
                src={Image1}
                alt='destination'
                loading='Lazy'
            />
            <div className={styles.productContent}>
                <h4>New Zealand</h4>
                <p>Flights.Hotels.Holidays</p>
            </div>
            
        </div>
        <div className={styles.productCard}>
            <Image
                src={Image1}
                alt='destination'
                loading='Lazy'
            />
            <div className={styles.productContent}>
                <h4>South Africa</h4>
                <p>Flights.Hotels.Holidays</p>
            </div>
            
        </div>
        <div className={styles.productCard}>
            <Image
                src={Image1}
                alt='destination'
                loading='Lazy'
            />
            <div className={styles.productContent}>
                <h4>Norway</h4>
                <p>Flights.Hotels.Holidays</p>
            </div>
            
        </div>
        <div className={styles.productCard}>
            <Image
                src={Image1}
                alt='destination'
                loading='Lazy'
            />
            <div className={styles.productContent}>
                <h4>Himachal Pradesh</h4>
                <p>Flights.Hotels.Holidays</p>
            </div>
            
        </div>
        <div className={styles.productCard}>
            <Image
                src={Image1}
                alt='destination'
                loading='Lazy'
            />
            <div className={styles.productContent}>
                <h4>Japan</h4>
                <p>Flights.Hotels.Holidays</p>
            </div>
            
        </div>
        </div>

        <div className={toggleState ===5 ? 'active-product-line' : 'product-line'}>
            
        <div className={styles.productCard}>
            <Image
                src={Image1}
                alt='destination'
                loading='Lazy'
            />
            <div className={styles.productContent}>
                <h4>Andaman</h4>
                <p>Flights.Hotels.Holidays</p>
            </div>
            
        </div>
        <div className={styles.productCard}>
            <Image
                src={Image1}
                alt='destination'
                loading='Lazy'
            />
            <div className={styles.productContent}>
                <h4>Lakshadweep</h4>
                <p>Flights.Hotels.Holidays</p>
            </div>
            
        </div>
        <div className={styles.productCard}>
            <Image
                src={Image1}
                alt='destination'
                loading='Lazy'
            />
            <div className={styles.productContent}>
                <h4>Phuket and Krabi</h4>
                <p>Flights.Hotels.Holidays</p>
            </div>
            
        </div>
        <div className={styles.productCard}>
            <Image
                src={Image1}
                alt='destination'
                loading='Lazy'
            />
            <div className={styles.productContent}>
                <h4>Phillipines</h4>
                <p>Flights.Hotels.Holidays</p>
            </div>
            
        </div>
        <div className={styles.productCard}>
            <Image
                src={Image1}
                alt='destination'
                loading='Lazy'
            />
            <div className={styles.productContent}>
                <h4>Antalya</h4>
                <p>Flights.Hotels.Holidays</p>
            </div>
            
        </div>
        <div className={styles.productCard}>
            <Image
                src={Image1}
                alt='destination'
                loading='Lazy'
            />
            <div className={styles.productContent}>
                <h4>Langkawi</h4>
                <p>Flights.Hotels.Holidays</p>
            </div>
            
        </div>
        </div>
    </div>

    </section>
  )
}

export default Product
