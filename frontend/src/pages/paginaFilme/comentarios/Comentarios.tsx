import React, { useEffect, useState } from "react";
import styles from "./comentarios.module.css";
import UseCriarComentario from "hooks/useCriarComentario";
import { useFetchComentarios } from "hooks/useFetchComentarios";

interface ComentariosProps {
  filmeId: number;
}

export default function Comentarios({ filmeId }: ComentariosProps) {
  const [autorInput, setAutorInput] = useState<string>("");
  const [comentarioInput, setComentarioInput] = useState<string>("");
  const { criarComentario } = UseCriarComentario();
  const { comentarios, fetchComentarios } = useFetchComentarios({ endpoint: `/filmes/${filmeId}/comentarios` });

  useEffect(() => {
    fetchComentarios();
  }, [filmeId, fetchComentarios]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const dataAtual = new Date().toISOString();
    const sucesso = await criarComentario({
      autor: autorInput,
      descricaoComentario: comentarioInput,
      dataComentario: dataAtual,
      filmeId: filmeId,
    });
    if (sucesso) {
      setAutorInput("");
      setComentarioInput("");
      await fetchComentarios();
    }
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
        {comentarios.slice().reverse().map((comentario) => (
          <div className={`${styles.comentarios_descricao} ${styles.montserrat_comentario}`} key={comentario.id}>
            <h2><span>Autor: </span>{comentario.autor}</h2>
            <h3><span>Comentário: </span></h3>
            <p>{comentario.descricaoComentario}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
