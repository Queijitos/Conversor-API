const apiKey = `e0a459495a2f5bd0b33fa6cc`
const ApiURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`

// Consulta da Taca de cambio Via Api  
function obterTaxaCambio(MoedaOrigem) {
const url = `${ApiURL}${MoedaOrigem}`;

// Pega uma requisição do GET API
fetch(url)
.then(Response => {
    if(!Response.ok){
        throw new Error ('Erro Ao Acessar sua API');
    }
    return Response.json();
}) 
.then(data=> {
    console.log(`Taxas de cambio para ${MoedaOrigem}:`,data.conversion_rates)
})
.catch(Error => {
    console.error(`error:`, Error)
})
}
obterTaxaCambio('USD');