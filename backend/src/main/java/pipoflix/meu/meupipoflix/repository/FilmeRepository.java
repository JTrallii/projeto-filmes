package pipoflix.meu.meupipoflix.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import pipoflix.meu.meupipoflix.model.Categoria;
import pipoflix.meu.meupipoflix.model.Filme;

import java.util.List;
import java.util.Optional;

public interface FilmeRepository extends JpaRepository<Filme, Long> {

    Optional<Filme> findByTituloContainingIgnoreCase(String nomeFilme);

    List<Filme> findByGenero(Categoria categoria);

    @Query("SELECT f FROM Filme f ORDER BY f.imdb DESC")
    List<Filme> filmesPorImdb();

    @Query("SELECT f FROM Filme f ORDER BY f.dataLancamento DESC")
    List<Filme> filmesPorData();


}
