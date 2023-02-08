import React from 'react'

import styles from './Home.module.css';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div className={styles.outerDiv}>
      <Navbar />
    </div>
  )
}

export default Home