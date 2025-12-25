import React from "react";
import styles from "./StatBar.module.css";

type Stat = { value: string; label: string; icon?: string };

export const StatBar: React.FC<{ stats: Stat[] }> = ({ stats }) => (
  <div className={styles.bar}>
    {stats.map((stat, index) => (
      <div key={stat.label} className={styles.stat}>
        {stat.icon ? <img src={stat.icon} alt="" className={styles.icon} /> : null}
        <div>
          <div className={styles.value}>{stat.value}</div>
          <div className={styles.label}>{stat.label}</div>
        </div>
        {index < stats.length - 1 && <span className={styles.divider} />}
      </div>
    ))}
  </div>
);



