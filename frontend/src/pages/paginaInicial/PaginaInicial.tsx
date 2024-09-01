import ImgPrincipal from "components/ImgPrincipal/ImgPrincipal";
import React from "react";
import styles from "./paginaInicial.module.css";
import { Link } from "react-router-dom";
import imagem from "../../assets/JohnWick1.jpg";

import { useFetchFilmes } from "hooks/useFetchFilmes";

interface PaginaInicialProps {
  qtdFilmes: number;
}

export default function PaginaInicial({ qtdFilmes }: PaginaInicialProps) {
  const ultimasPostagens = useFetchFilmes({ endpoint: "/filmes/ultimos-lancamentos" });
  const melhoresAvaliados = useFetchFilmes({ endpoint: "/filmes/top5" });

  return (
    <main>
      <section
        className={styles.sectionContainer}
      >
        <p className={styles.paragrafo}>ULTIMAS POSTAGENS</p>
        <div className={styles.container}>

          {/* {ultimasPostagens.slice(0, qtdFilmes).map((filme) => (
            <Link key={filme.id} to={`/filmes/${filme.id}`}>
              <ImgPrincipal
                path={filme.poster}
                id={filme.id}
                titulo={filme.titulo}
              />
            </Link>
          ))} */}
        </div>
      </section>

      <section className={styles.sectionContainer} id="section-top-avaliacoes">
        <p className={styles.paragrafo}>MELHORES AVALIAÇÕES</p>
        <div className={styles.container}>
          {melhoresAvaliados.slice(0, qtdFilmes).map((filme) => (
            <Link key={filme.id} to={`/filmes/${filme.id}`}>
              <ImgPrincipal
                path={filme.poster}
                id={filme.id}
                titulo={filme.titulo}
              />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
