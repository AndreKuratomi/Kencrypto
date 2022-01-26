export default interface Conversion {
  data: data;
}

interface data {
  id: number;
  name: string;
  symbol: string;
  last_updated: Date;
  quote: quote;
}

interface quote {
  $key: $key;
}

interface $key {
  price: number;
  last_updated: Date;
}
