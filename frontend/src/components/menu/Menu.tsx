import React from "react";
import { Link } from "react-router-dom";
import styles from "./menu.module.scss";

interface MenuProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Menu({ open, setOpen }: MenuProps) {

  const handleLinkClick = () => {
    setOpen(!open); // Fecha o menu
  };

  return (
    <>
      <nav className={`${styles.navegacao}`}>
        <ul
          className={`${styles.navegacao__menu} ${
            open ? styles["navegacao__menu--ativo"] : ""
          }`}
        >
          <li className={`${styles.navegacao__menu__lista}`}>
            <Link
              className={styles.navegacao__menu__lista__link}
              to={"filmes/categoria/acao"}
              onClick={handleLinkClick}
            >
              AÇÃO
            </Link>
          </li>
          <li className={`${styles.navegacao__menu__lista}`}>
            <Link
              className={styles.navegacao__menu__lista__link}
              to={"filmes/categoria/aventura"}
              onClick={handleLinkClick}
            >
              AVENTURA
            </Link>
          </li>
          <li className={`${styles.navegacao__menu__lista}`}>
            <Link
              className={styles.navegacao__menu__lista__link}
              to={"filmes/categoria/crime"}
              onClick={handleLinkClick}
            >
              CRIME
            </Link>
          </li>
          <li className={`${styles.navegacao__menu__lista}`}>
            <Link
              className={styles.navegacao__menu__lista__link}
              to={"filmes/categoria/drama"}
              onClick={handleLinkClick}
            >
              DRAMA
            </Link>
          </li>
          <li className={`${styles.navegacao__menu__lista}`}>
            <Link
              className={styles.navegacao__menu__lista__link}
              to={"filmes/categoria/terror"}
              onClick={handleLinkClick}
            >
              TERROR
            </Link>
          </li>
          <li className={`${styles.navegacao__menu__lista}`}>
            <Link
              className={styles.navegacao__menu__lista__link}
              to={"filmes/categoria/comedia"}
              onClick={handleLinkClick}
            >
              COMÉDIA
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
