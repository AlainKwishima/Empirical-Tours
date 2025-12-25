import React from "react";
import styles from "./IconButton.module.css";

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const IconButton: React.FC<IconButtonProps> = ({ children, ...rest }) => (
  <button className={styles.iconBtn} {...rest}>
    {children}
  </button>
);



