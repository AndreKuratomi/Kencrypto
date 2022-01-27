export default interface Conversion {
  data: Data;
}

interface Data {
  id: number;
  name: string;
  symbol: string;
  last_updated: Date;
  quote: Quote;
}

interface Quote {
  [name: string]: ConvertedValue;
}

interface ConvertedValue {
  price: number;
  last_updated: Date;
}
