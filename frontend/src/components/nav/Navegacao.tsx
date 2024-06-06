import React from "react";
import styles from "./navegacao.module.css";
import { Link } from "react-router-dom";

export default function Navegacao() {

  return ( 
      <nav className={styles.navegacao}>
        <ul className={`${styles.navegacao_ul} ${styles.alinhamento}`}>
          <Link className={`${styles.navegacao_link}`} to={"filmes/categoria/acao"}><li>AÇÃO</li></Link>
          <Link className={`${styles.navegacao_link}`} to={"filmes/categoria/aventura"}><li>AVENTURA</li></Link>
          <Link className={`${styles.navegacao_link}`} to={"filmes/categoria/crime"}><li>CRIME</li></Link>
          <Link className={`${styles.navegacao_link}`} to={"filmes/categoria/drama"}><li>DRAMA</li></Link>
          <Link className={`${styles.navegacao_link}`} to={"filmes/categoria/terror"}><li>TERROR</li></Link>
          <Link className={`${styles.navegacao_link}`} to={"filmes/categoria/comedia"}><li>COMÉDIA</li></Link>
        </ul>
      </nav>
  );
}
