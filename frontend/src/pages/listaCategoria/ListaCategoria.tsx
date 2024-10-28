import React from "react";
import styles from "./listaCategoria.module.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFetchFilmes } from "hooks/useFetchFilmes";
import ImgPrincipal from "components/ImgPrincipal/ImgPrincipal";

export default function ListaCategoria() {
  const { categoria } = useParams();
  const navigate = useNavigate();
  const categoriaUpper = categoria?.toUpperCase();
  const filmesCategoria = useFetchFilmes({
    endpoint: `/filmes/categoria/${categoriaUpper}`,
  });
  const categoriaFormatada =
    categoriaUpper === "ACAO"
      ? "AÇÃO"
      : categoriaUpper === "COMEDIA"
      ? "COMÉDIA"
      : categoriaUpper === "ROMANCE"
      ? "ROMANCE"
      : categoriaUpper === "DRAMA"
      ? "DRAMA"
      : categoriaUpper === "CRIME"
      ? "CRIME"
      : categoriaUpper === "AVENTURA"
      ? "AVENTURA"
      : categoriaUpper === "SUSPENSE"
      ? "SUSPENSE"
      : categoriaUpper === "TERROR"
      ? "TERROR"
      : categoriaUpper === "FANTASIA"
      ? "FANTASIA"
      : categoria;

  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.container__descricao}`}>
        <button
          className={`${styles.container__descricao__botao}`}
          onClick={() => navigate("/")}
        >
          VOLTAR
        </button>
        <p className={`${styles.container__descricao__categoria}`}>CATEGORIA: <span>{categoriaFormatada}</span></p>
      </div>
      <div className={`${styles.container_filme}`}>
        {filmesCategoria.map((filme) => (
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
  );
}
