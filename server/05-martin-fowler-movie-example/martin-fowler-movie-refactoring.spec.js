const {Customer} = require('./Customer');
const {Movie} = require('./Movie');
const {Rental} = require('./Rental');
const {REGULAR, NEW_RELEASE, CHILDRENS} = require('./movie-codes.js');

describe('martin fowler\'s movie refactoring example', () => {
  const DAYS_RENTED_IS_1 = 1;
  const DAYS_RENTED_IS_2 = 2;
  const DAYS_RENTED_IS_3 = 3;

  let customer;

  let childrens1;
  let childrens2;
  let childrens3;

  let newRelease1;
  let newRelease2;
  let newRelease3;

  let regular1;
  let regular2;
  let regular3;

  beforeEach( () => {
    customer = Customer('Dummy Customer, Jr.');

    childrens1 = Movie('Childrens1', CHILDRENS);
    childrens2 = Movie('Childrens2', CHILDRENS);
    childrens3 = Movie('Childrens3', CHILDRENS);

    newRelease1 = Movie('New Release1', NEW_RELEASE);
    newRelease2 = Movie('New Release2', NEW_RELEASE);
    newRelease3 = Movie('New Release3', NEW_RELEASE);

    regular1 = Movie('Regular1', REGULAR);
    regular2 = Movie('Regular2', REGULAR);
    regular3 = Movie('Regular3', REGULAR);
  });

  it('is protected from regressions', () => {
    let expected = 'Rental Record for Dummy Customer, Jr.\n' +
        '\tChildrens1\t1.5\n' +
        '\tChildrens2\t1.5\n' +
        '\tChildrens3\t1.5\n' +
        '\tRegular1\t2\n' +
        '\tRegular2\t2\n' +
        '\tRegular3\t3.5\n' +
        '\tNew Release1\t3\n' +
        '\tNew Release2\t6\n' +
        '\tNew Release3\t9\n' +
        'Amount owed is 30\n' +
        'You earned 11 frequent renter points';

    customer.addRental(Rental(childrens1, DAYS_RENTED_IS_1));
    customer.addRental(Rental(childrens2, DAYS_RENTED_IS_2));
    customer.addRental(Rental(childrens3, DAYS_RENTED_IS_3));

    customer.addRental(Rental(regular1, DAYS_RENTED_IS_1));
    customer.addRental(Rental(regular2, DAYS_RENTED_IS_2));
    customer.addRental(Rental(regular3, DAYS_RENTED_IS_3));

    customer.addRental(Rental(newRelease1, DAYS_RENTED_IS_1));
    customer.addRental(Rental(newRelease2, DAYS_RENTED_IS_2));
    customer.addRental(Rental(newRelease3, DAYS_RENTED_IS_3));

    expect(expected).toEqual(customer.statement());
  });
});
