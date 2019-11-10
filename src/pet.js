const fido = new Pet('Fido');
const rex = new Pet('Rex');

function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = 10;
  return this;
};
Pet.prototype.growUp = function() {
  this.age += 1;
  return this;
};
rex.growUp = function () {
  this.age += 5;
  return this;
};
fido.growUp = function () {
  this.age += 1;
  return this;
};


console.log(rex.growUp()); 
console.log(fido.growUp()); 

  
  module.exports = Pet;