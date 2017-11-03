Array.prototype.myEach = function(callback) {

  for(let i=0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

// -------------------------

Array.prototype.myMap = function(callback) {
  const results = [];

  this.myEach(function(el) {
    results.push(callback(el));
  });

  return results;
};

Array.prototype.myReduce = function(callback, initialAcc) {
  if (initialAcc) {
    var acc = initialAcc;
    var i = 0;
  } else {
    acc = this[0];
    i = 1;
  }

  while (i < this.length) {
    acc = callback(acc, this[i]);
    i++;
  }

  return acc;
};
