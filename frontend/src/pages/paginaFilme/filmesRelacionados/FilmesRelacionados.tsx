import React from "react";
import ImgPrincipal from "components/ImgPrincipal/ImgPrincipal";
import styles from "./filmesRelacionados.module.css";
import { Link, useParams } from "react-router-dom";
import { useFetchFilmes } from "hooks/useEffetsGetDados";

interface FilmesRelacionadosProps {
  qtdFilmes: number;
  generoFilme: string;
}

export default function FilmesRelacionados({
  generoFilme,
}: FilmesRelacionadosProps) {
  const categoria = generoFilme;
  const qtdFilmes = 5;
  const filmesRelacionado = useFetchFilmes({ endpoint: "/filmes" });
  const filmesCategoria = filmesRelacionado.filter(
    (filme) => filme.genero === categoria
  );

  return (
    <aside className={`${styles.mainContainer} ${styles.display}`}>
      <p className={styles.paragrafo}>RELACIONADOS COM {categoria}</p>
      <section className={`${styles.container} ${styles.display}`}>
        {filmesCategoria.slice(0, qtdFilmes).map((filme) => (
          <Link key={filme.id} to={`/filmes/${filme.id}`}>
            <ImgPrincipal
              key={filme.id}
              id={filme.id}
              path={filme.poster}
              titulo={filme.titulo}
            />
          </Link>
        ))}
      </section>
    </aside>
  );
}
