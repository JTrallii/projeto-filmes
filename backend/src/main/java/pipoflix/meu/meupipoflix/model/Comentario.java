package pipoflix.meu.meupipoflix.model;


import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "comentarios")
public class Comentario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String autor;
    private String descricaoComentario;
    private LocalDateTime dataComentario;

    @ManyToOne
    @JoinColumn(name = "filme_id")
    private Filme filme;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public String getDescricaoComentario() {
        return descricaoComentario;
    }

    public void setDescricaoComentario(String descricaoComentario) {
        this.descricaoComentario = descricaoComentario;
    }

    public LocalDateTime getDataComentario() {
        return dataComentario;
    }

    public void setDataComentario(LocalDateTime dataComentario) {
        this.dataComentario = dataComentario;
    }

    public Filme getFilme() {
        return filme;
    }

    public void setFilme(Filme filme) {
        this.filme = filme;
    }

    @Override
    public String toString() {
        return "Comentario{" +
                "id=" + id +
                ", autor='" + autor + '\'' +
                ", descricaoComentario='" + descricaoComentario + '\'' +
                ", dataComentario=" + dataComentario +
                ", filme=" + filme +
                '}';
    }
}
