import CoinMarketCap from "./api/coinMarketCap";
import Conversion from "./types/conversions.types";
import Quotes from "./types/quotes.types";
import Error from "./types/errors.types";
import { isError404 } from "./types/errors.types";

// export { CoinMarketCap };
// export { Conversion, Quotes, Error, isError404 };

const newCoin = new CoinMarketCap("a421d3d1-9c6b-444b-9e79-bd80e558aea8");

newCoin.quotes(["BTC", "NGN"]).then((resp) => {
  if (resp !== undefined) {
    if (isError404(resp)) {
      console.log(resp.status);
    } else {
      console.log(resp);
    }
  }
});

newCoin.conversions(1000, ["GBP"], "NZD").then((resp) => {
  if (resp !== undefined) {
    if (isError404(resp)) {
      console.log(resp.status);
    } else {
      console.log(resp);
    }
  }
});
