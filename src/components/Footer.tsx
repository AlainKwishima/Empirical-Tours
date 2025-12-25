import React from "react";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.overlay} />
    <div className={styles.container}>
      <div className={styles.brandCol}>
        <div className={styles.brandRow}>
          <img src="/assets/about/logo.svg" alt="Empirical Tours logo" className={styles.logo} />
        </div>
        <h3>Want to Take Tour Packages?</h3>
        <button className={styles.bookBtn}>Book A Tour</button>
      </div>

      <div className={styles.middleCols}>
        <div className={styles.col}>
          <div className={styles.heading}>Quick Link</div>
          <div className={styles.linkList}>
            <a href="#">About Us</a>
            <a href="#">Destinations</a>
            <a href="#">Tour Package</a>
            <a href="#">Article</a>
            <a href="#">Contact Us</a>
          </div>
        </div>

        <div className={styles.col}>
          <div className={styles.iconRow}>
            <span className={styles.icon} />
            <div className={styles.heading}>More Inquiry</div>
          </div>
          <a href="tel:+999858624984" className={styles.textLink}>
            +999-858 624 984
          </a>

          <div className={styles.iconRow}>
            <span className={styles.icon} />
            <div className={styles.heading}>Send Mail</div>
          </div>
          <a href="mailto:info@example.com" className={styles.textLink}>
            info@example.com
          </a>

          <div className={styles.iconRow}>
            <span className={styles.icon} />
            <div className={styles.heading}>Address</div>
          </div>
          <div className={styles.address}>
            House 168/170, Avenue 01, Mirpur DOHS, Dhaka Bangladesh
          </div>
        </div>

        <div className={styles.col}>
          <div className={styles.heading}>We Are Here</div>
          <p className={styles.text}>
            Quisque purus augue, facilisis andi neque idont accumsan fringilla massa. Vivamusol id nibhom
            condimentum.
          </p>
          <div className={styles.heading}>Payment Partner</div>
          <div className={styles.payments}>
            <img src="/assets/destinations/visa-logo.svg" alt="Visa" />
            <img src="/assets/destinations/stripe-logo.svg" alt="Stripe" />
            <img src="/assets/destinations/paypal-logo.svg" alt="PayPal" />
            <img src="/assets/destinations/woo-logo.svg" alt="Woo" />
            <img src="/assets/destinations/skrill-logo.svg" alt="Skrill" />
          </div>
        </div>
      </div>
    </div>

    <div className={styles.bottom}>
      <div className={styles.socialRow}>
        <a href="#" className={styles.socialIcon} />
        <a href="#" className={styles.socialIcon} />
        <a href="#" className={styles.socialIcon} />
        <a href="#" className={styles.socialIcon} />
      </div>
      <div className={styles.copyRow}>
        <span>
          ©Copyright 2024 Empirical Tours | Design By @Shawon3{" "}
          <a href="#" className={styles.brandLink}>
            Empirical
          </a>
        </span>
      </div>
      <div className={styles.legalRow}>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms &amp; Condition</a>
        <span className={styles.dot} />
      </div>
    </div>
  </footer>
);


