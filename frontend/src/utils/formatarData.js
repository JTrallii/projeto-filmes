// Função para formatar a data no formato dd/mm/yyyy
export function formatarData(data) {
    const dataFormatada = new Date(data);
    const dia = dataFormatada.getDate().toString().padStart(2, "0");
    const mes = (dataFormatada.getMonth() + 1).toString().padStart(2, "0");
    const ano = dataFormatada.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

  