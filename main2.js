const apiKey = `e0a459495a2f5bd0b33fa6cc`;
const ApiURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;

// função apara consulta de taxa de cambio de API
// #########################################################################################################################################
async function getExgaente(daMoeda, paraMoeda) {
  try {
    const response = await fetch(`${ApiURL}${daMoeda}`);
    const data = response.json();
    if (data.result === "succes") {
      return data.conversion_rates[paraMoeda];
    } else {
      throw new error("erro ao buscar taxa de cambio");
    }
  } catch (error) {
    console.error("erro:",error);
    return null;
  }
}
// ##################################################################################################################
document.getElementById('form').addEventListener('submit',async function(event){
    event.preventDefault();

    // Obter valores de entrada
    const valor = parseFloat(document.getElementById('valor').value);
    const Damoeda = document.getElementById('Damoeda').value;
    const Paramoeda = document.getElementById('Paramoeda').value;

    const getExgaente = await getExgaenteRate(Damoeda, Paramoeda);
if(getExgaenteRate){
    const ConvertedValue = valor * exchangeRate;

    const Resultado = document.getElementById(Resultado);
    conversao.textContent = `Resultado: ${ConvertedValue.toFixed(2)}${Paramoeda}`;
} else{
    alert('Erro ao buscar a cotação. Tente novamente');
}
});