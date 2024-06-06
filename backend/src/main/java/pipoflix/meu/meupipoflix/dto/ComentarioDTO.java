package pipoflix.meu.meupipoflix.dto;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public record ComentarioDTO(Long id,
                            String autor,
                            String descricaoComentario,
                            LocalDateTime dataComentario) {
}
