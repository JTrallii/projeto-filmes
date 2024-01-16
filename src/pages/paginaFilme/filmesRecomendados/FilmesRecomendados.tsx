import React from "react";
import ImgPrincipal from "components/ImgPrincipal/ImgPrincipal";
import caminhoImg from "data/caminhoImg";
import styles from "./recomendados.module.css";
import listaFilmes from "data/filme.json";
import { Link, useParams } from "react-router-dom";

interface PaginaInicialProps {
  qtdFilmes: number;
}

export default function FilmesRecomendados({ qtdFilmes }: PaginaInicialProps) {
  const { id } = useParams();
  // Gera uma lista de IDs aleatórios únicos
  const idsAleatorios = Array.from({ length: qtdFilmes }, () => {
    const filmesRecomendados = listaFilmes.filter(
      (filme) => filme.id !== Number(id)
    );
    if (filmesRecomendados.length === 0) {
      return 0; // Retorna 0 se não houver mais filmes disponíveis
    }

    const indiceAleatorio = Math.floor(
      Math.random() * filmesRecomendados.length
    );
    const filmeAleatorio = filmesRecomendados[indiceAleatorio];

    // Remove o filme escolhido da lista para evitar repetição
    filmesRecomendados.splice(indiceAleatorio, 1);

    return filmeAleatorio?.id || 0;
  });

  return (
    <aside className={`${styles.mainContainer} ${styles.display}`}>
      <p className={styles.paragrafo}>FILMES QUE TALVEZ GOSTE !</p>
      <div className={`${styles.container} ${styles.display}`}>
        {idsAleatorios.map((filmeId) => {
          if (filmeId !== Number(id)) {
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
          }
        })}
      </div>
    </aside>
  );
}
