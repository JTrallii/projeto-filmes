interface DescricaoFilmeProps {
  title: string;
  imdb: number;
  lancamento: string;
  genero: string;
  formato: string;
  qualidade: string;
  audio: string;
  legenda: string;
  tamanho: string;
  duracao: string;
  qualidadeAudio: string;
  qualidadeVideo: string;
  servidor: string;
}

const DescricaoFilme: React.FC<DescricaoFilmeProps> = ({
  title,
  imdb,
  lancamento,
  genero,
  formato,
  qualidade,
  audio,
  legenda,
  tamanho,
  duracao,
  qualidadeAudio,
  qualidadeVideo,
  servidor,
}) => {
  return (
    <>
      <p>
        <b>Título: </b>
        {title}
      </p>
      <p>
        <b>IMDb: </b>
        <span>{imdb}</span>
      </p>
      <p>
        <b>Lançamento: </b>
        <span>{lancamento}</span>
      </p>
      <p>
        <b>Gênero: </b>
        <span>{genero}</span>
      </p>
      <p>
        <b>Formato: </b>
        <span>{formato}</span>
      </p>
      <p>
        <b>Qualidade: </b>
        <span>{qualidade}</span>
      </p>
      <p>
        <b>Áudio: </b>
        <span>{audio}</span>
      </p>
      <p>
        <b>Legenda: </b>
        <span>{legenda}</span>
      </p>
      <p>
        <b>Tamanho: </b>
        <span>{tamanho}</span>
      </p>
      <p>
        <b>Duração: </b>
        <span>{duracao}</span>
      </p>
      <p>
        <b>Qualidade de Áudio: </b>
        <span>{qualidadeAudio}</span>
      </p>
      <p>
        <b>Qualidade de Video: </b>
        <span>{qualidadeVideo}</span>
      </p>
      <p>
        <b>Servidor: </b>
        <span>{servidor}</span>
      </p>
    </>
  );
};

export default DescricaoFilme;
