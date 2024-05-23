package pipoflix.meu.meupipoflix.model;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Date;

@JsonIgnoreProperties(ignoreUnknown = true)
public record DadosFilme(@JsonAlias("Title") String titulo,
                         @JsonAlias("Plot") String sinopse,
                         @JsonAlias("Runtime") String duracao,
                         @JsonAlias("Poster") String poster,
                         @JsonAlias("Year") Date dataLancamento,
                         @JsonAlias("Director") String diretor,
                         @JsonAlias("Actors") String atores,
                         @JsonAlias("imdbRating") Double imdb,
                         @JsonAlias("Genre") String genero) {
}
