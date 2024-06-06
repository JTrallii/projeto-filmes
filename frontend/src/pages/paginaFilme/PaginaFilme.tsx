import React from "react";
import styles from "./paginaFilme.module.css";
import ImgPrincipal from "components/ImgPrincipal/ImgPrincipal";
import { useParams } from "react-router-dom";
import FilmesRecomendados from "./filmesRecomendados/FilmesRecomendados";
import { useFetchFilmes } from "hooks/useFetchFilmes";
import Trailer from "./trailerFilme/TrailerFilme";
import FilmesRelacionados from "./filmesRelacionados/FilmesRelacionados";
import { formatarData } from "utils/formatarData";
import Comentarios from "./comentarios/Comentarios";

export default function PaginaFilme() {
  const { id } = useParams();
  const filmeEncontrado = useFetchFilmes({ endpoint: `/filmes/id/${id}` });
  const generoFilme = filmeEncontrado.map((filme) => filme.genero);

  const qtdFilmes = 5;

  const filmesRecomendados = useFetchFilmes({ endpoint: "/filmes" }).filter(
    (filme) => filme.id !== id && !filmeEncontrado.find((f) => f.id === filme.id)
  );
  const filmesRelacionados = useFetchFilmes({ endpoint: `/filmes/categoria/${generoFilme}` }).filter(
    (filme) => filme.id !== id && !filmesRecomendados.find((f) => f.id === filme.id)
  );

  return (
    <main className={styles.main}>
      <div className={styles.mainContainerLancamento}>
        <aside>
          <FilmesRelacionados
            generoFilme={generoFilme[0]}
            qtdFilmes={qtdFilmes}
            filmesRelacionados={filmesRelacionados}
          />
        </aside>

        <section className={styles.mainContainer}>
          {filmeEncontrado.map((filme) => (
            <React.Fragment key={filme.id}>
              <section
                className={`${styles.containerFilme} ${styles.display}`}
                id="filme-descricao"
              >
                <div
                  className={`${styles.containerFilmeDescricao} ${styles.display}`}
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
              <section
                id={filme.trailer}
                className={`${styles.containerFilmeTrailer} ${styles.display}`}
                key={filme.trailer}
              >
                <Trailer videoUrl={filme.trailer} />
              </section>
              <section key={`${filme.id}-comentarios`}>
                <Comentarios filmeId={+filme.id} />
              </section>
            </React.Fragment>
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
