import React from "react";
import styles from "./paginaFilme.module.css";
import ImgPrincipal from "components/ImgPrincipal/ImgPrincipal";
import { useParams } from "react-router-dom";
import FilmesRecomendados from "./filmesRecomendados/FilmesRecomendados";
import Comentarios from "./comentarios/Comentarios";
import { useFetchFilmes } from "hooks/useEffetsGetDados";
import Trailer from "./trailerFilme/TrailerFilme";
import FilmesRelacionados from "./filmesRelacionados/FilmesRelacionados";
import { formatarData } from "utils/formatarData";

export default function PaginaFilme() {
  const { id } = useParams();
  const filmeEncontrado = useFetchFilmes({ endpoint: `/filmes/id/${id}` });
  const generoFilme = filmeEncontrado.map(filme => filme.genero);
  
  const qtdFilmes = 5;

  return (
    <main className={styles.main}>
      <div className={styles.mainContainerLancamento}>
        <aside>
          <FilmesRelacionados generoFilme={generoFilme[0]} qtdFilmes={qtdFilmes} />
        </aside>

        <section className={styles.mainContainer}>
          {filmeEncontrado.map((filme) => (
            <>
              <section
                className={`${styles.containerFilme} ${styles.display}`}
                key={filme.id}
              >
                <div
                  className={`${styles.containerFilmeDescricao} ${styles.display}`}
                  id="filme-descricao"
                >
                  <ImgPrincipal
                    path={filme.poster}
                    id={filme.id}
                    titulo={filme.titulo}
                  />
                </div>
                <div className={styles.text}>
                  <p>
                    <b>Título: </b>
                    {filme.titulo}
                  </p>

                  <p>
                    <b>IMDb: </b>
                    {filme.imdb}
                  </p>
                  <p>
                    <b>Lançamento: </b>
                    {formatarData(filme.dataLancamento)}
                  </p>
                  <p>
                    <b>Gênero: </b>
                    {filme.genero}
                  </p>
                  <p>
                    <b>Atores: </b>
                    {filme.atores}
                  </p>
                  <p>
                    <b>Duração: </b>
                    {filme.duracao}
                  </p>
                  <p>
                    <b>Sinopse: </b>
                    {filme.sinopse}
                  </p>
                </div>
              </section>
              <section id={filme.trailer} className={`${styles.containerFilmeTrailer} ${styles.display}`}>
                <Trailer videoUrl={filme.trailer} />
              </section>
          <section>
            <Comentarios />
          </section>
            </>
          ))}
        </section>
        <aside>
          <FilmesRecomendados qtdFilmes={qtdFilmes} />
        </aside>
      </div>
      <section>COMENTARIOS</section>
      <footer>FOOTER</footer>
    </main>
  );
}
