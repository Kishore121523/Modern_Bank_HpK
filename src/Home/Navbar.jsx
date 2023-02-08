/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line jsx-a11y/anchor-is-valid
import React from 'react'

import {logo} from "../Assets"
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.navBarOuter}>
      <img src={logo} className={styles.logo} alt="" />
      <ul className={styles.navLinks}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Product</a></li>
        <li><a href="#">Clients</a></li>
      </ul>
    </div>
  )
}

export default Navbar