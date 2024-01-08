import styles from "./paginaFilme.module.css";
import React from "react";
import ImgPrincipal from "components/articleFilme/ImgPrincipal/ImgPrincipal";
import IImgPath from "interfaces/IImgPath";
import { useParams } from "react-router-dom";
import listaFilmes from "data/filme.json";
import caminhoImg from "data/caminhoImg";

interface PaginaFilmeProps {
  IImgPath: IImgPath;
}

export default function PaginaFilme({ IImgPath }: PaginaFilmeProps) {
  const { id } = useParams();
  const filme = listaFilmes.find((filme) => filme.id === Number(id));
  const filmeId = caminhoImg.find((filmeId) => filmeId.id === Number(id));
  if (filmeId) {
    const imgPath: IImgPath = {
      name: filmeId.name,
      id: filmeId.id,
      path: filmeId.path,
    };
    return (
      <div className={styles.mainContainer}>
        <div className={`${styles.container} ${styles.display}`}>
          <ImgPrincipal IImgPath={imgPath} />
          <div className={styles.text}>
            <p>
              <b>Título: </b>
              {filme?.title}
            </p>

            <p>
              <b>IMDb: </b>
              <span>{filme?.imdb}</span>
            </p>
            <p>
              <b>Lançamento:</b>
              <span>{filme?.lancamento}</span>
            </p>
            <p>
              <b>Gênero: </b>
              <span>{filme?.genero}</span>
            </p>
            <p>
              <b>Formato: </b>
              <span>{filme?.formato}</span>
            </p>
            <p>
              <b>Qualidade: </b>
              <span>{filme?.qualidade}</span>
            </p>
            <p>
              <b>Áudio: </b>
              <span>{filme?.audio}</span>
            </p>
            <p>
              <b>Legenda: </b>
              <span>{filme?.legenda}</span>
            </p>
            <p>
              <b>Tamanho: </b>
              <span>{filme?.tamanho}</span>
            </p>
            <p>
              <b>Duração: </b>
              <span>{filme?.duracao}</span>
            </p>
            <p>
              <b>Qualidade de Áudio: </b>
              <span>{filme?.qualidadeAudio}</span>
            </p>
            <p>
              <b>Qualidade de Video: </b>
              <span>{filme?.qualidadeVideo}</span>
            </p>
            <p>
              <b>Servidor: </b>
              <span>{filme?.servidor}</span>
            </p>
            <p>
              <b>Sinopse: </b>
              <span>{filme?.sinopse}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
