import "./App.css";
import ImgPrincipal from "./components/articleFilme/ImgPrincipal/ImgPrincipal";
import pinoquio from "./img/pinoquio.jpg";
import DescricaoFilme from "./components/articleFilme/descricaoFilme/DescricaoFilme";
import Header from "./components/header/Header";
import Navegacao from "./components/nav/Navegacao";

function App() {
  return (
    <div className="App">
      <Header>TREINAMENTO DE COMPONENTS</Header>
      <Navegacao />
      <div className="main-container">
        <aside className="">ASIDE ESQUERDO</aside>
        <main className="">
          <div className="app1">
            <ImgPrincipal srcImg={pinoquio} alt="Pinoquio" id="pinoquio" />
            <div>
              <DescricaoFilme
                title="Pinóquio"
                imdb={5.9}
                lancamento="2020"
                genero="Drama, Fantasia"
                formato="MKV"
                qualidade="BluRay 1080p"
                audio="Português"
                legenda="Português"
                tamanho="4.2GB, 10.GB"
                duracao="2h 05 min"
                qualidadeAudio="10"
                qualidadeVideo="10"
                servidor="Torrent"
              />
            </div>
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
