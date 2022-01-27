import axios, { AxiosInstance, AxiosResponse } from "axios";
import Quotes from "../types/quotes.types";
import Conversion from "../types/conversions.types";
import Error from "../types/errors.types";

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

    const currency: string[] = symbols;

    const obj: any = {};
    obj["data"] = {};

    for (let i = 0; i < currency.length; i++) {
      obj.data[currency[i]] = {};
      obj.data[currency[i]]["id"] = response.data.data[currency[i]]["id"];
      obj.data[currency[i]]["name"] = response.data.data[currency[i]]["name"];
      obj.data[currency[i]]["symbol"] =
        response.data.data[currency[i]]["symbol"];
      obj.data[currency[i]]["slug"] = response.data.data[currency[i]]["slug"];
      obj.data[currency[i]]["date_added"] =
        response.data.data[currency[i]]["date_added"];
      obj.data[currency[i]]["last_updated"] =
        response.data.data[currency[i]]["last_updated"];
      obj.data[currency[i]]["quote"] = response.data.data[currency[i]]["quote"];
    }

    return obj as Quotes;
    // return response.data as Quotation;
    // try {
    // } catch (err) {
    //   if (axios.isAxiosError(err)) {
    //     return err.response?.data as Error;
    //   }
    //   return undefined;
    // }
  }

  async conversions(amount: number, convert: string[], symbol: string) {
    const requestURL = `/v1/tools/price-conversion?amount=${amount}&convert=${convert}&symbol=${symbol}`;
    const response: AxiosResponse<any, any> = await this.axiosInstance.get(
      requestURL
    );

    return response.data as Conversion;
    // try {
    // } catch (err) {
    //   if (axios.isAxiosError(err)) {
    //     return err.response?.data as Error;
    //   }
    //   return undefined;
    // }
  }
}
