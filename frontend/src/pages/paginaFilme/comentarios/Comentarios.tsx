import React, { useEffect, useState } from "react";
import styles from "./comentarios.module.css";
import UseCriarComentario from "hooks/useCriarComentario";

interface Comentario {
  id: number;
  autor: string;
  comentario: string;
  data: Date;
}

export default function Comentarios() {
  const [autor, setAutor] = useState<string>("");
  const [comentario, setComentario] = useState<string>("");
  const { criarComentario } = UseCriarComentario();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    criarComentario({ autor, comentario });
    setAutor("");
    setComentario("");

  return (
    <div className={`${styles.container} ${styles.display}`}>
      <h1>Seção de comentários</h1>
      <form
        className={`${styles.formulario} ${styles.display}`}
        onSubmit={handleSubmit}
      >
        <label id="autor" htmlFor="autor">
          Autor do comentário:
        </label>
        <input
          type="text"
          id="autor"
          required
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        />
        <label htmlFor="comentario">Comentário:</label>
        <textarea
          id="comentario"
          cols={30}
          rows={6}
          required
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
        ></textarea>
        <button type="submit">ENVIAR COMENTÁRIO</button>
      </form>
      <section className={styles.comentarios}>
        
      </section>
    </div>
  );
}
}
