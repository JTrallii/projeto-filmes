import React from "react";
import styles from "./index.module.scss";
import logo from "../../assets/logo.jpg";


const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="" />
    </header>
  );
};

export default Header;
