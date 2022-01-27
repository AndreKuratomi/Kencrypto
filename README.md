## REFATORAÇÃO CÓDIGO FONTE

- [Descrição](#descrição)
- [Instalação](#instalação)
- [Utilização](#utilização)
- [Termos de uso](#termos-de-uso)
- [Referências](#referências)

<br>

# Descrição

<p>A aplicação <b>KenCrypto</b> consiste na verdade numa biblioteca que facilita o acesso à <b>[API CoinMarketCap](https://coinmarketcap.com/api/)</b>. Esta biblioteca não demanda a informação de nenhuma URL pois suas informações podem ser obtidas diretamente por meio de funções.</p>

<p>Esta biblioteca é um serviço simples de listagem da cotação atual de uma moeda e conversão entre moedas. Esta aplicação utiliza o ambiente de execução Node.js e o framework Express.js.</p>
<br>

# Instalação

<h3>Criação de chave CoinMarketCap</h3>

<p>Primeiramente, é preciso criar uma chave de api no <b>[CoinMarketCap](https://coinmarketcap.com/api/)</b>. Escolher o plano gratuito que possibilita fazer <b>300 request por dia</b>, o suficiente para o uso.</p>

<p><b>Obs:</b> Esta chave só será necessária na hora de instanciar a classe (ou, em outras palavras, "gerar um produto da classe") coinMarketCap e na inserção no header de um API Client.</p>

<h3>A aplicação em si</h3>

<h5>0. Primeiramente, é necessário já ter instalado na própria máquina:</h5>

- <p> Um <b>editor de código</b>, conhecido também como <b>IDE</b>. Por exemplo, o <b>[Visual Studio Code (VSCode)](https://code.visualstudio.com/)</b>.</p>

- <p> Uma <b>ferramenta cliente de API REST</b>. Por exemplo, o <b>[Insomnia](https://insomnia.rest/download)</b> ou o <b>[Postman](https://www.postman.com/product/rest-client/)</b>.</p>

- <p> E versionar o diretório para receber o clone da aplicação:</p>

```
git init
```

<br>
<h5>1. Fazer o clone do reposítório Kencrypto na sua máquina pelo terminal do computador ou pelo do IDE:</h5>

```
git clone git@gitlab.com:ABKURA/kencrypto.git
```

<p>Entrar na pasta criada:</p>

```
cd kenzrypto
```

<p>Instalar as dependências:</p>

```
yarn
```

<p><b>Obs:</b> caso não tenha o gerenciador de pacotes <b>yarn</b> instalar desta maneira:</p>

```
npm install --global yarn
```

<p>E rodar a aplicação:</p>

```
code .
```

<br>

<h3>Ou para apenas importar a biblioteca em outra aplicação:</h3>

```
npm i kencrypto0
```

# Utilização

<p>Antes de passarmos para o API Client precisamos rodar o CLI</p>

```
yarn dev
```

<p>A aplicação rodará com o <b>localhost:3000</b>. Adicionar depois deste as rotas e suas terminações, ou <b>endpoints</b>, que veremos a seguir.</p>

<p>Após o CLI rodar de modo bem sucedido com o API Client aberto vamos utilizar as seguintes rotas:</p>

<h3>Rotas Kencrypto</h3>

<p>URL de base: "https://pro-api.coinmarketcap.com"</p>

<h4>Cotação atual</h4>

<b>Listagem das cotações pedidas para dólar americano (Método GET): <b>/v1/cryptocurrency/quotes/latest?symbol=${symbols}\*</b> (ou https://pro-api.coinmarketcap.com/companies)

\*preencher com uma ou mais cotações separadas por vírgulas sem espaços.

Exemplo a ser colocado no body da requisição:

```
(Requisição feita sem body)
```

E a resposta esperada:

```
Status: 200 OK
```

```
{
  "data": {
    "BTC": {
      "id": 1,
      "name": "Bitcoin",
      "symbol": "BTC",
      "slug": "bitcoin",
      "date_added": "2013-04-28T00:00:00.000Z",
      "last_updated": "2021-08-26T17:44:11.000Z",
      "quote": {
        "USD": {
          "price": 46963.215165006586,
          "last_updated": "2021-08-26T17:44:11.000Z"
        }
      }
    }
  }
}
```

<h4>Conversão de preços:</h4>

Conversão de preços entre cotações (Método GET): <b>/v1/tools/price-conversion?amount=${amount}&convert=${convert}&symbol=${symbol}</b>** (ou https://pro-api.coinmarketcap.com/v1/tools/price-conversion?amount=${amount}&convert=${convert}&symbol=${symbol}\*\*)

\*\*Respectivamente, o valor dado, a cotação original e a cotação de conversão.

Exemplo a ser colocado no body da requisição:

```
(Requisição feita sem body)
```

E a resposta esperada:

```
Status: 200 OK
```

```
{
  "data": {
    "id": 1,
    "symbol": "BTC",
    "name": "Bitcoin",
    "amount": 25.67,
    "last_updated": "2021-08-26T18:30:17.000Z",
    "quote": {
      "ETH": {
        "price": 386.5352847529818,
        "last_updated": "2021-08-26T18:30:16.000Z"
      }
    }
  }
}
```

# Termos de uso

<p>Esta aplicação atende a fins exclusivamente didáticos e não possui qualquer intuito comercial.</p>

# Referências

- [NPM](https://nodejs.org/en/)
- [CoinMarketCap](https://coinmarketcap.com/api/)
  - [QuotesLatest](https://coinmarketcap.com/api/documentation/v1/#operation/getV1CryptocurrencyQuotesLatest)
  - [Price Conversion](https://coinmarketcap.com/api/documentation/v1/#operation/getV1ToolsPriceconversion)
