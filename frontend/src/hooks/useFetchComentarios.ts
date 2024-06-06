import { useCallback, useEffect, useState } from "react";
import getDados from "../scripts/getDados";

interface Comentario {
  id: string;
  autor: string;
  descricaoComentario: string;
  dataComentario: string;
}

interface UseFetchComentariosProps {
  endpoint: string;
}

export function useFetchComentarios({ endpoint }: UseFetchComentariosProps) {
  const [comentarios, setComentarios] = useState<Comentario[]>([]);

  useEffect(() => {
    fetchComentarios();
  }, [endpoint]);

  const fetchComentarios = useCallback(async () => {
    try {
      const data: Comentario[] = await getDados(endpoint);
      setComentarios(data);
    } catch (error) {
      console.error("Erro ao buscar comentários:", error);
    }
  }, [endpoint]);

  return { comentarios, fetchComentarios };
}
