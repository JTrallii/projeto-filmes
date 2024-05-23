import React from "react";
import ImgPrincipal from "components/ImgPrincipal/ImgPrincipal";
import styles from "./recomendados.module.css";
import { Link } from "react-router-dom";
import { useFetchFilmes } from "hooks/useEffetsGetDados";

interface PaginaInicialProps {
  qtdFilmes: number;
}

export default function FilmesRecomendados({ qtdFilmes }: PaginaInicialProps) {

  const filmeEncontrado = useFetchFilmes({ endpoint: "/filmes" });
  

  return (
    <aside className={`${styles.mainContainer} ${styles.display}`}>
      <p className={styles.paragrafo}>FILMES QUE TALVEZ GOSTE !</p>
      <div className={`${styles.container} ${styles.display}`}>
      {filmeEncontrado.slice(0, qtdFilmes).map((filme) => (
          <Link key={filme.id} to={`/filmes/${filme.id}`}>
            <ImgPrincipal
              key={filme.id}
              id={filme.id}
              path={filme.poster}
              titulo={filme.titulo}
            />
          </Link>
        ))}
      </div>
    </aside>
  );
}
