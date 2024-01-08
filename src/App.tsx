import React from "react";
import "./App.css";
import PaginaInicial from "pages/paginaInicial/PaginaInicial";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <aside className="">ASIDE ESQUERDO</aside>
        <main className="">
          <div className="app1">
            <div></div>
          </div>
        </main>
        <aside>ASIDE DIREITO</aside>
      </div>
      <section>COMENTARIOS</section>
      <footer>FOOTER</footer>
    </div>
  );
}

export default App;
