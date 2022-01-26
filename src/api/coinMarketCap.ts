import axios, { AxiosInstance, AxiosResponse } from "axios";
import Quotation from "../types/quotes.types";
import Conversion from "../types/conversions.types";

export default class CoinMarketCap {
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

  async quotes(symbols: string[]) {
    const requestURL = `/v1/cryptocurrency/quotes/latest?symbol=${symbols}`;
    const response: AxiosResponse<any, any> = await this.axiosInstance.get(
      requestURL
    );

    // "Your parsing code should explicitly parse only the response properties you require to guarantee new fields that may be returned in the future are ignored."

    // const quotesResponseModel = {
    //   data: {
    //     id: 1,
    //     symbol: "BTC",
    //     name: "Bitcoin",
    //     amount: 25.67,
    //     last_updated: "2021-08-26T18:30:17.000Z",
    //     quote: {
    //       ETH: {
    //         price,
    //         last_updated,
    //       },
    //     },
    //   },
    // };

    return response.data as Quotation;
  }

  async conversions(amount: number, symbol: string, convert: string[]) {
    const requestURL = `/v1/tools/price-conversion?amount=${amount}&symbol=${symbol}&convert=${convert}`;
    const response: AxiosResponse<any, any> = await this.axiosInstance.get(
      requestURL
    );

    return response.data as Conversion;
  }
}
