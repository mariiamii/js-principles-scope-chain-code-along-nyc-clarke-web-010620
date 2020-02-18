var customerName = 'bob';
const leastFavoriteCustomer = 'some value';

function upperCaseCustomerName(){
  customerName = customerName.toUpperCase();
}

function setBestCustomer(){
  bestCustomer = 'not bob';
}

function overWriteBestCustomer(){
  bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = 'billy';
}

function attemptTwoFavoriteCustomers(){
  let favoriteCustomer = 'bob';
  let favoriteCustomer = 'billy'
}