import React, { useState } from "react";
import styles from "./comentarios.module.css";

interface Comentario {
  id: number;
  autor: string;
  comentario: string;
  data: Date;
}

export default function Comentarios() {
  const [autor, setAutor] = useState<string>("");
  const [comentario, setComentario] = useState<string>("");
  const [comentarios, setComentarios] = useState<Comentario[]>([]);

  const enviarFormulario = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const novoComentario = {
      id: Math.floor(Math.random() * 100000000000),
      autor: autor,
      comentario: comentario,
      data: new Date(),
    };

    setComentarios((estado) => [novoComentario, ...estado]);
    setAutor("");
    setComentario("");
  };

  return (
    <div className={`${styles.container} ${styles.display}`}>
      <h1>Seção de comentários</h1>
      <form
        className={`${styles.formulario} ${styles.display}`}
        onSubmit={enviarFormulario}
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
        {comentarios.length > 0 ? (
          comentarios.slice(0, 5).map((comentarioNovo) => (
            <div key={comentarioNovo.id}>
              <h3>{comentarioNovo.autor}</h3>
              <span>Em {comentarioNovo.data.toLocaleString()}</span>
              <p>{comentarioNovo.comentario}</p>
            </div>
          ))
        ) : (
          <p className={styles.semComentario}>Seja o primeiro a comentar!</p>
        )}
      </section>
    </div>
  );
}
