import axios, { AxiosInstance, AxiosResponse } from "axios";
import Quotation from "../types/quotes.types";
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
    // console.log(response.data);
    // console.log();
    // "Your parsing code should explicitly parse only the response properties you require to guarantee new fields that may be returned in the future are ignored."

    const currency = symbols;

    // const currency = ["BTC", "NGN"];
    const obj = {};

    obj["data"] = {};

    for (let i = 0; i < currency.length; i++) {
      obj.data[currency[i]] = {};
      obj.data[[currency[i]]]["id"] = response.data[currency[i]]["id"];
      obj.data[[currency[i]]]["name"] = response.data[currency[i]]["name"];
      obj.data[[currency[i]]]["symbol"] = response.data[currency[i]]["symbol"];
      obj.data[[currency[i]]]["slug"] = response.data[currency[i]]["slug"];
      obj.data[[currency[i]]]["date_added"] =
        response.data[currency[i]]["date_added"];
      obj.data[[currency[i]]]["last_updated"] =
        response.data[currency[i]]["last_updated"];
      obj.data[[currency[i]]]["quote"] = response.data[currency[i]]["quote"];
    }

    return response.data as Quotation;
    // try {
    // } catch (err) {
    //   if (axios.isAxiosError(err)) {
    //     return err.response?.data as Error;
    //   }
    //   return undefined;
    // }
  }

  async conversions(amount: number, symbol: string, convert: string[]) {
    const requestURL = `/v1/tools/price-conversion?amount=${amount}&symbol=${symbol}&convert=${convert}`;
    const response: AxiosResponse<any, any> = await this.axiosInstance.get(
      requestURL
    );

    // const newObject = {
    //   response.data: {
    //     response.data.$key: {
    //       response.data.$key.id: 1,
    //       response.data.$key.name: "Bitcoin",
    //       response.data.$key.symbol: "BTC",
    //       response.data.$key.slug: "bitcoin",
    //       response.data.$key.date_added: "2013-04-28T00:00:00.000Z",
    //       response.data.$key.last_updated: "2021-08-26T17:44:11.000Z",
    //       response.data.$key.quote: {
    //         response.data.$key.quote.$key: {
    //           response.data.$key.quote.$key.price: 46963.215165006586,
    //           response.data.$key.quote.$key.last_updated: "2021-08-26T17:44:11.000Z",
    //         },
    //       },
    //     },
    //   },
    // };

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
