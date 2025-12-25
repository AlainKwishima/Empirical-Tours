import React from "react";
import styles from "./AboutPage.module.css";
import { SectionTag } from "../../components/SectionTag";
import { Button } from "../../components/Button";
import { StatBar } from "../../components/StatBar";
import { ActivityTabs } from "../../components/ActivityTabs";
import { ArticleCard } from "../../components/ArticleCard";
import { IconButton } from "../../components/IconButton";
import { Footer } from "../../components/Footer";

const heroBreadcrumb = ["Home", "About"];

const stats = [
  { value: "0k+", label: "Happy Traveler", icon: "/assets/about/icon-traveler.svg" },
  { value: "0k+", label: "Tours Success", icon: "/assets/about/icon-tours.svg" },
  { value: "0%", label: "Positives Review", icon: "/assets/about/icon-review.svg" }
];

const whyCards = [
  {
    title: "Worldwide Coverage",
    copy: "Curabitur convallis enim atnora ullamcorper sagittis.",
    bg: "#ddeed6",
    icon: "/assets/about/icon-world.svg"
  },
  {
    title: "Competitive Pricing",
    copy: "Burabitur convallis enim atnora. Morbi nug scelerisque for thana.",
    bg: "#feeed5",
    icon: "/assets/about/icon-price.svg"
  },
  {
    title: "Fast Booking",
    copy: "Fermentum eitorx quis maximum Etiam urnan posuere convallis.",
    bg: "#f5f5d3",
    icon: "/assets/about/icon-fast.svg"
  },
  {
    title: "Guided Tours",
    copy: "Pellentesque venenatis egestasoi diam Proin velgorat elit porttitor metus convallis.",
    bg: "#ddeed6",
    icon: "/assets/about/icon-guide.svg"
  },
  {
    title: "Best Support 24/7",
    copy: "Sed venenatis mauris nec nulla euismod, accounv varius lectus viverra oncen.",
    bg: "#f5f5d3",
    icon: "/assets/about/icon-support.svg"
  },
  {
    title: "Ultimate Flexibility",
    copy: "Duis leo sapien, lacinia utorrent efficitur utom suscipit quis nulla Sed auctor eu",
    bg: "#feeed5",
    icon: "/assets/about/icon-flex.svg"
  }
];

const activities = [
  {
    id: "zip",
    title: "Zip lining",
    bgColor: "#fbb03b",
    contentTitle: "Thrill Above Ground: The Zip Line Adventure",
    description:
      "Embark on an adrenaline-fueled journey, zipping through lush landscapes, feeling the wind rush past, and experiencing nature from breathtaking heights. Unleash your inner adventurer today.",
    bullets: ["Treetop Views", "Adrenaline Rush", "Safety Measures", "Nature Immersion"]
  },
  {
    id: "bungee",
    title: "Bungee Jumping",
    bgColor: "#ddeed6",
    contentTitle: "Bungee Jumping",
    description: "Leap into excitement with our secured bungee experiences.",
    bullets: ["Expert Crew", "Premium Gear", "Panoramic Views", "Certified Rigs"]
  },
  {
    id: "rafting",
    title: "Rafting",
    bgColor: "#ddeed6",
    contentTitle: "Rafting",
    description: "Navigate thrilling rapids guided by seasoned pros.",
    bullets: ["Class III-IV Rapids", "Safety Boats", "Team Briefings", "All Gear Included"]
  },
  {
    id: "paragliding",
    title: "Paragliding",
    bgColor: "#ddeed6",
    contentTitle: "Paragliding",
    description: "Soar over breathtaking landscapes with trained pilots.",
    bullets: ["Thermal Flights", "HD Footage", "Tandem Certified", "Weather-Fit Slots"]
  },
  {
    id: "ski",
    title: "Ski Touring",
    bgColor: "#ddeed6",
    contentTitle: "Ski Touring",
    description: "Backcountry lines guided by avalanche-certified leaders.",
    bullets: ["Beacon & Probe", "Skin Tracks", "Small Groups", "Powder Focus"]
  }
];

const guides = [
  { name: "Mateo Daniel", role: "Tour Guide", photo: "/assets/about/Te-01.webp" },
  { name: "Elias Josiah", role: "Tour Guide", photo: "/assets/about/Te-02.webp" },
  { name: "Miles Jaxon", role: "Tour Guide", photo: "/assets/about/Te-03.webp" },
  { name: "Silas Nicholas", role: "Tour Guide", photo: "/assets/about/Te-04.webp" }
];

const articles = [
  {
    image: "/assets/about/T1.webp",
    day: "6",
    month: "Feb",
    category: "Cruise Voyage",
    title: "Spiritual Sojourn: Pilgrimage Tours for Soul Seekers",
    author: "Shafiqul",
    readTime: "1 Min Read"
  },
  {
    image: "/assets/about/T2.webp",
    day: "6",
    month: "Feb",
    category: "Adventure Safari",
    title: "Wine Country Escapes: Vineyard Tours for Connoisseurs",
    author: "Shafiqul",
    readTime: "1 Min Read"
  }
];

const navMap: Record<string, string> = {
  Home: "about",
  About: "about",
  Tours: "tours",
  Destination: "destinations",
  Pages: "faq",
  Contact: "contact"
};

export const AboutPage: React.FC<{ currentPage?: string; onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.navLeft}>
          <img src="/assets/about/logo.svg" alt="Empirical Tours logo" className={styles.logo} />
        </div>
        <nav className={styles.navMenu}>
          {["Home", "About", "Tours", "Destination", "Pages", "Contact"].map((item, idx) => (
            <a
              key={item}
              className={`${styles.navItem} ${item === "Home" ? styles.activeNav : ""}`}
              href="#"
              style={{ "--delay": `${idx * 40}ms` } as React.CSSProperties}
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
          <h1>About</h1>
          <div className={styles.breadcrumb}>
            {heroBreadcrumb.map((item, idx) => (
              <span key={item}>
                {idx > 0 && <img src="/assets/about/arrow.svg" alt="" />}
                <a href="#">{item}</a>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.aboutIntro}`}>
        <div className={styles.container}>
          <div className={styles.aboutLeft}>
            <div className={styles.planeWrap}>
              <img src="/assets/about/plane-vector.svg" alt="" />
            </div>
            <div className={styles.mainImage}>
              <img src="/assets/about/home2-about-img1.webp" alt="" />
              <div className={styles.imageOverlay} />
              <div className={styles.experience}>
                <div className={styles.expYears}>05</div>
                <div className={styles.expLabel}>Years of{"\n"}experience</div>
              </div>
            </div>
          </div>
          <div className={styles.aboutRight}>
            <SectionTag text="About Us" />
            <h2>We provide the best tour facilities.</h2>
            <p className={styles.lead}>
              Etiam ac tortor id purus commodo vulputate. Vestibulum porttitor erat felis and sed vehicula
              tortor malesuada gravida. Mauris volutpat enim quis pulv gont congue. Suspendisse ullamcorper.
            </p>
            <div className={styles.features}>
              <div className={styles.featureCard} data-tone="green">
                <div className={styles.featureIcon} />
                <div className={styles.featureText}>
                  <div className={styles.featureTitle}>Safety First Always</div>
                </div>
              </div>
              <div className={styles.featureCard} data-tone="orange">
                <div className={styles.featureIcon} />
                <div className={styles.featureText}>
                  <div className={styles.featureTitle}>Trusted Travel Guide</div>
                </div>
              </div>
              <div className={styles.featureCard} data-tone="orange">
                <div className={styles.featureIcon} />
                <div className={styles.featureText}>
                  <div className={styles.featureTitle}>Expertise And Experience</div>
                </div>
              </div>
              <div className={styles.featureCard} data-tone="green">
                <div className={styles.featureIcon} />
                <div className={styles.featureText}>
                  <div className={styles.featureTitle}>Time and Stress Savings</div>
                </div>
              </div>
            </div>
            <div className={styles.ctaRow}>
              <Button>Find Out More</Button>
              <div className={styles.watch}>
                <IconButton>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                    <path d="M8 5v14l11-7-11-7z" fill="#63ab45" />
                  </svg>
                </IconButton>
                <span>Watch Tour</span>
              </div>
            </div>
            <div className={styles.ratingRow}>
              <div className={styles.ratingText}>Excellent!</div>
              <div className={styles.stars}>★★★★★</div>
              <div className={styles.ratingMeta}>5.0 Rating out of 5.0 based on </div>
              <a className={styles.reviewCount} href="#">
                245354 reviews
              </a>
              <img className={styles.tripadvisor} src="/assets/about/tripadvisor-logo.svg" alt="Tripadvisor" />
            </div>
            <StatBar stats={stats} />
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.why}`}>
        <div className={styles.container}>
          <img src="/assets/about/section-vector4.png" alt="" className={styles.whyVector} />
          <div className={styles.sectionHeader}>
            <SectionTag text="Who We Are" />
            <h2>Why Empirical Is the Best</h2>
          </div>
          <div className={styles.whyGrid}>
            {whyCards.map((card) => (
              <div key={card.title} className={styles.whyCard}>
                <div className={styles.cardIcon} style={{ background: card.bg }}>
                  <img src={card.icon} alt="" />
                </div>
                <div className={styles.cardTitle}>{card.title}</div>
                <div className={styles.cardCopy}>{card.copy}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.banner}`}>
        <div className={styles.container}>
          <div className={styles.bannerInner}>
            <div className={styles.bannerBadge}>Savings worldwide</div>
            <div className={styles.bannerHeading}>20% Off</div>
            <div className={styles.bannerSub}>Discover Great Deal</div>
            <Button className={styles.bannerBtn}>View This Trip</Button>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.packageSection}`}>
        <div className={styles.container}>
          <div className={styles.package}>
            <div className={styles.packageImage}>
              <div className={styles.popularTag}>Popular</div>
            </div>
            <div className={styles.packageBody}>
              <div className={styles.packageRating}>★★★★★ (0)</div>
              <h3 className={styles.packageTitle}>Discover Serenity, Exploration, and Enlightenment.</h3>
              <div className={styles.packageMeta}>
                <span>1 Week</span>
                <span>4 Location</span>
                <span>1 Countries</span>
              </div>
              <div className={styles.packageFooter}>
                <div>
                  <div className={styles.starting}>Starting From:</div>
                  <div className={styles.priceRow}>
                    <span className={styles.price}>$340</span>
                    <span className={styles.oldPrice}>$450</span>
                  </div>
                </div>
                <Button className={styles.packageBtn}>View All Package</Button>
              </div>
            </div>
          </div>
          <div className={styles.sliderNav}>
            <div className={styles.sliderPrev}>
              <span className={styles.sliderIcon} />
              PREV
            </div>
            <div className={styles.sliderNext}>
              NEXT
              <span className={styles.sliderIcon} />
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.activities}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <SectionTag text="What We Do" />
            <h2>Our Particular Activities</h2>
          </div>
          <div className={styles.activitiesInner}>
            <div className={styles.activitiesImage} />
            <div className={styles.activitiesContent}>
              <ActivityTabs tabs={activities} />
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.guides}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <SectionTag text="Tour Guide" />
            <h2>Our Travel Guide</h2>
          </div>
          <div className={styles.guidesGrid}>
            {guides.map((g) => (
              <div key={g.name} className={styles.guideCard}>
                <div className={styles.guideBg} />
                <img className={styles.guidePhoto} src={g.photo} alt={g.name} />
                <div className={styles.guideInfo}>
                  <div className={styles.guideName}>{g.name}</div>
                  <div className={styles.guideRole}>{g.role}</div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.sliderNav}>
            <div className={styles.sliderPrev}>
              <span className={styles.sliderIcon} />
              PREV
            </div>
            <div className={styles.sliderNext}>
              NEXT
              <span className={styles.sliderIcon} />
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.articles}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <SectionTag text="Article" />
            <h2>Travel Article Enthusiast</h2>
          </div>
          <div className={styles.articleGrid}>
            {articles.map((article) => (
              <ArticleCard key={article.title} {...article} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

