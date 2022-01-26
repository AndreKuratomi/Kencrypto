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
  // tags: null;
  // max_supply: null;
  // circulating_supply: null;
  // total_supply: null;
  // is_active: null;
  // platform: null;
  // cmc_rank: null;
  // is_fiat: null;
  // self_reported_circulating_supply: null;
  // self_reported_market_cap: null;
  quote: quote;
}

interface quote {
  $key: $key;
}

interface $key {
  price: number;
  last_updated: Date;
}
