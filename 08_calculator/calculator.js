const add = function() {
  let args = Array.from(arguments).flat();
  if (args.length === 0) {
    return 0
  } else {
    const sum = args.reduce(getSum, 0);
    return sum;	
  }
};

function getSum(total, num) {
return (total + parseFloat(num));
}

const subtract = function() {
  let args = Array.from(arguments).flat();
  if (args.length === 0) {
    return 0;
  } else {
    const diff = args.reduce(getDiff);
    return diff;	
  }
};

function getDiff(total, num) {
return (total - parseFloat(num));
}

const sum = add;

const multiply = function() {
  let args = Array.from(arguments).flat();
  if (args.length === 0) {
    return 0;
  } else {
    const prod = args.reduce(getProd)
    return prod;	
  }
};

function getProd(total, num) {
return (total * parseFloat(num));
}

const power = function() {
	let args = Array.from(arguments);
  if (args.length === 0) {
    return 0;
  } else {
    let a = parseFloat(args[0]);
    let b = parseFloat(args[1]);
    return (a ** b);
  }

};

const factorial = function() {
	let args = Array.from(arguments);
  if (args.length === 0) {
    return 0;
  } else {
    let a = Math.round(parseFloat(args[0]));
    let prod = 1;
    for (let i = 2; i <=a; i++) {
      prod *= i;
    }
    return prod;
  }
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
