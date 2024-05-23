package pipoflix.meu.meupipoflix.model;

import com.fasterxml.jackson.annotation.JsonValue;

public enum Categoria {
    ACAO("Ação"),
    COMEDIA("Comédia"),
    ROMANCE("Romance"),
    DRAMA("Drama"),
    CRIME("Crime"),
    AVENTURA("Aventura"),
    SUSPENSE("Suspense"),
    TERROR("Terror"),
    FANTASIA("Fantasia");

    private final String genero;

    Categoria(String nomeGenero) {
        this.genero = nomeGenero;
    }

    @JsonValue
    public String getGenero() {
        return this.genero;
    }

    public static Categoria fromString(String nomeCategoria) {
        try {
            return Categoria.valueOf(nomeCategoria.toUpperCase());
        } catch (IllegalArgumentException e) {
            throw new IllegalArgumentException("Categoria inválida: " + nomeCategoria);
        }
    }
}


