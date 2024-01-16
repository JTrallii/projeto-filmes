import React from "react";
import { ReactNode } from "react";
import styles from "./index.module.css";

interface HeaderProps {
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className={styles.header}>
      <div>{children}</div>
    </header>
  );
};

export default Header;
