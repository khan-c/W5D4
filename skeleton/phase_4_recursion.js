const recursiveRange = function range(start, end) {
  if (start === end) {
    return [start];
  }

  return recursiveRange(start, end - 1).concat(end);
};

// ---------------------

const recSum = function sumRec(arr) {
  if (arr.length === 0) {
    return 0;
  }

  return arr[0] + recSum(arr.slice(1));
};

// ----------------------

const recExpo = function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }

  return base * recExpo(base, --exp);
};

const recExpo2 = function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp === 1) {
    return base;
  }

  if (exp % 2 === 0) {
    return (recExpo2(base, exp / 2) ** 2);
  } else {
    return base * (recExpo2(base, (exp - 1) / 2) ** 2);
  }
};

// ----------------------

const fibonacci = function fibonacci(n) {
  if (n === 2) {
    return [0,1];
  } else if (n === 1) {
    return [0];
  }

  const fibs = fibonacci(n - 1);
  return fibs.concat(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
}

// ----------------------

const subsets = function subsets(arr) {
  if (arr.length === 0) {
    return [[]];
  }

  const prev = subsets(arr.slice(0,arr.length - 1));
  const next = prev.map(function(el) {
    return el.concat(arr[arr.length - 1]);
  });

  return prev.concat(next);
}
