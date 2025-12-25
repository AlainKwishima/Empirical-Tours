import React, { useMemo, useState } from "react";
import styles from "./ActivityTabs.module.css";
import { Button } from "./Button";
import { IconButton } from "./IconButton";

type Tab = {
  id: string;
  title: string;
  icon?: string;
  bgColor?: string;
  contentTitle: string;
  description: string;
  bullets: string[];
};

type Props = { tabs: Tab[] };

export const ActivityTabs: React.FC<Props> = ({ tabs }) => {
  const [active, setActive] = useState(tabs[0]?.id ?? "");

  const activeTab = useMemo(() => tabs.find((t) => t.id === active) ?? tabs[0], [active, tabs]);

  return (
    <div className={styles.wrap}>
      <div className={styles.list}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`${styles.tab} ${activeTab?.id === tab.id ? styles.active : ""}`}
            style={{ backgroundColor: activeTab?.id === tab.id ? tab.bgColor ?? "#fbb03b" : "#ffffff" }}
          >
            <div className={styles.tabIcon} style={{ backgroundColor: tab.bgColor ?? "#ddeed6" }}>
              {tab.icon ? <img src={tab.icon} alt="" /> : null}
            </div>
            <span>{tab.title}</span>
          </button>
        ))}
      </div>

      {activeTab ? (
        <div className={styles.panel}>
          <h3>{activeTab.contentTitle}</h3>
          <p className={styles.desc}>{activeTab.description}</p>
          <ul className={styles.bullets}>
            {activeTab.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <div className={styles.actions}>
            <Button variant="outline">Check Availability</Button>
            <IconButton aria-label="Play video">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                <path d="M8 5v14l11-7-11-7z" fill="#63ab45" />
              </svg>
            </IconButton>
            <span className={styles.watch}>Watch Culture</span>
          </div>
        </div>
      ) : null}
    </div>
  );
};



