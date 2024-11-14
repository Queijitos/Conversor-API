# Conversor de Moedas com API

Este projeto é um conversor de moedas simples que usa a [API ExchangeRate](https://www.exchangerate-api.com/) para obter taxas de câmbio e calcular o valor convertido entre diferentes moedas. A interface permite selecionar a moeda de origem, a moeda de destino e o valor a ser convertido. 

## Funcionalidades

1. **Conversão de Moedas**: Calcula o valor convertido entre duas moedas com base nas taxas de câmbio atuais.
2. **Alternância de Modo Escuro/Claro**: O usuário pode alternar o esquema de cores da página entre modo claro e escuro.
3. **Interface Intuitiva**: Interface com formulário simples para inserção de dados.

## Estrutura do Código

### HTML
O HTML é responsável pela estrutura da interface de usuário. Ele define o formulário de entrada de dados para a conversão de moedas, além do botão de alternância de cores.

### CSS
O CSS define o estilo visual, com suporte a modo escuro e claro.

### JavaScript

O arquivo JavaScript (`main2.js`) contém as principais funções para obter dados da API e processar a conversão de moedas. Abaixo, a explicação do código:

---

## Explicação do Código JavaScript

```javascript
const apiKey = `e0a459495a2f5bd0b33fa6cc`;
const ApiURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;

* apiKey: Chave de API necessária para autenticação ao acessar a ExchangeRate API.
* ApiURL: URL base da API para obter as taxas de câmbio.

## Função getExchangeRate
async function getExchangeRate(daMoeda, paraMoeda) {
  try {
    const response = await fetch(`${ApiURL}${daMoeda}`);
    const data = await response.json();
    if (data.result === "success") {
      return data.conversion_rates[paraMoeda];
    } else {
      throw new Error("Erro ao buscar taxa de câmbio");
    }
  } catch (error) {
    console.error("Erro:", error);
    return null;
  }
}
```
* Descrição: Esta função assíncrona busca a taxa de câmbio entre duas moedas.
* daMoeda: Moeda de origem.
* paraMoeda: Moeda de destino.
### Passos:
* Usa fetch para acessar a API com a moeda de origem (daMoeda).
* Converte a resposta para JSON e verifica se a chamada foi bem-sucedida (data.result === "success").
* Retorna a taxa de conversão (data.conversion_rates[paraMoeda]) ou exibe um erro.

## Event Listener no Formulário
````javascript
document.getElementById('form').addEventListener('submit', async function(event) {
  event.preventDefault();
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
````
* Descrição: Este código adiciona um "escutador de eventos" ao formulário que é acionado quando o usuário envia o formulário para converter moedas.
* Passos:
* Previne o comportamento padrão do formulário (event.preventDefault()).
* Coleta o valor de entrada (valor), moeda de origem (daMoeda) e moeda de destino (paraMoeda).
* Chama getExchangeRate para obter a taxa de conversão e, se bem-sucedida, calcula o valor convertido.
* Exibe o valor convertido na interface. Em caso de erro, exibe um alerta.

## Função alternarCor
```Javascript
function alternarCor() {
  document.body.classList.toggle("modo-escuro");
  document.getElementById('form').classList.toggle("modo-escuro");
}
```
* Descrição: Alterna entre os modos claro e escuro da interface.
* Passos:
*Alterna a classe modo-escuro no body e no formulário (form). Quando essa classe é adicionada, os estilos de modo escuro são aplicados automaticamente.
## Como Usar o Conversor de Moedas
* brir o Arquivo HTML: Abra o arquivo HTML em um navegador.
### Converter Moedas:
* Insira o valor a ser convertido.
* Selecione a moeda de origem e a moeda de destino.
* Clique em "Converter" para ver o resultado.
** Alternar Modo Escuro/Claro: Clique no botão "Alternar Cor" para mudar o modo de visualização da página.
Observação
Para que o conversor funcione, a chave de API fornecida (apiKey) deve estar ativa e válida. Caso contrário, é necessário gerar uma nova chave acessando a ExchangeRate API.
