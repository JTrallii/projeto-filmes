import React from "react";
import { Link } from "react-router-dom";
import styles from "./menu.module.scss";

interface MenuProps {
  open: boolean;
}

export default function Menu({ open }: MenuProps) {
    return(
      <>
        <nav className={`${styles.navegacao} ${open ? styles["header__navegacao__menu--ativo"] : ""}`}>
          <ul className={styles.navegacao__menu}>
            <li className={`${styles.navegacao__menu__lista}`}><Link className={styles.navegacao__menu__lista__link} to={"filmes/categoria/acao"}>AÇÃO</Link></li>
            <li className={`${styles.navegacao__menu__lista}`}><Link className={styles.navegacao__menu__lista__link} to={"filmes/categoria/aventura"}>AVENTURA</Link></li>
            <li className={`${styles.navegacao__menu__lista}`}><Link className={styles.navegacao__menu__lista__link} to={"filmes/categoria/crime"}>CRIME</Link></li>
            <li className={`${styles.navegacao__menu__lista}`}><Link className={styles.navegacao__menu__lista__link} to={"filmes/categoria/drama"}>DRAMA</Link></li>
            <li className={`${styles.navegacao__menu__lista}`}><Link className={styles.navegacao__menu__lista__link} to={"filmes/categoria/terror"}>TERROR</Link></li>
            <li className={`${styles.navegacao__menu__lista}`}><Link className={styles.navegacao__menu__lista__link} to={"filmes/categoria/comedia"}>COMÉDIA</Link></li>
          </ul>
        </nav>
      </>
    );
}