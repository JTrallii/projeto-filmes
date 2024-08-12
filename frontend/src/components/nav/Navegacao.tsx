import React, { useState } from "react";
import styles from "./navegacao.module.scss";
import { Link } from "react-router-dom";

export default function Navegacao() {
  const [menuAberto, setMenuAberto] = useState(false);

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
    console.log(menuAberto ? "Menu Fechado" : "Menu Aberto");
  };

  return (
    <nav className={styles.navegacao}>
      <div className={styles.menuIcon} onClick={alternarMenu}>
        &#9776; {/* Ícone de hambúrguer */}
      </div>
      {/* Corrigido para adicionar a classe correta */}
      <ul className={`${styles.navegacao_menu} ${menuAberto ? styles.menuAberto : ""}`}>
        <li className={styles.navegacao_lista}><Link className={styles.navegacao_link} to={"filmes/categoria/acao"}>AÇÃO</Link></li>
        <li className={styles.navegacao_lista}><Link className={styles.navegacao_link} to={"filmes/categoria/aventura"}>AVENTURA</Link></li>
        <li className={styles.navegacao_lista}><Link className={styles.navegacao_link} to={"filmes/categoria/crime"}>CRIME</Link></li>
        <li className={styles.navegacao_lista}><Link className={styles.navegacao_link} to={"filmes/categoria/drama"}>DRAMA</Link></li>
        <li className={styles.navegacao_lista}><Link className={styles.navegacao_link} to={"filmes/categoria/terror"}>TERROR</Link></li>
        <li className={styles.navegacao_lista}><Link className={styles.navegacao_link} to={"filmes/categoria/comedia"}>COMÉDIA</Link></li>
      </ul>
    </nav>
  );
}
