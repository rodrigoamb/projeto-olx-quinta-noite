export async function fetchDataMyAnuncios() {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(
      `https://dc-classificados.up.railway.app/api/anuncios/getAllMyAnuncios?userId=${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      return response.message;
    }
  } catch (error) {
    console.error("Erro ao carregar os seus anúncios", error);
  }
}
