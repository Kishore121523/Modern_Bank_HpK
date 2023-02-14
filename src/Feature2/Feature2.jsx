import React from 'react'

import {bill,apple,google} from "../Assets"

import styles from './Feature2.module.css';

const Feature2 = () => {
  return (
    <div className={styles.outerDiv}>
      <div className={styles.whiteGradient2}></div>
      <div className={styles.pinkGradient}></div>
      <img src={bill} alt="billImg" className={styles.billImg} />
      <div className={styles.rightBillDiv}>
        <p className={styles.rightBillHead}>
          Easily control your billing & invoicing.
        </p>
        <div className={styles.rightBillMiddle}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </div>
        <div className={styles.rightBillBottom}>
          <img src={apple} alt="apple" />
          <img src={google} alt="google" />
        </div>
      </div>
    </div>
  );
}

export default Feature2