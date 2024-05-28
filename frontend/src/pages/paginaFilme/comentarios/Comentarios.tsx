import React, { useState } from "react";
import styles from "./comentarios.module.css";
import UseCriarComentario from "hooks/useCriarComentario";



export default function Comentarios() {
  const [autorInput, setAutorInput] = useState<string>("");
  const [comentarioInput, setComentarioInput] = useState<string>("");
  const { criarComentario } = UseCriarComentario();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const dataAtual = new Date().toISOString();
    criarComentario({ autor: autorInput, descricaoComentario: comentarioInput, dataComentario: dataAtual });
    setAutorInput("");
    setComentarioInput("");
    console.log(autorInput);
    console.log(comentarioInput);
  };

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
          value={autorInput}
          onChange={(e) => setAutorInput(e.target.value)}
        />
        <label htmlFor="comentario">Comentário:</label>
        <textarea
          id="comentario"
          cols={30}
          rows={6}
          required
          value={comentarioInput}
          onChange={(e) => setComentarioInput(e.target.value)}
        ></textarea>
        <button type="submit">ENVIAR COMENTÁRIO</button>
      </form>
      <section className={styles.comentarios}>
      </section>
    </div>
  );
}

