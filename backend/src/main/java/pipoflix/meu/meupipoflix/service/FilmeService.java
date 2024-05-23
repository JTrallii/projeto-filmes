package pipoflix.meu.meupipoflix.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pipoflix.meu.meupipoflix.dto.FilmeDTO;
import pipoflix.meu.meupipoflix.errors.FilmeNaoEncontradoException;
import pipoflix.meu.meupipoflix.model.Categoria;
import pipoflix.meu.meupipoflix.model.Filme;
import pipoflix.meu.meupipoflix.repository.FilmeRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class FilmeService {

    @Autowired
    private FilmeRepository repositorio;

    public List<FilmeDTO> obterTodosOsFilmes() {
        return converteDadosDto(repositorio.findAll());
    }

    private List<FilmeDTO> converteDadosDto(List<Filme> filmes) {
        return filmes.stream()
                .map(f -> new FilmeDTO(f.getId(), f.getTitulo(), f.getSinopse(), f.getDuracao(), f.getPoster(), f.getDataLancamento(), f.getDiretor(),
                                        f.getAtores(), f.getImdb(), f.getTrailer(), f.getGenero()))
                .collect(Collectors.toList());
    }

    public FilmeDTO obterPorTitulo(String nomeFilme) throws FilmeNaoEncontradoException {
        Optional<Filme> tituloEncontrado = repositorio.findByTituloContainingIgnoreCase(nomeFilme);

        if (tituloEncontrado.isPresent()) {
            Filme f = tituloEncontrado.get();
            return new FilmeDTO(f.getId(), f.getTitulo(), f.getSinopse(), f.getDuracao(), f.getPoster(), f.getDataLancamento(), f.getDiretor(),
                                f.getAtores(), f.getImdb(), f.getTrailer(), f.getGenero());
        } else {
            throw new FilmeNaoEncontradoException("Filme não encontrado para o Titulo: " + nomeFilme);
        }

    }

    public FilmeDTO obterPorId(Long id) throws FilmeNaoEncontradoException {
        Optional<Filme> filmeEncontrado = repositorio.findById(id);

        if (filmeEncontrado.isPresent()) {
            Filme f = filmeEncontrado.get();
            return new FilmeDTO(f.getId(), f.getTitulo(), f.getSinopse(), f.getDuracao(), f.getPoster(), f.getDataLancamento(), f.getDiretor(),
                                f.getAtores(), f.getImdb(), f.getTrailer(), f.getGenero());
        } else {
            throw new FilmeNaoEncontradoException("Filme não encontrado para o ID: " + id);
        }
    }

    public List<FilmeDTO> obterFilmesPorCategoria(String nomeCategoria) {
        Categoria categoria = Categoria.fromString(nomeCategoria);
        return converteDadosDto(repositorio.findByGenero(categoria));
    }

    public List<FilmeDTO> obterFilmesPorImdb() {
        return converteDadosDto(repositorio.filmesPorImdb());
    }

    public List<FilmeDTO> obterFilmesPorData() {
        return converteDadosDto(repositorio.filmesPorData());
    }
}
