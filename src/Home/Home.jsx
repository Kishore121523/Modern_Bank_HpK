import React from 'react'

import { discount, robot } from "../Assets";
import styles from './Home.module.css';
import Navbar from './Navbar';
import Stats from './Stats';

const Home = () => {
  return (
    <div className={styles.outerDiv}>
      <Navbar />
      <div className={styles.heroOuter}>
        <div className={styles.heroLeft}>
          <div className={styles.heroLeftDiscount}>
            <img src={discount} alt="discountImg" />
            <p>
              20%<span className={styles.highlight}> Discount for</span> 1 month
              <span className={styles.highlight}> account</span>
            </p>
          </div>
          <div className={styles.heroLeftTitle}>
            <div className={styles.whiteGradient2}></div>

            <p className={styles.firstLine}>The Next</p>
            <p className={styles.secondLine}>Generation</p>
            <p className={styles.thirdLine}>Payment Method.</p>
          </div>
          <div className={styles.heroLeftContent}>
            <p>
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. <br /> We examine annual
              percentage rates, annual fees.
            </p>
          </div>
        </div>
        <div className={styles.heroRight}>
          <img src={robot} className={styles.heroImg} alt="robotImg" />
          <div className={styles.pinkGradient}></div>
          <div className={styles.whiteGradient}></div>
          <div className={styles.blueGradient}></div>
        </div>
      </div>
      <Stats/>
    </div>
    
  );
}

export default Home