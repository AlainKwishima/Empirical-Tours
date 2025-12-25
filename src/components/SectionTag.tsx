import React from "react";
import styles from "./SectionTag.module.css";

type SectionTagProps = {
  text: string;
  color?: "green" | "orange";
};

export const SectionTag: React.FC<SectionTagProps> = ({ text, color = "green" }) => (
  <div className={`${styles.tag} ${styles[color]}`}>
    <img src="/assets/about/section-title-tag.svg" aria-hidden />
    <span>{text}</span>
  </div>
);



