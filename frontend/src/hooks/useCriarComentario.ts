import { useState } from "react";



const UseCriarComentario = () => {
  const [error, setError] = useState<string | null>(null);
  const baseURL = "http://localhost:8080";
  const dataAtual = new Date().toISOString();

  const criarComentario = async ({ autor, descricaoComentario, dataComentario, filmeId }: { autor: string, descricaoComentario: string, dataComentario: typeof dataAtual, filmeId: number }) => {
    try {
      console.log("Dados enviados para o servidor:", { autor, descricaoComentario, dataComentario, filmeId });
      const response = await fetch(`${baseURL}/filmes/${filmeId}/comentarios`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ autor, descricaoComentario, dataComentario, filmeId }),
      });

      if (!response.ok) {
        throw new Error("Erro ao criar comentário");
      }

      return true;
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Ocorreu um erro ao criar o comentario");
      }
      return false;
    }
  };

  return { criarComentario, error };
};

export default UseCriarComentario;
