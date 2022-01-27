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

    // const currency = symbols;

    // const obj = {};
    // obj["data"] = {};

    // for (let i = 0; i < currency.length; i++) {
    //   obj.data[currency[i]] = {};
    //   obj.data[[currency[i]]]["id"] = response.data[currency[i]]["id"];
    //   obj.data[[currency[i]]]["name"] = response.data[currency[i]]["name"];
    //   obj.data[[currency[i]]]["symbol"] = response.data[currency[i]]["symbol"];
    //   obj.data[[currency[i]]]["slug"] = response.data[currency[i]]["slug"];
    //   obj.data[[currency[i]]]["date_added"] =
    //     response.data[currency[i]]["date_added"];
    //   obj.data[[currency[i]]]["last_updated"] =
    //     response.data[currency[i]]["last_updated"];
    //   obj.data[[currency[i]]]["quote"] = response.data[currency[i]]["quote"];
    // }

    // return obj as Quotation;
    return response.data as Quotation;
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

    // const elements = [amount, convert, symbol];

    // const obj = {};
    // obj["data"] = {};

    // for (let elem in response.data) {
    //   obj.data[elements[i]] = {};
    //   obj.data[[elements[i]]]["id"] = response.data[elements[i]]["id"];
    //   obj.data[[elements[i]]]["name"] = response.data[elements[i]]["name"];
    //   obj.data[[elements[i]]]["symbol"] = response.data[elements[i]]["symbol"];
    //   obj.data[[elements[i]]]["amount"] = response.data[elements[i]]["amount"];
    //   obj.data[[elements[i]]]["last_updated"] =
    //     response.data[elements[i]]["last_updated"];
    //   obj.data[[elements[i]]]["quote"] = response.data[elements[i]]["quote"];
    // }

    // const newObject = {
    //   data: {
    //     id: 1,
    //     symbol: "BTC",
    //     name: "Bitcoin",
    //     amount: 25.67,
    //     last_updated: "2021-08-26T18:30:17.000Z",
    //     quote: {
    //       ETH: {
    //         price: 386.5352847529818,
    //         last_updated: "2021-08-26T18:30:16.000Z",
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
