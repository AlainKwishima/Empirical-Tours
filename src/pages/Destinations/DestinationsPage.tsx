import React from "react";
import styles from "./DestinationsPage.module.css";
import { Button } from "../../components/Button";

type DestinationCard = {
  image: string;
  tours: string;
  country: string;
};

const destinations: DestinationCard[] = [
  { image: "/assets/destinations/Destination-02.webp", tours: "4 Tour", country: "Sweden" },
  { image: "/assets/destinations/Destination-05.webp", tours: "2 Tour", country: "Japan" },
  { image: "/assets/destinations/Destination-09.webp", tours: "1 Tour", country: "India" },
  { image: "/assets/destinations/Destination-08.webp", tours: "1 Tour", country: "Brazil" },
  { image: "/assets/destinations/Destination-06.webp", tours: "1 Tour", country: "Australia" },
  { image: "/assets/destinations/Destination-04.webp", tours: "0 Tour", country: "Spain" },
  { image: "/assets/destinations/Destination-01.webp", tours: "1 Tour", country: "Italy" },
  { image: "/assets/destinations/Destination-07.webp", tours: "1 Tour", country: "Indonesia" }
];

const Newsletter: React.FC = () => (
  <section className={styles.newsletter}>
    <div className={styles.newsBgLeft} />
    <div className={styles.newsBgRight} />
    <div className={styles.newsContent}>
      <h3>Join The Newsletter</h3>
      <p>To receive our best monthly deals</p>
      <form className={styles.newsForm}>
        <input placeholder="Enter your email address..." />
        <button type="button" aria-label="Submit email">
          <span className={styles.sendIcon} />
        </button>
      </form>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.footerOverlay} />
    <div className={styles.footerContainer}>
      <div className={styles.footerBrand}>
        <img src="/assets/about/logo.svg" alt="Empirical Tours logo" className={styles.footerLogo} />
        <h3>Want to Take Tour Packages?</h3>
        <Button className={styles.footerCta}>Book A Tour</Button>
      </div>
      <div className={styles.footerLinks}>
        <div className={styles.footerCol}>
          <div className={styles.footerHeading}>Quick Link</div>
          <div className={styles.footerList}>
            {["About Us", "Destinations", "Tour Package", "Article", "Contact Us"].map((item) => (
              <a key={item} href="#">
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className={styles.footerCol}>
          <div className={styles.footerHeading}>More Inquiry</div>
          <div className={styles.footerContact}>
            <span className={styles.footerIcon} />
            <a href="tel:+999858624984">+999-858 624 984</a>
          </div>
          <div className={styles.footerHeading}>Send Mail</div>
          <div className={styles.footerContact}>
            <span className={styles.footerIcon} />
            <a href="mailto:info@example.com">info@example.com</a>
          </div>
          <div className={styles.footerHeading}>Address</div>
          <div className={styles.footerAddress}>
            House 168/170, Avenue 01, Mirpur DOHS, Dhaka Bangladesh
          </div>
        </div>
        <div className={styles.footerCol}>
          <div className={styles.footerHeading}>We Are Here</div>
          <p className={styles.footerText}>
            Quisque purus augue, facilisis andi neque idont accumsan fringilla massa. Vivamusol id nibhom
            condimentum.
          </p>
          <div className={styles.footerHeading}>Payment Partner</div>
          <div className={styles.paymentRow}>
            <img src="/assets/destinations/visa-logo.svg" alt="Visa" />
            <img src="/assets/destinations/stripe-logo.svg" alt="Stripe" />
            <img src="/assets/destinations/paypal-logo.svg" alt="Paypal" />
            <img src="/assets/destinations/woo-logo.svg" alt="Woo" />
            <img src="/assets/destinations/skrill-logo.svg" alt="Skrill" />
          </div>
        </div>
      </div>
    </div>
    <div className={styles.footerBottom}>
      <div className={styles.socialRow}>
        <a className={styles.socialIcon} href="#" aria-label="Facebook" />
        <a className={styles.socialIcon} href="#" aria-label="Twitter" />
        <a className={styles.socialIcon} href="#" aria-label="LinkedIn" />
        <a className={styles.socialIcon} href="#" aria-label="Instagram" />
      </div>
      <div className={styles.copy}>
        ©Copyright 2024 Empirical Tours | Design By @Shawon3
        <a className={styles.copyBrand} href="#">
          Empirical
        </a>
      </div>
      <div className={styles.legalRow}>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Condition</a>
        <span className={styles.dot} />
      </div>
    </div>
  </footer>
);

const navMap: Record<string, string> = {
  Home: "about",
  About: "about",
  Tours: "tours",
  Destination: "destinations",
  Pages: "faq",
  Contact: "contact"
};

export const DestinationsPage: React.FC<{ currentPage?: string; onNavigate?: (page: string) => void }> = ({
  onNavigate
}) => {
  return (
    <div className={styles.page}>
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
          <h1>Destination</h1>
          <div className={styles.breadcrumb}>
            <a className={styles.breadcrumbHome} href="#">
              Home
            </a>
            <img src="/assets/about/arrow.svg" alt="" />
            <span>Destination</span>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {destinations.map((dest) => (
              <article key={dest.country} className={styles.card}>
                <img src={dest.image} alt={dest.country} className={styles.cardImg} />
                <div className={styles.cardGradient} />
                <div className={styles.tourBadge}>{dest.tours}</div>
                <div className={styles.travelTo}>Travel To</div>
                <div className={styles.country}>{dest.country}</div>
              </article>
            ))}
          </div>
          <div className={styles.pagination}>
            <a className={styles.pageNumber} href="#">
              01
            </a>
            <a className={styles.pageNumberMuted} href="#">
              02
            </a>
            <button className={styles.pageArrow} aria-label="Next page">
              <span />
            </button>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

