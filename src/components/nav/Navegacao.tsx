import React from "react";

import styles from "./index.module.css";

export default function Navegacao() {
  return (
    <div className={styles.alinhamento}>
      <nav className={styles.alinhamento}>
        <ul className={`${styles.listaStyle} ${styles.alinhamento}`}>
          <li>LANÇAMENTOS</li>
          <li>AÇÃO</li>
          <li>ANIMAÇÃO</li>
          <li>SUSPENSE</li>
          <li>TERROR</li>
          <li>POLICIAL</li>
          <li>FANTASIA</li>
          <li>COMÉDIA</li>
        </ul>
      </nav>
    </div>
  );
}
