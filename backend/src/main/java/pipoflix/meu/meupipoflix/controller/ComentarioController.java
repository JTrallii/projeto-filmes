package pipoflix.meu.meupipoflix.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pipoflix.meu.meupipoflix.dto.ComentarioDTO;
import pipoflix.meu.meupipoflix.model.Comentario;
import pipoflix.meu.meupipoflix.model.Filme;
import pipoflix.meu.meupipoflix.repository.ComentariosRepository;
import pipoflix.meu.meupipoflix.repository.FilmeRepository;
import pipoflix.meu.meupipoflix.service.ComentarioService;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/filmes")
public class ComentarioController {

    @Autowired
    private ComentarioService servicoComentario;

    @Autowired
    private FilmeRepository filmeRepositorio;

    @Autowired
    private ComentariosRepository comentarioRepositorio;

    //ResponseEntity<?> indica que o método retornará um objeto
    //ResponseEntity com um corpo de resposta de qualquer tipo (? significa "qualquer tipo").
    //A anotação @RequestBody indica que o corpo da solicitação HTTP
    //será convertido em um objeto ComentarioDTO automaticamente pelo Spring.
    //ResponseEntity.ok() é um atalho que cria uma resposta HTTP com o status 200 OK.
    //.build() finaliza a construção do ResponseEntity sem incluir um corpo de resposta.
    //Portanto, return ResponseEntity.ok().build(); envia uma resposta HTTP 200 OK
    //sem um corpo de resposta específico, indicando que a operação foi bem-sucedida.
    @PostMapping("/{id}/comentarios")
    public ResponseEntity<?> criarComentario(@PathVariable Long id, @RequestBody ComentarioDTO comentarioDTO) {
        Optional<Filme> filmeOptional = filmeRepositorio.findById(id);
        if (!filmeOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Filme não encontrado");
        }
        Filme filme = filmeOptional.get();

        Comentario comentarioCriado = new Comentario();
        comentarioCriado.setAutor(comentarioDTO.autor());
        comentarioCriado.setDescricaoComentario(comentarioDTO.descricaoComentario());
        comentarioCriado.setDataComentario(comentarioDTO.dataComentario());
        comentarioCriado.setFilme(filme);

        comentarioRepositorio.save(comentarioCriado);

        return ResponseEntity.status(HttpStatus.CREATED).body(comentarioDTO);
    }

    @GetMapping("/{id}/comentarios")
    public ResponseEntity<List<Comentario>> obterComentariosPorFilme(@PathVariable Long id) {
        Optional<Filme> filmeOptional = filmeRepositorio.findById(id);
        if (!filmeOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
        List<Comentario> comentarios = comentarioRepositorio.findByFilmeId(id);
        return ResponseEntity.ok(comentarios);
    }
}
