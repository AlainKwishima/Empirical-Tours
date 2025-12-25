import React from "react";
import styles from "./ToursPage.module.css";
import { SectionTag } from "../../components/SectionTag";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

type TourCard = {
  image: string;
  duration: string;
  country: string;
  title: string;
  locations: string[];
  price: string;
  oldPrice: string;
  taxes: string;
};

const tours: TourCard[] = [
  {
    image: "/assets/tours/Tour-Package-10-650x450.webp",
    duration: "1 Week",
    country: "Egypt",
    title: "Discover Serenity, Exploration, and Enlightenment.",
    locations: ["Saint Martin", "Khagrachori", "Cox’s Bazar", "Bandar ban"],
    price: "$340",
    oldPrice: "$450",
    taxes: "TAXES INCL/PERS"
  },
  {
    image: "/assets/tours/Tour-Package-12-650x450.webp",
    duration: "3 Days / 4 Night",
    country: "Indonesia",
    title: "Embracing City Lights, Landm, And Iconic Culture.",
    locations: ["Bandar ban", "Cox’s Bazar", "Saint Martin", "Sea Beach"],
    price: "$240",
    oldPrice: "$380",
    taxes: "TAXES INCL/PERS"
  },
  {
    image: "/assets/tours/Tour-Package-05-650x450.webp",
    duration: "10 Days / 11 Night",
    country: "New York",
    title: "Immersive Cultural Expirees, Local Cuisine.",
    locations: ["Sajek Vally", "Sea Beach", "Bandar ban", "Cox’s Bazar"],
    price: "$500",
    oldPrice: "$580",
    taxes: "TAXES INCL/PERS"
  },
  {
    image: "/assets/tours/Tour-Package-06-650x450.webp",
    duration: "4 Days / 5 Night",
    country: "Saudi Arab",
    title: "Exploring Ancient Ruins, Histor Landmarks, And Cultural.",
    locations: ["Bandar ban", "Cox’s Bazar", "Khagrachori", "Saint Martin"],
    price: "$760",
    oldPrice: "$800",
    taxes: "TAXES INCL/PERS"
  },
  {
    image: "/assets/tours/Tour-Package-07-650x450.webp",
    duration: "4 Days / 5 Night",
    country: "Brazil, Sweden, Egypt",
    title: "Adventure Art, Architecture, And Mediterranean.",
    locations: ["Sajek Vally", "Sea Beach", "Bandar ban", "Khagrachori"],
    price: "$170",
    oldPrice: "$220",
    taxes: "TAXES INCL/PERS"
  },
  {
    image: "/assets/tours/Tour-Package-09-650x450.webp",
    duration: "7 Days / 8 Night",
    country: "Australia, Sweden",
    title: "A Journey Of Tour Beauty And Inspiration.",
    locations: ["Bandar ban", "Cox’s Bazar", "Khagrachori", "Saint Martin"],
    price: "$160",
    oldPrice: "$180",
    taxes: "TAXES INCL/PERS"
  },
  {
    image: "/assets/tours/Tour-Package-10-650x450.webp",
    duration: "5 Days / 6 Night",
    country: "New York, Sweden",
    title: "Exploring Energy, Landmarks, and Timeless Traditions.",
    locations: ["Sajek Vally", "Sea Beach", "Saint Martin", "Cox’s Bazar"],
    price: "$460",
    oldPrice: "$670",
    taxes: "TAXES INCL/PERS"
  },
  {
    image: "/assets/tours/Tour-Package-11-650x450.webp",
    duration: "4 Days / 5 Night",
    country: "India",
    title: "Embark Tranquility, Adventure, And Spiritual.",
    locations: ["Sea Beach", "Sajek Vally", "Saint Martin", "Khagrachori"],
    price: "$480",
    oldPrice: "$650",
    taxes: "TAXES INCL/PERS"
  },
  {
    image: "/assets/tours/Tour-Package-12-650x450.webp",
    duration: "3 Days / 4 Night",
    country: "Egypt, Sweden, Brazil",
    title: "Embracing City Lights, Landm, And Iconic Culture.",
    locations: ["Brazil", "Sweden", "Egypt"],
    price: "$240",
    oldPrice: "$380",
    taxes: "TAXES INCL/PERS"
  }
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

const navMap: Record<string, string> = {
  Home: "about",
  About: "about",
  Tours: "tours",
  Destination: "destinations",
  Pages: "faq",
  Contact: "contact"
};

export const ToursPage: React.FC<{ currentPage?: string; onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
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
          <h1>Tour Grid</h1>
          <div className={styles.breadcrumb}>
            <a className={styles.breadcrumbHome} href="#">
              Home
            </a>
            <img src="/assets/about/arrow.svg" alt="" />
            <span>Package Grid</span>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {tours.map((tour, idx) => (
              <article key={`${tour.title}-${idx}`} className={styles.card}>
                <div className={styles.cardMedia}>
                  <img src={tour.image} alt="" />
                  <div className={styles.cardGradient} />
                  <div className={styles.duration}>{tour.duration}</div>
                  <div className={styles.country}>{tour.country}</div>
                </div>
                <div className={styles.cardBody}>
                  <h3>{tour.title}</h3>
                  <div className={styles.locations}>
                    {tour.locations.map((loc, i) => (
                      <span key={loc + i} className={styles.locationItem}>
                        {loc}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={styles.cardFooter}>
                  <div className={styles.priceBlock}>
                    <div className={styles.starting}>Starting From:</div>
                    <div className={styles.priceRow}>
                      <span className={styles.price}>{tour.price}</span>
                      <span className={styles.oldPrice}>{tour.oldPrice}</span>
                    </div>
                    <div className={styles.taxes}>{tour.taxes}</div>
                  </div>
                  <Button className={styles.bookBtn}>Book a Trip</Button>
                </div>
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

