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
