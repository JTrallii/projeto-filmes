import React from "react";
import styles from "./listaCategoria.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFetchFilmes } from "hooks/useEffetsGetDados";
import ImgPrincipal from "components/ImgPrincipal/ImgPrincipal";

export default function ListaCategoria() {
  const { categoria } = useParams();
  const navigate = useNavigate();
  const categoriaUpper = categoria?.toUpperCase();
  const filmesCategoria = useFetchFilmes({
    endpoint: `/filmes/categoria/${categoriaUpper}`,
  });

  return (
    <section>
      <div className={`${styles.container_descricao}`}>
        <button onClick={() => navigate("/")}>VOLTAR</button>
        <p>CATEGORIA: {categoriaUpper}</p>
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
