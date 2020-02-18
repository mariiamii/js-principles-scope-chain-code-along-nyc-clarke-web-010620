var customerName = 'bob';
const leastFavoriteCustomer = 'some value';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overWriteBestCustomer(newFavorite){
  bestCustomer = newFavorite
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'billy';
}