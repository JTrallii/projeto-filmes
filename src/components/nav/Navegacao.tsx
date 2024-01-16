import React from "react";

import styles from "./navegacao.module.css";

export default function Navegacao() {
  return (
    <div className={`${styles.mainContainer} ${styles.alinhamento}`}>
      <nav className={styles.alinhamento}>
        <ul className={`${styles.listaStyle} ${styles.alinhamento}`}>
          <li>AÇÃO</li>
          <li>ANIMAÇÃO</li>
          <li>SUSPENSE</li>
          <li>TERROR</li>
          <li>AVENTURA</li>
          <li>DRAMA</li>
        </ul>
      </nav>
    </div>
  );
}
