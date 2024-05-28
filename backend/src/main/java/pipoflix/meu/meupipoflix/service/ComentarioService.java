package pipoflix.meu.meupipoflix.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pipoflix.meu.meupipoflix.dto.ComentarioDTO;
import pipoflix.meu.meupipoflix.model.Comentario;
import pipoflix.meu.meupipoflix.repository.ComentariosRepository;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ComentarioService {

    @Autowired
    private ComentariosRepository repositorio;

    private ConverteDados conversor;

    private List<ComentarioDTO> converteDadosDto(List<Comentario> descricaoComentario) {
        return descricaoComentario.stream()
                .map(c -> new ComentarioDTO(c.getId(), c.getAutor(), c.getDescricaoComentario(), c.getDataComentario()))
                .collect(Collectors.toList());
    }

    public List<ComentarioDTO> obterTodosComentarios() {
        return converteDadosDto(repositorio.findAll());
    }

    public void criarComentario(ComentarioDTO comentarioDTO) {
        Comentario comentario = new Comentario();
        comentario.setAutor(comentarioDTO.autor());
        comentario.setDescricaoComentario(comentarioDTO.descricaoComentario());
        comentario.setDataComentario(comentarioDTO.dataComentario());

        // Adicionando log para verificar se os dados estão corretos
        System.out.println("Comentário a ser salvo: " + comentario);

        repositorio.save(comentario); // Salvando o comentário no banco de dados
    }
}
