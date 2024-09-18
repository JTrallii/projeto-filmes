import React, { useEffect, useState } from "react";
import styles from "./secao.module.scss";
import { Link } from "react-router-dom";

interface Filme {
  titulo: string;
  path: string;
  id: number
}

interface SecaoPrincipalProps {
  filmes: Filme[];
}

export default function SecaoPrincipal({ filmes }: SecaoPrincipalProps) {
  const [indexFilme, setIndexFilme] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndexFilme((prevIndex) =>
        prevIndex === filmes.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000000);

    return () => clearInterval(intervalo);
  }, [filmes.length]);

  const slide = (index: number) => {
    setIndexFilme(index);
  };

  return (
    <section>
      <div className={styles.carrossel__container}>
        <div
          className={styles.carrossel__container__slides}
          style={{ transform: `translateX(-${indexFilme * 100}%)` }}
        >
          {filmes.map((image, index) => (
            <div
              className={styles.carrossel__container__slides__slide}
              key={index}
            >
              <Link key={image.titulo} to={`/filmes/${image.id}`}>
                <img
                  src={image.path}
                  alt={`Slide ${index}`}
                  className={styles.carrossel__container__slides__slide__img}
                />
                <div
                  className={styles.carrossel__container__slides__slide__text}
                >
                  <h1>{image.titulo}</h1>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.carrossel__dots}>
        {filmes.map((_, index) => (
          <div
            className={`${styles.carrossel__dots__dot} ${
              indexFilme === index ? styles["carrossel__dots__dot--ativo"] : ""
            }`}
            key={index}
            onClick={() => slide(index)}
          ></div>
        ))}
      </div>
    </section>
  );
}
