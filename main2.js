const apiKey = `e0a459495a2f5bd0b33fa6cc`;
const ApiURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;

// Função para consulta de taxa de câmbio da API
async function getExchangeRate(daMoeda, paraMoeda) {
  try {
    const response = await fetch(`${ApiURL}${daMoeda}`);
    const data = await response.json();  // Corrigido para usar await
    if (data.result === "success") {
      return data.conversion_rates[paraMoeda];
    } else {
      throw new Error("Erro ao buscar taxa de câmbio");
    }
  } catch (error) {
    console.Error("Erro:", error);
    return null;
  }
}

document.getElementById('form').addEventListener('submit', async function(event) {
  event.preventDefault();

  // Obter valores de entrada
  const valor = parseFloat(document.getElementById('valor').value);
  const daMoeda = document.getElementById('Damoeda').value;
  const paraMoeda = document.getElementById('Paramoeda').value;

  const exchangeRate = await getExchangeRate(daMoeda, paraMoeda);

  if (exchangeRate) {
    const convertedValue = valor * exchangeRate;

    const resultado = document.getElementById("resultado");
    resultado.textContent = `Resultado: ${convertedValue.toFixed(2)}${paraMoeda}`;
  } else {
    alert('Erro ao buscar a cotação. Tente novamente');
  }
});
function alternarCor() {
  // Alterna a classe "modo-escuro" no corpo da página
  document.body.classList.toggle("modo-escuro");
  document.getElementById('form').classList.toggle("modo-escuro");
}
