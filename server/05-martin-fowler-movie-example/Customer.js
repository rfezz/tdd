const {Movie} = require('./Movie');

let Customer = (name) => {
  let rentals = [];

  let getTotalCharge = () => {
    let totalCharges = 0;
    for (let i = 0; i < rentals.length; i++) {        
      let rental = rentals[i];
      totalCharges += rental.getCharge();
    }
    return totalCharges;
  }
  let getTotalFrequentRenterPoints = () => {
    let totalFrequentRenterPoints = 0;
    for (let i = 0; i < rentals.length; i++) {        
      totalFrequentRenterPoints += rentals[i].getFrequentRenterPoints();
    }
    return totalFrequentRenterPoints;
  }

  return {
    get name() { return name; },
    addRental(rental) { rentals.push(rental); },

    statement() {
      
      let statement = 'Rental Record for ' + name + '\n';

      for (let i = 0; i < rentals.length; i++) {        
        //show figures for this rental
        statement += '\t' + rentals[i].movie.title + '\t' + rentals[i].getCharge() + '\n';
      }
      //add footer lines
      statement += 'Amount owed is ' + getTotalCharge() + '\n';
      statement += 'You earned ' + getTotalFrequentRenterPoints() + ' frequent renter points';
      return statement;
    }
  };
};

module.exports = {Customer};