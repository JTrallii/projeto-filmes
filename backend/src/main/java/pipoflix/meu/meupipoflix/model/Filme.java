package pipoflix.meu.meupipoflix.model;


import aj.org.objectweb.asm.commons.Remapper;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.ArrayList;
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

    @OneToMany(mappedBy = "filme", cascade = CascadeType.ALL)
    //@JsonManagedReference na entidade Filme na propriedade comentarios
    //indica que esta é a "referência gerenciada". Esta será serializada normalmente.
    @JsonManagedReference
    private List<Comentario> comentarios;

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

    public List<Comentario> getComentarios() {
        return comentarios;
    }

    public void setComentarios(List<Comentario> comentarios) {
        comentarios.forEach(c -> c.setFilme(this));
        this.comentarios = comentarios;
    }

    public void adicionarComentario(Comentario comentario) {
        if (comentarios == null) {
            comentarios = new ArrayList<>();
        }
        comentarios.add(comentario);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getSinopse() {
        return sinopse;
    }

    public void setSinopse(String sinopse) {
        this.sinopse = sinopse;
    }

    public String getDuracao() {
        return duracao;
    }

    public void setDuracao(String duracao) {
        this.duracao = duracao;
    }

    public String getPoster() {
        return poster;
    }

    public void setPoster(String poster) {
        this.poster = poster;
    }

    public Date getDataLancamento() {
        return dataLancamento;
    }

    public void setDataLancamento(Date dataLancamento) {
        this.dataLancamento = dataLancamento;
    }

    public String getDiretor() {
        return diretor;
    }

    public void setDiretor(String diretor) {
        this.diretor = diretor;
    }

    public String getAtores() {
        return atores;
    }

    public void setAtores(String atores) {
        this.atores = atores;
    }

    public Double getImdb() {
        return imdb;
    }

    public void setImdb(Double imdb) {
        this.imdb = imdb;
    }

    public Categoria getGenero() {
        return genero;
    }

    public void setGenero(Categoria genero) {
        this.genero = genero;
    }

    public String getTrailer() {
        return trailer;
    }

    public void setTrailer(String trailer) {
        this.trailer = trailer;
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
