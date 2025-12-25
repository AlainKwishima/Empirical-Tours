import React from "react";
import styles from "./Newsletter.module.css";

export const Newsletter: React.FC = () => (
  <section className={styles.newsletter}>
    <div className={styles.inner}>
      <div className={styles.bgLeft} />
      <div className={styles.bgRight} />
      <div className={styles.content}>
        <h3>Join The Newsletter</h3>
        <p>To receive our best monthly deals</p>
        <form className={styles.form}>
          <input placeholder="Enter your email address..." />
          <button type="button" aria-label="Submit email">
            <span className={styles.sendIcon} />
          </button>
        </form>
      </div>
    </div>
  </section>
);




