import ImgPrincipal from "components/ImgPrincipal/ImgPrincipal";
import React, { useRef } from "react";
import styles from "./paginaInicial.module.scss";
import { Link } from "react-router-dom";
import { useFetchFilmes } from "hooks/useFetchFilmes";
import SecaoPrincipal from "components/secaoPrincipal/SecaoPrincipal";
import imagenFilmes from "assets/img/filmes";

interface PaginaInicialProps {
  qtdFilmes: number;
}

export default function PaginaInicial({ qtdFilmes }: PaginaInicialProps) {
  const ultimasPostagens = useFetchFilmes({ endpoint: "/filmes/ultimos-lancamentos" });
  const melhoresAvaliados = useFetchFilmes({ endpoint: "/filmes/top5" });

  // Usamos uma referência para o container de filmes
  const containerFilmesRef = useRef<HTMLDivElement>(null);

  // Funções para rolar o container de filmes
  const rolarParaDireita = () => {
    if (containerFilmesRef.current) {
      containerFilmesRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const rolarParaEsquerda = () => {
    if (containerFilmesRef.current) {
      containerFilmesRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  return (
    <main>
      <SecaoPrincipal filmes={imagenFilmes}/>
      <section
        className={styles.section__container}
      >
        <p className={styles.section__container__paragrafo}>ULTIMAS POSTAGENS</p>
        <div className={styles.section__container__filmes}>
          {ultimasPostagens.slice(0, qtdFilmes).map((filme) => (
            <Link key={filme.id} to={`/filmes/${filme.id}`}>
              <ImgPrincipal
                path={filme.poster}
                id={filme.id}
                titulo={filme.titulo}
              />
            </Link>
          ))}
        </div>

        {/* Botões de rolagem */}
        <button className={`${styles.seta} ${styles["seta-esquerda"]}`} onClick={rolarParaEsquerda}>
          &lt;
        </button>
        <button className={`${styles.seta} ${styles["seta-direita"]}`} onClick={rolarParaDireita}>
          &gt;
        </button>
      </section>

      <section className={styles.sectionContainer} id="section-top-avaliacoes">
        <p className={styles.paragrafo}>MELHORES AVALIAÇÕES</p>
        <div className={styles.container}>
          {melhoresAvaliados.slice(0, qtdFilmes).map((filme) => (
            <Link key={filme.id} to={`/filmes/${filme.id}`}>
              <ImgPrincipal
                path={filme.poster}
                id={filme.id}
                titulo={filme.titulo}
              />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
