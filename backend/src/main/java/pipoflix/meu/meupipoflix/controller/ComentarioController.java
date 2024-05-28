package pipoflix.meu.meupipoflix.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pipoflix.meu.meupipoflix.dto.ComentarioDTO;
import pipoflix.meu.meupipoflix.service.ComentarioService;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;


@RestController
@RequestMapping("/comentarios")
public class ComentarioController {

    @Autowired
    private ComentarioService servicoComentario;

    //ResponseEntity<?> indica que o método retornará um objeto
    //ResponseEntity com um corpo de resposta de qualquer tipo (? significa "qualquer tipo").
    //A anotação @RequestBody indica que o corpo da solicitação HTTP
    //será convertido em um objeto ComentarioDTO automaticamente pelo Spring.
    //ResponseEntity.ok() é um atalho que cria uma resposta HTTP com o status 200 OK.
    //.build() finaliza a construção do ResponseEntity sem incluir um corpo de resposta.
    //Portanto, return ResponseEntity.ok().build(); envia uma resposta HTTP 200 OK
    //sem um corpo de resposta específico, indicando que a operação foi bem-sucedida.
    @PostMapping
    public ResponseEntity<?> criarComentario(@RequestBody ComentarioDTO comentarioDTO) {
        servicoComentario.criarComentario(comentarioDTO);
        return ResponseEntity.ok().build();
    }
}
