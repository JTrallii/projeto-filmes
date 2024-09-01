import React, { useState } from "react";
import styles from "./header.module.scss";
import logo from "../../assets/PIPOFLIX2.png";
import Hamburguer from "components/menuHamburguer/Hamburguer";
import Menu from "components/menu/Menu";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Hamburguer open={open} setOpen={setOpen} />
        <img className={styles.header__container__logo} src={logo} alt="Logo" />
      </div>
      <div className={styles.header__menu}>
        <Menu open={open} setOpen={setOpen}/>
      </div>
    </header>
  );
};

export default Header;
