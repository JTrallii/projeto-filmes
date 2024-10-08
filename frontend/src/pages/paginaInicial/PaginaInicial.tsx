import React from "react";
import Banner from "components/banner/Banner";
import imagenFilmes from "assets/img/filmes";
import { useFetchFilmes } from "hooks/useFetchFilmes";
import CategoriaPorLista from "./categoriaPorLista/CategoriaPorLista";



export default function PaginaInicial() {
  const ultimasPostagens = useFetchFilmes({ endpoint: "/filmes/ultimos-lancamentos" });
  const top5 = useFetchFilmes({ endpoint: "/filmes/top5" });
  const acao = useFetchFilmes({ endpoint: "/filmes/categoria/ACAO" });
  const aventura = useFetchFilmes({ endpoint: "/filmes/categoria/AVENTURA" });
  const crime = useFetchFilmes({ endpoint: "/filmes/categoria/CRIME" });
  const drama = useFetchFilmes({ endpoint: "/filmes/categoria/DRAMA" });
  const terror = useFetchFilmes({ endpoint: "/filmes/categoria/TERROR" });
  const comedia = useFetchFilmes({ endpoint: "/filmes/categoria/COMEDIA" });
  

  return (
    <main>
      <Banner categoriaFiltrada={ultimasPostagens} />
      <CategoriaPorLista categoriaFiltrada={ultimasPostagens} tituloFiltrado={"ULTIMAS POSTAGENS"}/>
      <CategoriaPorLista categoriaFiltrada={top5} tituloFiltrado={"TOP 5"}/>
      <CategoriaPorLista categoriaFiltrada={acao} tituloFiltrado={"FILMES DE AÇÃO"}/>
      <CategoriaPorLista categoriaFiltrada={aventura} tituloFiltrado={"FILMES DE AVENTURA"}/>
      <CategoriaPorLista categoriaFiltrada={crime} tituloFiltrado={"FILMES DE CRIME"}/>
      <CategoriaPorLista categoriaFiltrada={drama} tituloFiltrado={"FILMES DE DRAMA"}/>
      <CategoriaPorLista categoriaFiltrada={terror} tituloFiltrado={"FILMES DE TERROR"}/>
      <CategoriaPorLista categoriaFiltrada={comedia} tituloFiltrado={"FILMES DE COMEDIA"}/>
    </main>
  );
}
