import React from "react";
import styles from "./paginaFilme.module.css";
import ImgPrincipal from "components/ImgPrincipal/ImgPrincipal";
import { useParams } from "react-router-dom";
import listaFilmes from "data/filme.json";
import caminhoImg from "data/caminhoImg";
import UltimosLancamentos from "./filmesRelacionados/FilmesRelacionados";
import FilmesRecomendados from "./filmesRecomendados/FilmesRecomendados";
import Trailer from "./trailerFilme/TrailerFilme";

export default function PaginaFilme() {
  const { id } = useParams();
  const qtdFilmes = 4;
  const filme = listaFilmes.find((f) => f.id === Number(id));
  const imagemFiltradaId = caminhoImg.find(
    (imagem) => imagem.id === Number(id)
  );
  if (!imagemFiltradaId || !filme) {
    // Tratar o caso em que não há imagem filtrada para o ID
    return <UltimosLancamentos qtdFilmes={qtdFilmes} />;
  }
  if (!filme.trailer) {
    return <span>Filme sem trailer</span>;
  }
  console.log(filme?.trailer);

  return (
    <main className={styles.main}>
      <div className={styles.mainContainerLancamento}>
        <aside className="">
          <UltimosLancamentos qtdFilmes={qtdFilmes} />
        </aside>

        <section className={styles.mainContainer}>
          <div className={`${styles.containerFilme} ${styles.display}`}>
            <div
              className={`${styles.containerFilmeDescricao} ${styles.display}`}
            >
              <ImgPrincipal IImgPath={imagemFiltradaId} />
              <div className={styles.text}>
                <p>
                  <b>Título: </b>
                  {filme?.title}
                </p>

                <p>
                  <b>IMDb: </b>
                  {filme?.imdb}
                </p>
                <p>
                  <b>Lançamento: </b>
                  {filme?.lancamento}
                </p>
                <p>
                  <b>Gênero: </b>
                  {filme?.genero}
                </p>
                <p>
                  <b>Formato: </b>
                  {filme?.formato}
                </p>
                <p>
                  <b>Qualidade: </b>
                  {filme?.qualidade}
                </p>
                <p>
                  <b>Áudio: </b>
                  {filme?.audio}
                </p>
                <p>
                  <b>Legenda: </b>
                  {filme?.legenda}
                </p>
                <p>
                  <b>Tamanho: </b>
                  {filme?.tamanho}
                </p>
                <p>
                  <b>Duração: </b>
                  {filme?.duracao}
                </p>
                <p>
                  <b>Qualidade de Áudio: </b>
                  {filme?.qualidadeAudio}
                </p>
                <p>
                  <b>Qualidade de Video: </b>
                  {filme?.qualidadeVideo}
                </p>
                <p>
                  <b>Servidor: </b>
                  {filme?.servidor}
                </p>
                <p>
                  <b>Sinopse: </b>
                  {filme?.sinopse}
                </p>
              </div>
            </div>
            <section>
              <Trailer videoUrl={filme.trailer} />
            </section>
          </div>
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
