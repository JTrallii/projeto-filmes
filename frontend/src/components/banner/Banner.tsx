import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import ImgPrincipal from "components/ImgPrincipal/ImgPrincipal";
import styles from "./banner.module.scss";

interface Filme {
  titulo: string;
  poster: string;
  id: string;
}

interface BannerProps {
  categoriaFiltrada: Filme[];
}

export default function Banner({ categoriaFiltrada }: BannerProps) {
  const [indiceAtualImagem, setIndiceAtualImagem] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [larguraFilme, setLarguraFilme] = useState(0);

  const totalFilmes = categoriaFiltrada.length;

  // Função para ajustar a largura com base no primeiro filme, incluindo margens e padding
  const ajustarLarguraFilme = () => {
    const container = containerRef.current;
    if (container) {
      const primeiroFilme = container.querySelector("a"); // Seleciona o primeiro Link que contém a imagem
      if (primeiroFilme) {
        const larguraComEstilos = primeiroFilme.getBoundingClientRect().width; // Pega a largura total do link, incluindo margens e padding
        setLarguraFilme(larguraComEstilos); // Ajusta a largura com base no tamanho do link que contém a imagem
      }
    }
  };

  // Ajusta a largura do filme após o carregamento das imagens
  useEffect(() => {
    ajustarLarguraFilme();

    // Ajusta a largura da imagem quando a janela é redimensionada
    window.addEventListener("resize", ajustarLarguraFilme);

    // Limpa o event listener ao desmontar o componente
    return () => {
      window.removeEventListener("resize", ajustarLarguraFilme);
    };
  }, [categoriaFiltrada]);

  // Função para avançar o carrossel automaticamente a cada 3 segundos
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndiceAtualImagem((prevIndice) =>
        prevIndice + 1 === totalFilmes ? 0 : prevIndice + 1
      );
    }, 100000000);

    // Limpa o intervalo ao desmontar o componente
    return () => clearInterval(intervalId);
  }, [totalFilmes]);

  return (
    <section className={styles.section__container}>
      <div
        className={styles.section__container__filmes}
        ref={containerRef} // Referência ao contêiner
        style={{
          transform: `translateX(-${indiceAtualImagem * larguraFilme}px)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {categoriaFiltrada.map((filme) => (
          <Link key={filme.id} to={`/filmes/${filme.id}`}>
            <img
              className={styles.section__container__filmes__img}
              src={filme.poster}
              alt={filme.titulo}
              id={filme.id}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
