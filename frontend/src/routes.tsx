import React from "react";
import Header from "components/header/Header";
import Navegacao from "components/nav/Navegacao";
import PaginaInicial from "pages/paginaInicial/PaginaInicial";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaginaFilme from "pages/paginaFilme/PaginaFilme";
import ListaCategoria from "pages/listaCategoria/ListaCategoria";


export default function Rotas() {
  const qtdFilmes = 7;

  return (
    <Router>
      <Header></Header>
      <Navegacao />
      <Routes>
        <Route path="/" element={<PaginaInicial qtdFilmes={qtdFilmes} />} />
        <Route path="filmes/:id" element={<PaginaFilme />} />
        <Route path="filmes/categoria/:categoria" element={<ListaCategoria />} />
      </Routes>
    </Router>
  );
}
