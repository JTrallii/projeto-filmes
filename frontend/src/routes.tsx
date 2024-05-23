import React from "react";
import Header from "components/header/Header";
import Navegacao from "components/nav/Navegacao";
import PaginaInicial from "pages/paginaInicial/PaginaInicial";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaginaFilme from "pages/paginaFilme/PaginaFilme";


export default function Rotas() {
  const qtdFilmes = 7;

  return (
    <Router>
      <Header>PIPOFLIX</Header>
      <Navegacao />
      <Routes>
        <Route path="/" element={<PaginaInicial qtdFilmes={qtdFilmes} />} />
        <Route path="filmes/:id" element={<PaginaFilme />} />
      </Routes>
    </Router>
  );
}
