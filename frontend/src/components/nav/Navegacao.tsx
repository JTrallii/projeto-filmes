import React, { useState } from "react";
import styles from "./navegacao.module.css";
import { useFetchFilmes } from "hooks/useEffetsGetDados";
import { Link } from "react-router-dom";

export default function Navegacao() {
  
  const [categoria, setCategoria] = useState("Ação");

  const endpoint = `/filmes/categoria/${
    categoria === "acao" ? "Ação" :
    categoria === "aventura" ? "Aventura" :
    categoria === "comedia" ? "Comedia" :
    categoria === "crime" ? "Crime" :
    categoria === "drama" ? "Drama" :
    "Terror"}`;

  const filmesCategoria = useFetchFilmes({ endpoint: `/filmes/categoria/${endpoint}` });

  const handleCategoriaClick: React.MouseEventHandler<HTMLLIElement> = (event) => {
    const valor = event.currentTarget;
    if (valor instanceof HTMLLIElement) {
        const categoriaEscolhida = valor.id;
        setCategoria(categoriaEscolhida);
    }
};

  return (
    <div className={`${styles.mainContainer} ${styles.alinhamento}`}>
      <nav className={styles.alinhamento}>
        <ul className={`${styles.listaStyle} ${styles.alinhamento}`}>
          <Link to={"filmes/categoria"}><li id="acao" onClick={handleCategoriaClick}>AÇÃO</li></Link>
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
