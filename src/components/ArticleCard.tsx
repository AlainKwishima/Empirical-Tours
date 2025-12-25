import React from "react";
import styles from "./ArticleCard.module.css";

type ArticleCardProps = {
  image: string;
  day: string;
  month: string;
  category: string;
  title: string;
  author: string;
  readTime: string;
};

export const ArticleCard: React.FC<ArticleCardProps> = ({
  image,
  day,
  month,
  category,
  title,
  author,
  readTime
}) => (
  <article className={styles.card}>
    <div className={styles.media}>
      <img src={image} alt="" />
      <div className={styles.date}>
        <div className={styles.day}>{day}</div>
        <div className={styles.month}>{month}</div>
      </div>
    </div>
    <div className={styles.body}>
      <div className={styles.meta}>
        <span className={styles.by}>By {author}</span>
        <span className={styles.dot} />
        <span className={styles.cat}>{category}</span>
      </div>
      <h4>{title}</h4>
      <div className={styles.footer}>
        <button className={styles.linkBtn}>
          View Post
          <span className={styles.linkIcon} aria-hidden />
        </button>
        <div className={styles.read}>{readTime}</div>
      </div>
    </div>
  </article>
);



