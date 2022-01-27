export default interface Quotes {
  data: Data;
}

interface Data {
  [name: string]: CurrencyInfo;
}

interface CurrencyInfo {
  id: number;
  name: string;
  symbol: string;
  amount: number;
  slug: string;
  date_added: Date;
  last_updated: Date;
  quote: Quote;
}

interface Quote {
  USD: ConvertedValue;
}

interface ConvertedValue {
  price: number;
  last_updated: Date;
}
