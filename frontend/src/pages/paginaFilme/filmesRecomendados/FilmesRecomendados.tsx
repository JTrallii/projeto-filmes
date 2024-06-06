import React from "react";
import ImgPrincipal from "components/ImgPrincipal/ImgPrincipal";
import styles from "./recomendados.module.css";
import { Link } from "react-router-dom";
import { useFetchFilmes } from "hooks/useFetchFilmes";

interface PaginaInicialProps {
  qtdFilmes: number;
}

interface Filme {
  id: string;
  titulo: string;
  genero: string;
  poster: string;
}

export default function FilmesRecomendados({ qtdFilmes }: PaginaInicialProps) {

  const filmeEncontrado = useFetchFilmes({ endpoint: "/filmes" });
  const filmesAleatorios = filmeEncontrado.sort(() => Math.random() - 0.5);

  return (
    <aside className={`${styles.mainContainer} ${styles.display}`}>
      <p className={styles.paragrafo}>FILMES QUE TALVEZ GOSTE !</p>
      <div className={`${styles.container} ${styles.display}`}>
      {filmesAleatorios.slice(0, qtdFilmes).map((filme) => (
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
