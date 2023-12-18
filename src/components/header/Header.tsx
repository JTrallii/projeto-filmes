import { ReactNode } from "react";
import styles from "./index.module.css";

interface HeaderProps {
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className={styles.header}>
      <h1>{children}</h1>
    </header>
  );
};

export default Header;
