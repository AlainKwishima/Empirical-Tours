import React from "react";
import styles from "./BlogPage.module.css";
import { Button } from "../../components/Button";

type Post = {
  image: string;
  dateDay: string;
  dateMonth: string;
  views: string;
  readTime: string;
  comments: string;
  title: string;
  excerpt: string;
};

const posts: Post[] = [
  {
    image: "/assets/blog/T1.webp",
    dateDay: "06",
    dateMonth: "February",
    views: "287 Views",
    readTime: "1 Min Read",
    comments: "(0) Comment",
    title: "Spiritual Sojourn: Pilgrimage Tours for Soul Seekers",
    excerpt:
      "NSuspendisse bibendum efficitur orci, a pretium erat mattis nec. Vestibulum antema ypsumi primisot inaetahsjanl faucibus orci luctus etenjot ultrices posuere cubilia andt. Vestibulum quis odio ut dui malesuada ornare ut…"
  },
  {
    image: "/assets/blog/T2.webp",
    dateDay: "06",
    dateMonth: "February",
    views: "260 Views",
    readTime: "1 Min Read",
    comments: "(0) Comment",
    title: "Wine Country Escapes: Vineyard Tours for Connoisseurs",
    excerpt:
      "NSuspendisse bibendum efficitur orci, a pretium erat mattis nec. Vestibulum antema ypsumi primisot inaetahsjanl faucibus orci luctus etenjot ultrices posuere cubilia andt. Vestibulum quis odio ut dui malesuada ornare ut…"
  },
  {
    image: "/assets/blog/T3.webp",
    dateDay: "06",
    dateMonth: "February",
    views: "211 Views",
    readTime: "1 Min Read",
    comments: "(0) Comment",
    title: "Thrills & Chills: Extreme Sports Tours for Adrenaline Junkies",
    excerpt:
      "NSuspendisse bibendum efficitur orci, a pretium erat mattis nec. Vestibulum antema ypsumi primisot inaetahsjanl faucibus orci luctus etenjot ultrices posuere cubilia andt. Vestibulum quis odio ut dui malesuada ornare ut…"
  },
  {
    image: "/assets/blog/T4.webp",
    dateDay: "06",
    dateMonth: "February",
    views: "205 Views",
    readTime: "1 Min Read",
    comments: "(0) Comment",
    title: "Urban Wanderlust: City Walking Tours for Street Savvy",
    excerpt:
      "NSuspendisse bibendum efficitur orci, a pretium erat mattis nec. Vestibulum antema ypsumi primisot inaetahsjanl faucibus orci luctus etenjot ultrices posuere cubilia andt. Vestibulum quis odio ut dui malesuada ornare ut…"
  },
  {
    image: "/assets/blog/T5.webp",
    dateDay: "06",
    dateMonth: "February",
    views: "159 Views",
    readTime: "1 Min Read",
    comments: "(0) Comment",
    title: "Sailing Serenity: Seaside Escapes on Luxury Yacht Tours",
    excerpt:
      "NSuspendisse bibendum efficitur orci, a pretium erat mattis nec. Vestibulum antema ypsumi primisot inaetahsjanl faucibus orci luctus etenjot ultrices posuere cubilia andt. Vestibulum quis odio ut dui malesuada ornare ut…"
  },
  {
    image: "/assets/blog/T6.webp",
    dateDay: "06",
    dateMonth: "February",
    views: "169 Views",
    readTime: "1 Min Read",
    comments: "(0) Comment",
    title: "Historic Odyssey: Immersive Cultural Tours Through Time",
    excerpt:
      "NSuspendisse bibendum efficitur orci, a pretium erat mattis nec. Vestibulum antema ypsumi primisot inaetahsjanl faucibus orci luctus etenjot ultrices posuere cubilia andt. Vestibulum quis odio ut dui malesuada ornare ut…"
  }
];

const categories = [
  { name: "Adventure Safari", count: "(3)" },
  { name: "City Discovery", count: "(3)" },
  { name: "Cruise Voyage", count: "(5)" },
  { name: "Cultural Exploration", count: "(4)" },
  { name: "Educational Journey", count: "(5)" },
  { name: "Luxury Retreat", count: "(7)" },
  { name: "Nature Excursion", count: "(7)" },
  { name: "Photography Expedition", count: "(2)" }
];

const recentPosts = [
  {
    thumb: "/assets/blog/T1-150x150.webp",
    date: "06 February, 2024",
    title: "Spiritual Sojourn: Pilgrimage Tours for Soul Seekers"
  },
  {
    thumb: "/assets/blog/T2-150x150.webp",
    date: "06 February, 2024",
    title: "Wine Country Escapes: Vineyard Tours for Connoisseurs"
  },
  {
    thumb: "/assets/blog/T3-150x150.webp",
    date: "06 February, 2024",
    title: "Thrills & Chills: Extreme Sports Tours for Adrenaline Junkies"
  }
];

const tags = [
  "Adventure",
  "City Tour",
  "Cruise",
  "Cultural",
  "Nature Excursion",
  "Photography",
  "Road Trip",
  "Tourism",
  "Wildlife"
];

const Sidebar: React.FC = () => (
  <aside className={styles.sidebar}>
    <div className={styles.widget}>
      <div className={styles.widgetTitle}>Search Here</div>
      <div className={styles.search}>
        <input placeholder="Search Here" />
        <button aria-label="Search">
          <span className={styles.searchIcon} />
        </button>
      </div>
    </div>

    <div className={styles.widget}>
      <div className={styles.widgetTitle}>Categories</div>
      <div className={styles.categoryList}>
        {categories.map((c) => (
          <div key={c.name} className={styles.categoryItem}>
            <span className={styles.checkbox} />
            <a href="#">{c.name}</a>
            <span className={styles.catCount}>{c.count}</span>
          </div>
        ))}
      </div>
    </div>

    <div className={styles.widget}>
      <div className={styles.widgetTitle}>Recent Post</div>
      <div className={styles.recentList}>
        {recentPosts.map((r) => (
          <div key={r.title} className={styles.recentItem}>
            <img src={r.thumb} alt="" />
            <div>
              <div className={styles.recentDate}>{r.date}</div>
              <a className={styles.recentTitle} href="#">
                {r.title}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className={styles.widget}>
      <div className={styles.widgetTitle}>Tags</div>
      <div className={styles.tags}>
        {tags.map((t) => (
          <a key={t} className={styles.tag} href="#">
            {t}
          </a>
        ))}
      </div>
    </div>
  </aside>
);

const navMap: Record<string, string> = {
  Home: "about",
  About: "about",
  Tours: "tours",
  Destination: "destinations",
  Pages: "blog",
  Contact: "contact"
};

export const BlogPage: React.FC<{ currentPage?: string; onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
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
          <h1>Blog</h1>
          <div className={styles.breadcrumb}>
            <a className={styles.breadcrumbHome} href="#">
              Home
            </a>
            <img src="/assets/about/arrow.svg" alt="" />
            <span>Blog Standard</span>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.layout}>
            <div className={styles.posts}>
              {posts.map((post) => (
                <article key={post.title} className={styles.post}>
                  <div className={styles.postMedia}>
                    <img src={post.image} alt="" />
                    <div className={styles.dateBadge}>
                      <div className={styles.dateDay}>{post.dateDay}</div>
                      <div className={styles.dateMonth}>{post.dateMonth}</div>
                    </div>
                  </div>
                  <div className={styles.metaRow}>
                    <span className={styles.metaItem}>{post.views}</span>
                    <span className={styles.metaItem}>{post.readTime}</span>
                    <span className={styles.metaItem}>{post.comments}</span>
                  </div>
                    <h2>{post.title}</h2>
                  <p className={styles.excerpt}>{post.excerpt}</p>
                  <div className={styles.postFooter}>
                    <a className={styles.viewPost} href="#">
                      View Post
                    </a>
                    <span className={styles.viewIcon} />
                  </div>
                </article>
              ))}
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
            <Sidebar />
          </div>
        </div>
      </section>
    </div>
  );
};

