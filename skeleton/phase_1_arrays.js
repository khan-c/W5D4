Array.prototype.myUniq = function uniq() {
  const results = [];

  this.forEach(function(el) {
    if (!results.includes(el)) {
      results.push(el);
    }
  });

  return results;
};

// Array.prototype.myTwoSum = function myTwoSum() {
//   const results = [];
//
//   // this.forEach(function(el1, idx1, array) {
//   //   array.forEach(function(el2, idx2) {
//   //     if (el1 + el2 === 0) {
//   //       results.push([idx1, idx2]);
//   //     }
//   //   });
//   // });
//
//   return results;
// };

Array.prototype.myTwoSum = function myTwoSum() {
  const results = [];

  for(let i = 0; i < (this.length - 1); i++) {
    for(let j = i + 1; j < (this.length); j++) {
      if ((this[i] + this[j]) === 0) {
        results.push([i,j]);
      }
    }
  }
  return results;
};

// -------------

Array.prototype.myTranspose = function myTranspose() {
  const results = new Array(this.length);

  for(let i = 0; i < (this.length); i++) {
    results[i] = new Array(this.length);
    for(let j = 0; j < (this.length); j++) {
      results[i][j] = this[j][i];
    }
  }
  return results;
};
