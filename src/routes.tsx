import React from "react";
import Header from "components/header/Header";
import Navegacao from "components/nav/Navegacao";
import PaginaInicial from "pages/paginaInicial/PaginaInicial";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaginaFilme from "pages/paginaFilme/PaginaFilme";
import caminhoDaImagem from "data/caminhoImg";

type Img = (typeof caminhoDaImagem)[0];

export default function Rotas() {
  const qtdFilmes = 14;

  return (
    <Router>
      <Header>SEM NOME ATÉ O MOMENTO</Header>
      <Navegacao />
      <Routes>
        <Route path="/" element={<PaginaInicial qtdFilmes={qtdFilmes} />} />
        {/* Não consigo passar o IImgPath para a rota abaixo
        <Route path="filme/:id" element={<PaginaFilme IImgPath={}/>} /> */}
      </Routes>
    </Router>
  );
}
