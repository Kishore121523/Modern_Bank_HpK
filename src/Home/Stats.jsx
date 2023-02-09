import React from 'react'

import styles from './Stats.module.css'

const Stats = () => {
  return (
    <div className={styles.statContainer}>
      <div className={styles.stat1}>
        <p className={styles.statNumber}>3800+</p>
        <p className={styles.statTitle}>User Active</p>
      </div>
      <div className={styles.stat2}>
        <p className={styles.statNumber}>230+</p>
        <p className={styles.statTitle}>Trusted By Company</p>
      </div>
      <div className={styles.stat3}>
        <p className={styles.statNumber}>$230M+</p>
        <p className={styles.statTitle}>Transaction</p>
      </div>
    </div>
  )
}

export default Stats