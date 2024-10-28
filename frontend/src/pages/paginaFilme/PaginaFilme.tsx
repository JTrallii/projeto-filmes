import React from "react";
import styles from "./paginaFilme.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useFetchFilmes } from "hooks/useFetchFilmes";
import Trailer from "./trailerFilme/TrailerFilme";
import { formatarData } from "utils/formatarData";
import CategoriaPorLista from "pages/paginaInicial/categoriaPorLista/CategoriaPorLista";

export default function PaginaFilme() {
  const { id } = useParams();
  const filmeEncontrado = useFetchFilmes({ endpoint: `/filmes/id/${id}` });
  const ultimasPostagens = useFetchFilmes({
    endpoint: "/filmes/ultimos-lancamentos",
  });
  const navigate = useNavigate();

  return (
    <main>
      <button
        className={`${styles.botao}`}
        onClick={() => navigate("/")}
      >
        VOLTAR
      </button>
      <section className={styles.container}>
        {filmeEncontrado.map((filme) => (
          <React.Fragment key={filme.id}>
            <div className={`${styles.container__descricao}`}>
              <div className={`${styles.container__descricao__filme}`}>
                <img
                  className={`${styles.container__descricao__filme__img}`}
                  src={filme.poster}
                  alt={filme.titulo}
                  id={filme.id}
                />
                <div className={styles.container__descricao__filme__texto}>
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
              </div>
                <Trailer videoUrl={filme.trailer} />
            </div>
          </React.Fragment>
        ))}
      </section>
      <CategoriaPorLista
        categoriaFiltrada={ultimasPostagens}
        tituloFiltrado={"FILMES QUE TALVEZ POSSA GOSTAR"}
      />
    </main>
  );
}
