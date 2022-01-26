import CoinMarketCap from "./api/coinMarketCap";

const newCoin = new CoinMarketCap("a421d3d1-9c6b-444b-9e79-bd80e558aea8");

newCoin.quotes(["BTC", "NGN"]).then((resp) => {
  console.log(resp);
});

newCoin.conversion(1000, "NGN", ["NZD"]).then((resp) => {
  console.log(resp);
});
