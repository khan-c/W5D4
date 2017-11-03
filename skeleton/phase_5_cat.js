const Cat = function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
};

Cat.prototype.cuteStatement = function() {
  return `${this.owner} loves ${this.name}`;
};

// const garfield = new Cat('Garfield', 'Jon');
// const bigglesworth = new Cat('Mr. Bigglesworth', 'Dr. Evil');
// const luce = new Cat('Luce', 'Max');

// Cat.prototype.cuteStatement = function() { return `Everyone loves ${this.name}` };

Cat.prototype.meow = function meow() { return `${this.name} meows` };

// garfield.meow = function () { return "zzzz" };
