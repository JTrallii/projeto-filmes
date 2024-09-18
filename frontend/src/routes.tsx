import React from "react";
import Header from "components/header/Header";
import PaginaInicial from "pages/paginaInicial/PaginaInicial";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaginaFilme from "pages/paginaFilme/PaginaFilme";
import ListaCategoria from "pages/listaCategoria/ListaCategoria";


export default function Rotas() {


  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="filmes/:id" element={<PaginaFilme />} />
        <Route path="filmes/categoria/:categoria" element={<ListaCategoria />} />
      </Routes>
    </Router>
  );
}
