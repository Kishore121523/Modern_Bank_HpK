import React from 'react'
import { quotes } from "../Assets";

import styles from "./TestimonialCard.module.css";


const TestimonialCard = (props) => {
  return (
    <div className={styles.bottomTestimonials1}>
      <img src={quotes} alt="quotes" className={styles.quotes}></img>
      <p className={styles.testimonialText}>
       {props.content}
      </p>
      <div className={styles.profilePic}>
        <img src={props.pic} alt={props.pic} className={styles.pic} />
        <div className={styles.profilePicContent}>
          <p className={styles.personName}>{props.name}</p>
          <p className={styles.personJob}>{props.job}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard