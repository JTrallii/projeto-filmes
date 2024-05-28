package pipoflix.meu.meupipoflix.dto;

import java.time.LocalDateTime;

public record ComentarioDTO(Long id,
                            String autor,
                            String descricaoComentario,
                            LocalDateTime dataComentario) {
}
