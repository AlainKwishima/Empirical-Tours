import React from "react";
import styles from "./ContactPage.module.css";
import { Newsletter } from "../../components/Newsletter";
import { Footer } from "../../components/Footer";

const navMap: Record<string, string> = {
  Home: "about",
  About: "about",
  Tours: "tours",
  Destination: "destinations",
  Pages: "faq",
  Contact: "contact"
};

export const ContactPage: React.FC<{ currentPage?: string; onNavigate?: (page: string) => void }> = ({
  onNavigate
}) => {
  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <div className={styles.topBarLeft}>
          <span className={styles.topPromo}>50% Off Your Next Trip. Hurry Up For your new Tour!</span>
          <a className={styles.topLink} href="#">
            Book Your Tour
          </a>
        </div>
        <div className={styles.topBarRight}>
          <div className={styles.topEmail}>
            <span className={styles.topEmailIcon} />
            <span className={styles.topEmailLabel}>Email:</span>
            <a href="mailto:info@example.com">info@example.com</a>
          </div>
          <div className={styles.topSocial}>
            <a href="#" className={styles.topSocialIcon} aria-label="Facebook" />
            <a href="#" className={styles.topSocialIcon} aria-label="Twitter" />
            <a href="#" className={styles.topSocialIcon} aria-label="LinkedIn" />
            <a href="#" className={styles.topSocialIcon} aria-label="Instagram" />
          </div>
        </div>
      </div>

      <header className={styles.header}>
        <div className={styles.navLeft}>
          <img src="/assets/about/logo.svg" alt="Empirical Tours logo" className={styles.logo} />
        </div>
        <nav className={styles.navMenu}>
          {["Home", "About", "Tours", "Destination", "Pages", "Contact"].map((item) => (
            <a
              key={item}
              className={`${styles.navItem} ${item === "Home" ? styles.activeNav : ""}`}
              href="#"
              onClick={(e) => {
                if (!onNavigate) return;
                e.preventDefault();
                const target = navMap[item];
                if (target) {
                  onNavigate(target);
                }
              }}
            >
              {item}
            </a>
          ))}
        </nav>
        <div className={styles.navContact}>
          <div className={styles.navPhoneLabel}>To More Inquiry</div>
          <a className={styles.navPhone} href="tel:+990737621432">
            +990-737 621 432
          </a>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <img className={styles.heroBg} src="/assets/about/home2-about-bg-vector.svg" alt="" />
        <div className={styles.heroContent}>
          <h1>Contact</h1>
          <div className={styles.breadcrumb}>
            <a className={styles.breadcrumbHome} href="#">
              Home
            </a>
            <img src="/assets/about/arrow.svg" alt="" />
            <span>Contact</span>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.infoLayout}>
            <div className={styles.infoCard}>
              <div className={styles.infoLabel}>Phone</div>
              <div className={styles.infoRow}>
                <div className={styles.infoIcon} />
                <div>
                  <a href="tel:+990737621432">+990-737 621 432</a>
                  <a href="tel:+990137324465">+990-137 324 465</a>
                </div>
              </div>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoLabel}>Email Now</div>
              <div className={styles.infoRow}>
                <div className={styles.infoIcon} />
                <div>
                  <a href="mailto:info@example.com">info@example.com</a>
                  <a href="mailto:example@example.com">example@example.com</a>
                </div>
              </div>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoLabel}>Location</div>
              <div className={styles.infoRow}>
                <div className={styles.infoIcon} />
                <div>
                  168/170, Avenue 01, Old York Drive Rich Mirpur DOHS, Bangladesh
                </div>
              </div>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoLabel}>Opening Time</div>
              <div className={styles.infoRow}>
                <div className={styles.infoIcon} />
                <div>8:00Am - 10:Pm, Friday Close</div>
              </div>
            </div>
          </div>

          <div className={styles.formLayout}>
            <div className={styles.formCard}>
              <h3>Reach Us Anytime</h3>
              <label className={styles.field}>
                <span>Name*</span>
                <input placeholder="Daniel Scoot" />
              </label>
              <div className={styles.fieldRow}>
                <label className={styles.field}>
                  <span>Phone*</span>
                  <input placeholder="Phone Number" />
                </label>
                <label className={styles.field}>
                  <span>Email*</span>
                  <input placeholder="Email Us...." />
                </label>
              </div>
              <label className={styles.field}>
                <span>Write Your Massage*</span>
                <textarea />
              </label>
              <button className={styles.submitBtn}>Submit Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.mapSection}>
        <div className={styles.mapWrapper}>
          <img src="/assets/contact/map-placeholder.png" alt="Map" className={styles.mapImg} />
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};
