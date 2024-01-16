import React from "react";
import ImgPrincipal from "components/ImgPrincipal/ImgPrincipal";
import caminhoImg from "data/caminhoImg";
import styles from "./filmesRelacionados.module.css";
import listaFilmes from "data/filme.json";
import { Link, useParams } from "react-router-dom";

interface PaginaInicialProps {
  qtdFilmes: number;
}

export default function FilmesRelacionados({ qtdFilmes }: PaginaInicialProps) {
  const { id } = useParams();

  // Encontre o filme atualmente exibido
  const filmeSelecionado = listaFilmes.find((filme) => filme.id === Number(id));

  // Filtra filmes relacionados pelo gênero do filme atual, excluindo o filme atual
  const filmesRelacionados = filmeSelecionado?.genero
    ? listaFilmes.filter(
        (filme) =>
          filme.genero === filmeSelecionado?.genero && filme.id !== Number(id)
      )
    : [];

  // Gera uma lista de IDs aleatórios únicos
  const idsAleatorios = Array.from({ length: qtdFilmes }, () => {
    if (filmesRelacionados.length === 0) {
      return 0; // Retorna 0 se não houver mais filmes disponíveis
    }

    const indiceAleatorio = Math.floor(
      Math.random() * filmesRelacionados.length
    );
    const filmeAleatorio = filmesRelacionados[indiceAleatorio];

    // Remove o filme escolhido da lista para evitar repetição
    filmesRelacionados.splice(indiceAleatorio, 1);

    return filmeAleatorio?.id || 0;
  });

  return (
    <aside className={`${styles.mainContainer} ${styles.display}`}>
      <p className={styles.paragrafo}>
        RELACIONADOS COM{" "}
        <span className={styles.mainContainer__span}>
          {filmeSelecionado?.genero}
        </span>
      </p>
      <div className={`${styles.container} ${styles.display}`}>
        {idsAleatorios.slice(0, qtdFilmes).map((filmeId) => {
          const filme = listaFilmes.find((f) => f.id === filmeId);
          if (filme) {
            return (
              <Link key={filme.id} to={`/filme/${filme.id}`}>
                <ImgPrincipal
                  key={filme.id}
                  IImgPath={
                    caminhoImg.find((imagem) => imagem.id === filme.id) || {
                      name: "",
                      id: 0,
                      path: "",
                    }
                  }
                />
              </Link>
            );
          }
          return null;
        })}
      </div>
    </aside>
  );
}
