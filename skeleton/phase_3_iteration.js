Array.prototype.myBubbleSort = function() {
  var notSorted = true;

  while (notSorted) {
    notSorted = false;

    for(let i = 0; i < (this.length - 1); i++) {
        if (this[i] > this[i+1]) {
          const x = this[i];
          const y = this[i+1];
          this[i] = y;
          this[i+1] = x;
        notSorted = true;
        }
    }
  }
  return this;
};


// ------------

String.prototype.substrings = function() {
  const results = [];

  for(let i = 0; i < this.length; i++) {
    for(let j = i + 1; j <= this.length; j++) {
      results.push(this.slice(i,j));
    }
  }
  return results;
};
