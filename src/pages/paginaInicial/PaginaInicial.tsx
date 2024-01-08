import ImgPrincipal from "components/articleFilme/ImgPrincipal/ImgPrincipal";
import React from "react";
import caminhoImg from "data/caminhoImg";
import styles from "./paginaInicial.module.css";

interface PaginaInicialProps {
  qtdFilmes: number;
}

export default function PaginaInicial({ qtdFilmes }: PaginaInicialProps) {
  return (
    <section className={styles.mainContainer}>
      <p className={styles.paragrafo}>ULTIMAS POSTAGENS</p>
      <div className={styles.container}>
        {caminhoImg
          .slice(0, qtdFilmes)
          .reverse()
          .map((imagem) => (
            <ImgPrincipal key={imagem.id} IImgPath={imagem} />
          ))}
      </div>
    </section>
  );
}
