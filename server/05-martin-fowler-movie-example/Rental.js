const {Movie} = require('./Movie');

let Rental = (movie, daysRented) => {

  function getCharge() {
    return movie.getCharge(daysRented);
  }

   function getFrequentRenterPoints() {
    let frequentRenterPoints = 1;
    // add bonus for a two day new release rental
    if ((movie.priceCode === Movie.NEW_RELEASE) &&
      daysRented > 1)
      frequentRenterPoints++;
    return frequentRenterPoints;
  }

  return {
    get movie() { return movie; },
    get daysRented() { return daysRented; },
    getCharge,
    getFrequentRenterPoints
  };
};
module.exports = {Rental};