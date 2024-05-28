package pipoflix.meu.meupipoflix.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pipoflix.meu.meupipoflix.dto.ComentarioDTO;
import pipoflix.meu.meupipoflix.model.Comentario;
import pipoflix.meu.meupipoflix.repository.ComentariosRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ComentarioService {

    @Autowired
    private ComentariosRepository repositorio;

    private List<ComentarioDTO> converteDadosDto(List<Comentario> descricaoComentario) {
        return descricaoComentario.stream()
                .map(c -> new ComentarioDTO(c.getId(), c.getAutor(), c.getDescricaoComentario(), c.getDataComentario()))
                .collect(Collectors.toList());
    }

    public List<ComentarioDTO> obterTodosComentarios() {
        return converteDadosDto(repositorio.findAll());
    }

    public void criarComentario(ComentarioDTO comentarioDTO) {
        if (comentarioDTO.autor() == null || comentarioDTO.autor().isEmpty()) {
            throw new IllegalArgumentException("O autor do comentário não pode ser vazio !");
        }
        if (comentarioDTO.descricaoComentario() == null || comentarioDTO.descricaoComentario().isEmpty() || comentarioDTO.descricaoComentario().length() > 500) {
            throw new IllegalArgumentException("O comentário não pode ser vazio e conter no máximo 500 caracteres ! !");
        }
        Comentario comentario = new Comentario();
        comentario.setAutor(comentarioDTO.autor());
        comentario.setDescricaoComentario(comentarioDTO.descricaoComentario());
        comentario.setDataComentario(comentarioDTO.dataComentario());

        repositorio.save(comentario);
    }
}
