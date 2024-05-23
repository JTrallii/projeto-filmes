package pipoflix.meu.meupipoflix.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pipoflix.meu.meupipoflix.dto.FilmeDTO;
import pipoflix.meu.meupipoflix.errors.FilmeNaoEncontradoException;
import pipoflix.meu.meupipoflix.model.Categoria;
import pipoflix.meu.meupipoflix.service.FilmeService;

import java.util.List;


@RestController
@RequestMapping("/filmes")
public class FilmeController {

    @Autowired
    private FilmeService servico;

    @GetMapping
    public List<FilmeDTO> obterFilmes() {
        return servico.obterTodosOsFilmes();
    }

    @GetMapping("/titulo/{nomeFilme}")
    public FilmeDTO obterPorTitulo(@PathVariable String nomeFilme) throws FilmeNaoEncontradoException {
        return servico.obterPorTitulo(nomeFilme);
    }

    @GetMapping("/id/{id}")
    public FilmeDTO obterPorId(@PathVariable Long id) throws FilmeNaoEncontradoException {
        return servico.obterPorId(id);
    }

    @GetMapping("/categoria/{nomeCategoria}")
    public List<FilmeDTO> obterFilmesPorCategoria(@PathVariable Categoria nomeCategoria) {
        return servico.obterFilmesPorCategoria(nomeCategoria.toString());
    }

    @GetMapping("/top5")
    public List<FilmeDTO> obterFilmesPorImdb() {
        return servico.obterFilmesPorImdb();
    }

    @GetMapping("/ultimos-lancamentos")
    public List<FilmeDTO> obterFilmesPorData() {
        return servico.obterFilmesPorData();
    }


}
