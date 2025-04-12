import React from "react";
import styles from "./nav.module.css";
import logo from "../assets/geeklogo.png"; // Importing the image
import Finds from "./findresto.jsx"; // Corrected path & name

const Head = () => {
  return (
    <><header>
      <nav className={`${styles.navbar} ${styles.header}`}>
        <div className={styles.logos}>
          <img src={logo} alt="GeekforGeeks Logo" />
          <a href="" className={styles.geek}>GeekFoods</a>
        </div>
        <div className={styles.navigation}>
          <a href="">Home</a>
          <a href="">Quote</a>
          <a href="">Restaurant</a>
          <a href="">Food</a>
          <a href="">Contact</a>
        </div>
          <button>Get Started</button>
      </nav>
    </header>
    <Finds />
    </>
  );
};

export default Head;
