const apiKey = `e0a459495a2f5bd0b33fa6cc`;
const ApiURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;

// função apara consulta de taxa de cambio de API
// #########################################################################################################################################
async function getExgaente(daMoeda, paraMoeda) {
  try {
    const response = await fetch(`${apiURL}${daMoeda}`);
    const data = response.json();
    if (data.reslt === "succes") {
      return data.conversion_rates[paraMoeda];
    } else {
      throw new error("erro ao buscar taxa de cambio");
    }
  } catch (error) {
    console.error("erro:", error);
    return null;
  }
}
// ##################################################################################################################
