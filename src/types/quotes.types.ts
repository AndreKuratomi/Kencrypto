export default interface Conversions {
  data: data
}

interface data {
  $key: $key
} 

interface $key {
  id: number,
  name: string,
  symbol: string,
  slug: string,
  date_added: Date,
  last_updated: Date,
  quote: quote
}

interface quote {
  price: number
  last_updated: Date
}


// export default interface Conversions {
//     data: data
// };

// interface data {
//     id: number;
//     name: string;
//     symbol: string;    
//     last_updated: Date;
//     quote: quote
// }

// interface quote {
//     $key: $key
// }

// interface $key {
//     price: number;
//     last_updated: Date;
// }

// {
//     "data": {
//         "id": 1,
//         "symbol": "BTC",
//         "name": "Bitcoin",
//         "amount": 25.67,
//         "last_updated": "2021-08-26T18:30:17.000Z",
//         "quote": {
//             "ETH": {
//                 "price": 386.5352847529818,
//                 "last_updated": "2021-08-26T18:30:16.000Z"
//             }
//         }
//     }
// }


  //   status: {
  //     timestamp: "2022-01-26T20:34:36.925Z";
  //     error_code: 0;
  //     error_message: null;
  //     elapsed: 26;
  //     credit_count: 1;
  //     notice: null;
  //   };
  //   data: {
  //     BTC: {
  //       id: 1;
  //       name: "Bitcoin";
  //       symbol: "BTC";
  //       slug: "bitcoin";
  //       num_market_pairs: 9111;
  //       date_added: "2013-04-28T00:00:00.000Z";
  //       tags: [Array];
  //       max_supply: 21000000;
  //       circulating_supply: 18940675;
  //       total_supply: 18940675;
  //       is_active: 1;
  //       platform: null;
  //       cmc_rank: 1;
  //       is_fiat: 0;
  //       self_reported_circulating_supply: null;
  //       self_reported_market_cap: null;
  //       last_updated: "2022-01-26T20:33:00.000Z";
  //       quote: [Object];
  //     };
  //     NGN: {
  //       id: 13941;
  //       name: "CryptoNijigen";
  //       symbol: "NGN";
  //       slug: "cryptonijigen";
  //       num_market_pairs: 0;
  //       date_added: "2021-11-05T07:21:16.000Z";
  //       tags: [];
  //       max_supply: 1000000000;
  //       circulating_supply: 0;
  //       total_supply: 0;
  //       platform: [Object];
  //       is_active: 0;
  //       cmc_rank: null;
  //       is_fiat: 0;
  //       self_reported_circulating_supply: null;
  //       self_reported_market_cap: null;
  //       last_updated: "2021-12-06T04:03:42.000Z";
  //       quote: [Object];
  //     };
  //   };
}
