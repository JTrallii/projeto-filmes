import React, { useEffect, useState } from "react";
import styles from "./secao.module.scss";


interface SecaoPrincipalProps {
  filmes: string[];
}

export default function SecaoPrincipal({ filmes }: SecaoPrincipalProps) {
  const [indexFilme, setIndexFilme] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndexFilme((prevIndex) =>
        prevIndex === filmes.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000000);

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
              <img
                src={image}
                alt={`Slide ${index}`}
                className={styles.carrossel__container__slides__slide__img}
              />
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
