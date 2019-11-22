const REGULAR = 0;
const NEW_RELEASE = 1;
const CHILDRENS = 2;

let Movie = (title, somePriceCode) => {
  let priceCode = somePriceCode;

  function getCharge(daysRented) {
    let result = 0;
    switch (priceCode) {
      case Movie.REGULAR:

        result += 2;
        if (daysRented > 2) {
          result += (daysRented - 2) * 1.5;
        }
        break;

      case Movie.NEW_RELEASE:

        result += daysRented * 3;
        break;

      case Movie.CHILDRENS:

        result += 1.5;
        if (daysRented > 3) {
          result += (daysRented - 3) * 1.5;
        }
        break;
        
      default:
        break;

    }
    return result;
  }

  return {
    get title() { return title; },
    get priceCode() { return priceCode; },
    set priceCode(code) { priceCode = code; },
    REGULAR,
    NEW_RELEASE,
    CHILDRENS,
    getCharge
  };
};
Movie.REGULAR = REGULAR;
Movie.NEW_RELEASE = NEW_RELEASE;
Movie.CHILDRENS = CHILDRENS;

module.exports = {Movie};