export default interface Quotes {
  data: data;
}

interface data {
  $key: $key;
}

interface $key {
  id: number;
  name: string;
  symbol: string;
  amount: number;
  slug: string;
  date_added: Date;
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
