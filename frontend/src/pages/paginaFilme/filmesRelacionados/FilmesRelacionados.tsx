import React from "react";
import ImgPrincipal from "components/ImgPrincipal/ImgPrincipal";
import styles from "./filmesRelacionados.module.css";
import { Link } from "react-router-dom";
import { useFetchFilmes } from "hooks/useFetchFilmes";

interface FilmesRelacionadosProps {
  qtdFilmes: number;
  generoFilme: string;
  filmesRelacionados: Filme[];
}

interface Filme {
  id: string;
  titulo: string;
  genero: string;
  poster: string;
}

export default function FilmesRelacionados({
  generoFilme,
  filmesRelacionados
}: FilmesRelacionadosProps) {
  const categoria = generoFilme;
  const qtdFilmes = 5;
  const filmesRelacionado = useFetchFilmes({ endpoint: "/filmes" }).filter(
    (filme) => filme.genero === categoria
  );
  const filmesAleatorios = filmesRelacionado.sort(() => Math.random() - 0.5);

  return (
    <aside className={`${styles.mainContainer} ${styles.display}`}>
      <p className={styles.paragrafo}>RELACIONADOS COM {categoria}</p>
      <section className={`${styles.container} ${styles.display}`}>
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
      </section>
    </aside>
  );
}
