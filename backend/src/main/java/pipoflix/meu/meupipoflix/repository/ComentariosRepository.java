package pipoflix.meu.meupipoflix.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pipoflix.meu.meupipoflix.model.Comentario;

import java.util.List;

public interface ComentariosRepository extends JpaRepository<Comentario, Long> {
    List<Comentario> findByFilmeId(Long id);
}
