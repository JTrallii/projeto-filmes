// import getDados from "./getDados";



// const urls = ["/filmes"];
// const ultimasPostagens = document.getElementById("section-ultimas-postagens");

// function criarListaFilmes(elemento, dados) {
//     const divExistente = document.querySelector("div");

//     if (divExistente) {
//         elemento.removeChild(divExistente);
//     }

//     const div = document.createElement("div");
//     const listaHTML = dados.map((filme) => `
//     <div className={styles.container}>
//         <h1>Teste ${filme.titulo}</h1>
        
//     </div>
// `).join("");
//     div.innerHTML = listaHTML;
//     elemento.appendChild(div);
// }


// export async function geraFilmes(elemento) {
//     try {
//         const data = await Promise.all(urls.map(url => getDados(url)));
//         console.table(ultimasPostagens);
//         criarListaFilmes(elemento, data[0]);
//     } catch (error) {
//         console.error("Ocorreu um erro ao carregar os dados ", error);
//     }
// }

// geraFilmes(ultimasPostagens);