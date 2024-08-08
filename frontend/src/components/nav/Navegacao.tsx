import React from "react";
import styles from "./navegacao.module.scss";
import { Link } from "react-router-dom";

export default function Navegacao() {

  return ( 
      <nav className={styles.navegacao}>
        <ul className={`${styles.navegacao_menu}`}>
          <li className={`${styles.navegacao_lista}`}><Link className={`${styles.navegacao_link}`} to={"filmes/categoria/acao"}>AÇÃO</Link></li>
          <li className={`${styles.navegacao_lista}`}><Link className={`${styles.navegacao_link}`} to={"filmes/categoria/aventura"}>AVENTURA</Link></li>
          <li className={`${styles.navegacao_lista}`}><Link className={`${styles.navegacao_link}`} to={"filmes/categoria/crime"}>CRIME</Link></li>
          <li className={`${styles.navegacao_lista}`}><Link className={`${styles.navegacao_link}`} to={"filmes/categoria/drama"}>DRAMA</Link></li>
          <li className={`${styles.navegacao_lista}`}><Link className={`${styles.navegacao_link}`} to={"filmes/categoria/terror"}>TERROR</Link></li>
          <li className={`${styles.navegacao_lista}`}><Link className={`${styles.navegacao_link}`} to={"filmes/categoria/comedia"}>COMÉDIA</Link></li>
        </ul>
      </nav>
  );
}
