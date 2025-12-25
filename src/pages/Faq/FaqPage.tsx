import React from "react";
import styles from "./FaqPage.module.css";
import { Newsletter } from "../../components/Newsletter";
import { Footer } from "../../components/Footer";
type FaqItem = { id: string; question: string; answer?: string; section: "general" | "travel"; expanded?: boolean };

const faqs: FaqItem[] = [
  {
    id: "g1",
    section: "general",
    expanded: true,
    question: "01. How do I book a trip on your website?",
    answer:
      "Aptent taciti sociosqu ad litora torquent per conubia nostra, per inci only Integer purus onthis felis non aliquam.Mauris nec just vitae ann auctor tol euismod sit amet non ipsul growing this"
  },
  {
    id: "g2",
    section: "general",
    question: "02. What payment methods do you accept?"
  },
  {
    id: "g3",
    section: "general",
    question: "03. Can I make changes to my reservation after booking?"
  },
  {
    id: "g4",
    section: "general",
    question: "04. What is your cancellation policy?"
  },
  {
    id: "g5",
    section: "general",
    question: "05. Do You Offer Group Booking Discounts?"
  },
  {
    id: "t1",
    section: "travel",
    expanded: true,
    question: "01. What Is Your Payment Schedule And Process?",
    answer:
      "Aptent taciti sociosqu ad litora torquent per conubia nostra, per inci only Integer purus onthis felis non aliquam.Mauris nec just vitae ann auctor tol euismod sit amet non ipsul growing this"
  },
  {
    id: "t2",
    section: "travel",
    question: "02. Are There Any Additional Fees Or Surcharges?"
  },
  {
    id: "t3",
    section: "travel",
    question: "03. Can I Transfer My Reservation To Another Person?"
  },
  {
    id: "t4",
    section: "travel",
    question: "04. Can I Request A Private Tour For My Group?"
  },
  {
    id: "t5",
    section: "travel",
    question: "05. Do You Offer Special Rates For Group Bookings?"
  }
];

const FaqGroup: React.FC<{ title: string; items: FaqItem[] }> = ({ title, items }) => (
  <div className={styles.faqGroup}>
    <div className={styles.groupHeader}>
      <h3>{title}</h3>
      <span className={styles.groupIcon} />
    </div>
    {items.map((item) => (
      <div key={item.id} className={styles.faqItem}>
        <button className={styles.faqQuestion}>
          <span>{item.question}</span>
          <span className={styles.toggleIcon}>{item.expanded ? "-" : "+"}</span>
        </button>
        {item.expanded && item.answer && <p className={styles.faqAnswer}>{item.answer}</p>}
      </div>
    ))}
  </div>
);

const navMap: Record<string, string> = {
  Home: "about",
  About: "about",
  Tours: "tours",
  Destination: "destinations",
  Pages: "faq",
  Contact: "contact"
};

export const FaqPage: React.FC<{ currentPage?: string; onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  const general = faqs.filter((f) => f.section === "general");
  const travel = faqs.filter((f) => f.section === "travel");

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.navLeft}>
          <img src="/assets/about/logo.svg" alt="TripNest logo" className={styles.logo} />
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
          <h1>Q&amp;A</h1>
          <div className={styles.breadcrumb}>
            <a className={styles.breadcrumbHome} href="#">
              Home
            </a>
            <img src="/assets/about/arrow.svg" alt="" />
            <span>Faqs</span>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.layout}>
            <div className={styles.promo}>
              <div className={styles.promoInner}>
                <img src="/assets/faq/banner2-card-img2.webp" alt="" className={styles.promoImg} />
                <div className={styles.promoOverlay} />
                <div className={styles.promoBorder} />
                <div className={styles.promoContentBg}>
                  <img src="/assets/faq/banner2-content-bg4.svg" alt="" />
                </div>
                <div className={styles.promoContent}>
                  <div className={styles.promoTag}>Savings worldwide</div>
                  <div className={styles.promoHeading}>50% Off</div>
                  <div className={styles.promoSub}>For Your First Book</div>
                  <button className={styles.promoBtn}>Book Now</button>
                </div>
              </div>
            </div>
            <div className={styles.faqs}>
              <FaqGroup title="General" items={general} />
              <FaqGroup title="Travel Tips" items={travel} />
            </div>
          </div>
          </div>
        </section>

        <Newsletter />
        <Footer />
      </div>
    );
  };
  
