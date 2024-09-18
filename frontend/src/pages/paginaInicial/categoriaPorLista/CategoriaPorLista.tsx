import { Link } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import ImgPrincipal from "components/ImgPrincipal/ImgPrincipal";
import { useFetchFilmes } from "hooks/useFetchFilmes";
import styles from "./categoria.module.scss";

interface Filme {
  titulo: string;
  poster: string;
  id: string;
}

interface CategoriaPorListaProps {
  tituloFiltrado: string;
  categoriaFiltrada: Filme[];
}


export default function CategoriaPorLista({ tituloFiltrado, categoriaFiltrada }: CategoriaPorListaProps) {
  const ultimasPostagens = useFetchFilmes({ endpoint: "/filmes/ultimos-lancamentos" });
  const [indiceAtualImagem, setIndiceAtualImagem] = useState(0); // Mantém o índice da imagem atual no carrossel.
  const [isDragging, setIsDragging] = useState(false); // Verifica se o usuário está arrastando a imagem.
  const [posicaoInicial, setPosicaoInicial] = useState(0); // Guarda a posição inicial do arraste.
  const [posicaoAtualCarrosselAposArraste, setPosicaoAtualCarrosselAposArraste] = useState(0); // Guarda a posição atual do carrossel conforme o arraste.
  const [posicaoCarrosselAntesArraste, setPosicaoCarrosselAntesArraste] = useState(0); // Guarda a posição do carrossel antes do arraste.
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const handleScroll = () => {
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft >= maxScrollLeft) {
          container.scrollLeft = maxScrollLeft; // Garante que o scroll não ultrapasse o máximo
        }
      };

      container.addEventListener("scroll", handleScroll);

      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, [containerRef.current]);

  //-------------------------- EVENTO DE CLIQUE --------------------------

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setPosicaoInicial(e.touches[0].clientX);  //  captura a posição horizontal do primeiro toque.
    setPosicaoCarrosselAntesArraste(posicaoAtualCarrosselAposArraste);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      const valorPosicao = e.touches[0].clientX;
      const diff = valorPosicao - posicaoInicial;
      console.log("Movimento de arraste:", diff);
      setPosicaoAtualCarrosselAposArraste(posicaoCarrosselAntesArraste + diff);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    const movedBy = posicaoAtualCarrosselAposArraste - posicaoCarrosselAntesArraste;
  
    if (movedBy < -100 && indiceAtualImagem < ultimasPostagens.length - 1) {
      // Se o movimento foi suficiente para ir para a próxima imagem, e ainda não estamos na última
      setIndiceAtualImagem((prev) => Math.min(prev + 1, ultimasPostagens.length - 1));
    } else if (movedBy > 100 && indiceAtualImagem > 0) {
      // Se o movimento foi suficiente para voltar para a imagem anterior
      setIndiceAtualImagem((prev) => Math.max(prev - 1, 0));
    }
  
    setPosicaoAtualCarrosselAposArraste(0);
    setPosicaoCarrosselAntesArraste(0);
  };

  //-------------------------- EVENTO DE MOUSE --------------------------

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setPosicaoInicial(e.clientX);
    setPosicaoCarrosselAntesArraste(posicaoAtualCarrosselAposArraste);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      const valorPosicao = e.clientX;
      const diff = valorPosicao - posicaoInicial;
      setPosicaoAtualCarrosselAposArraste(posicaoCarrosselAntesArraste + diff);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    const movedBy = posicaoAtualCarrosselAposArraste - posicaoCarrosselAntesArraste;
  
    if (movedBy < -100 && indiceAtualImagem < ultimasPostagens.length - 1) {
      setIndiceAtualImagem((prev) => Math.min(prev + 1, ultimasPostagens.length - 1));
    } else if (movedBy > 100 && indiceAtualImagem > 0) {
      setIndiceAtualImagem((prev) => Math.max(prev - 1, 0));
    }
  
    setPosicaoAtualCarrosselAposArraste(0);
    setPosicaoCarrosselAntesArraste(0);
  };

  return (
    <section
        className={styles.section__container}
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => setIsDragging(false)} 
      >
        <p className={styles.section__container__paragrafo}>{tituloFiltrado}</p>
        <div
          className={styles.section__container__filmes}
          style={{ transform: `translateX(-${indiceAtualImagem * 50}%)` }}
        >
          {categoriaFiltrada.slice(0, 20).map((filme) => (
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
