package pipoflix.meu.meupipoflix.model;


import aj.org.objectweb.asm.commons.Remapper;
import jakarta.persistence.*;

import java.util.Collections;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "filmes")
public class Filme {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true)
    private String titulo;
    private String sinopse;
    private String duracao;
    private String poster;
    private Date dataLancamento;
    private String diretor;
    private String atores;
    private Double imdb;
    @Enumerated(EnumType.STRING)
    private Categoria genero;
    private String trailer;

    public Filme(){}

    public Filme(Long id, String titulo, String sinopse,
                 String duracao, String poster, Date dataLancamento,
                 String diretor, String atores, Double imdb,
                 Categoria genero, String trailer) {
        this.id = id;
        this.titulo = titulo;
        this.sinopse = sinopse;
        this.duracao = duracao;
        this.poster = poster;
        this.dataLancamento = dataLancamento;
        this.diretor = diretor;
        this.atores = atores;
        this.imdb = imdb;
        this.genero = Categoria.fromString(String.valueOf(genero));
        this.trailer = trailer;
    }

    public Long getId() {
        return id;
    }

    public String getTitulo() {
        return titulo;
    }

    public String getSinopse() {
        return sinopse;
    }

    public String getDuracao() {
        return duracao;
    }

    public String getPoster() {
        return poster;
    }

    public Date getDataLancamento() {
        return dataLancamento;
    }

    public String getDiretor() {
        return diretor;
    }

    public String getAtores() {
        return atores;
    }

    public Double getImdb() {
        return imdb;
    }

    public Categoria getGenero() {
        return genero;
    }

    public String getTrailer() {
        return trailer;
    }

    @Override
    public String toString() {
        return "Filme{" +
                "id=" + id +
                ", titulo='" + titulo + '\'' +
                ", sinopse='" + sinopse + '\'' +
                ", duracao='" + duracao + '\'' +
                ", poster='" + poster + '\'' +
                ", dataLancamento=" + dataLancamento +
                ", diretor='" + diretor + '\'' +
                ", atores='" + atores + '\'' +
                ", imdb=" + imdb +
                ", genero=" + genero +
                ", trailer='" + trailer + '\'' +
                '}';
    }
}
