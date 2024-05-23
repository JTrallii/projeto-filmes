package pipoflix.meu.meupipoflix.dto;

import pipoflix.meu.meupipoflix.model.Categoria;
import java.util.Date;

public record FilmeDTO(Long id,
                       String titulo,
                       String sinopse,
                       String duracao,
                       String poster,
                       Date dataLancamento,
                       String diretor,
                       String atores,
                       Double imdb,
                       String trailer,
                       Categoria genero) {
}
