import { useEffect, useState } from "react";
import getDados from "../scripts/getDados";

interface Filme {
  id: string;
  titulo: string;
  poster: string;
  imdb: number;
  duracao: number;
  dataLancamento: string;
  diretor: string
  atores: string;
  genero: string;
  sinopse: string;
  trailer: string
}

interface UseFetchFilmes {
  endpoint: string;
}

export function useFetchFilmes({ endpoint }: UseFetchFilmes) {
  const [filmes, setFilmes] = useState<Filme[]>([]);

  useEffect(() => {
    async function fetchFilmes() {
      try {
        const data: Filme[] = await getDados(endpoint);
        setFilmes(data);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    }

    fetchFilmes();
  }, [endpoint]);

  return filmes;
}
