package pipoflix.meu.meupipoflix.service;

public interface IConverteDados {
    <T> T  obterDados(String json, Class<T> classe);
}
