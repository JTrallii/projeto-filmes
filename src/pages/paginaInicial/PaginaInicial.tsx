import ImgPrincipal from "components/ImgPrincipal/ImgPrincipal";
import React from "react";
import caminhoImg from "data/caminhoImg";
import styles from "./paginaInicial.module.css";
import { Link } from "react-router-dom";

interface PaginaInicialProps {
  qtdFilmes: number;
}

export default function PaginaInicial({ qtdFilmes }: PaginaInicialProps) {
  return (
    <section className={styles.mainContainer}>
      <p className={styles.paragrafo}>ULTIMAS POSTAGENS</p>
      <div className={styles.container}>
        {caminhoImg
          .slice()
          .reverse()
          .slice(0, qtdFilmes)
          .map((imagem) => (
            <Link key={imagem.id} to={`/filme/${imagem.id}`}>
              <ImgPrincipal key={imagem.id} IImgPath={imagem} />
            </Link>
          ))}
      </div>
    </section>
  );
}
