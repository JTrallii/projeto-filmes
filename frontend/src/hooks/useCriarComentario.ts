import { useState } from "react";

type ComentarioData = {
  autor: string;
  comentario: string;
};

type UseCriarComentarioResult = {
  criarComentario: (comentarioData: ComentarioData) => Promise<boolean>;
  error: string | null;
};

const UseCriarComentario = (): UseCriarComentarioResult => {
  const [error, setError] = useState<string | null>(null);

  const criarComentario = async (comentarioData: ComentarioData): Promise<boolean> => {
    setError(null);

    try {
      const response = await fetch("/comentarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comentarioData),
      });

      if (!response.ok) {
        throw new Error("Erro ao criar comentário");
      }

      return true;
    } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Ocorreu um erro desconhecido");
        }
        return false;
      }
  };

  return { criarComentario, error };
};

export default UseCriarComentario;
