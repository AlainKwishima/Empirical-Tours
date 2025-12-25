import React from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "outline" | "pill";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  fullWidth?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  fullWidth,
  className = "",
  children,
  ...rest
}) => (
  <button
    className={[
      styles.btn,
      styles[variant],
      fullWidth ? styles.full : "",
      className
    ].join(" ")}
    {...rest}
  >
    {children}
  </button>
);



