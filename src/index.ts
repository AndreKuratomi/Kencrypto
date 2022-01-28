import CoinMarketCap from "./api/coinMarketCap";
import Conversion from "./types/conversions.types";
import Quotes from "./types/quotes.types";
import Error from "./types/errors.types";
import { isError404 } from "./types/errors.types";

export { CoinMarketCap };
export { Conversion, Quotes, Error, isError404 };
