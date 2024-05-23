const baseURL = "http://localhost:8080";

export default async function getDados(endpoint) {
  try {
    const response = await fetch(`${baseURL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`Erro ao acessar o endpoint: ${response.statusText}`);
    }
    const data = await response.json();
    if (typeof data === "object" && !Array.isArray(data)) {
      return [data];
    }
    return data;
  } catch (error) {
    console.error("Erro ao acessar o endpoint", error);
    return [];
  }
}
