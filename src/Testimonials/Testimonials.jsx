import React from 'react'

import {people01, people02, people03, airbnb, binance, coinbase, dropbox} from "../Assets"

import TestimonialCard from './TestimonialCard';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  return (
    <div className={styles.outerDiv}>
      <div className={styles.topTestimonials}>
        <p className={styles.topTestimonialsHead}>
          What people are saying about us
        </p>
        <p className={styles.topTestimonialsContent}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className={styles.bottomTestimonials}>
        <TestimonialCard
          name="Herman Jensen"
          job="Founder & Leader"
          content="Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver."
          pic={people01}
        />
        <TestimonialCard
          name="Steve Mark"
          job="Founder & Leader"
          content="Money makes your life easier. If you're lucky to have it, you're lucky."
          pic={people02}
        />
        <TestimonialCard
          name="Kenn Gallagher"
          job="Founder & Leader"
          content="It is usually people in the money business, finance, and international trade that are really rich."
          pic={people03}
        />
      </div>
      <div className={styles.blueGradient}></div>
      <div className={styles.sponsors}>
        <img src={airbnb} alt="" />
        <img src={binance} alt="" />
        <img src={coinbase} className={styles.coinbase} alt="" />
        <img src={dropbox} alt="" />
      </div>
    </div>
  );
}

export default Testimonials