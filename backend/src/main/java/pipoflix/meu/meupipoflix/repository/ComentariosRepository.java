package pipoflix.meu.meupipoflix.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pipoflix.meu.meupipoflix.model.Comentario;

public interface ComentariosRepository extends JpaRepository<Comentario, Long> {
}
