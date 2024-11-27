const add = function(x, y) {
 return x+y;
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function(array) {
  let ar = array;
  let sumOf = 0;
  if(ar.length > 0){
    ar.forEach((item) => {
      sumOf += item;
    })
  }
  else{
    return 0;
  }
  return sumOf;
};

const multiply = function(array) {
  let ar = array;
  let productOf = 1;
  ar.forEach((item) => {
    productOf = productOf * item
  })
  return productOf;
};

const power = function(x, y) {
  let powerOf = 1;
	for(let i = 0; i<y ; i++){
    powerOf = powerOf * x;
  }
  return powerOf;
};

const factorial = function(x) {
	let factorialOf = 1;
  for(let i = x; i>0; i--){
    factorialOf = factorialOf * i;
  }
  return factorialOf;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
