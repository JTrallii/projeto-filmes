import React from "react";
import styles from "./imgPrincipal.module.scss";

interface ImgPrincipalProps {
  path: string;
  titulo: string;
  id: string;
}

export default function ImgPrincipal({ path, titulo, id }: ImgPrincipalProps) {
  return (
    <div>
      <img
        className={styles.img}
        src={path}
        alt={titulo}
        id={id}
      />
    </div>
  );
}
