import CoinMarketCap from "./api/coinMarketCap";
import { isError404 } from "./types/errors.types";

const newCoin = new CoinMarketCap("a421d3d1-9c6b-444b-9e79-bd80e558aea8");

newCoin.quotes(["BTC", "NGN"]).then((resp) => {
  if (resp !== undefined) {
    if (isError404(resp)) {
      resp.status;
    } else {
      console.log(resp.data);
    }
  }
  // console.log(resp.data);
  // tentar passar para arquivo JSON
});

newCoin.conversions(1000, "NGN", ["NZD"]).then((resp) => {
  if (resp !== undefined) {
    if (isError404(resp)) {
      resp.status;
    } else {
      console.log(resp.data);
    }
  }
  // console.log(resp.data);
});
