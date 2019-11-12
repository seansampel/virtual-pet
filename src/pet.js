const fido = new Pet("Fido");
// const rex = new Pet('Rex');

function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = 10;
  return this;
}
Pet.prototype.growUp = function() {
  this.age += 1;
  this.hunger += 5;
  this.fitness -= 3;
  return this;
};
// fido.growUp = function () {
//this.age += 1;
//  return this;
//};

Pet.prototype.walk = function() {
  this.fitness += 4;
  return this;
};
/* if (this.fitness > 3);
{
  return "I need a walk";
}
if (this.hunger < 5);
{
  return "I am hungry";
}
if (this.fitness && this.hunger === false);
return "I feel great!"; */

console.log();

module.exports = Pet;
