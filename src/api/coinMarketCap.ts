import axios, { AxiosInstance, AxiosResponse } from "axios";

export default class coinMarketCap {
  baseURL: string = "https://pro-api.coinmarketcap.com";
  axiosInstance: AxiosInstance;

  constructor(key: string) {
    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
      headers: {
        "X-CMC_PRO_API_KEY": `${key}`,
      },
    });
  }

  async quotes(symbols: string) {
    const requestURL = `/v1/cryptocurrency/quotes/latest?symbol=${symbols}`;
    const response: AxiosResponse<any, any> = await this.axiosInstance.get(
      requestURL
    );

    return response.data as Quotation;
  }

  async conversion(amount: number, symbol: string, convert: string) {
    const requestURL = `/v1/tools/price-conversion?amount=${amount}&symbol=${symbol}&convert=${convert}`;
    const response: AxiosResponse<any, any> = await this.axiosInstance.get(
      requestURL
    );

    return response.data as Conversion;
  }
}

// const newCoin = new coinMarketCap("a421d3d1-9c6b-444b-9e79-bd80e558aea8")
