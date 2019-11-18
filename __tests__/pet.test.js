const Pet = require("../src/pet");

describe("constructor", () => {
  let pet;
  beforeEach(() => {
    pet = new Pet("Fido");
    pet.fitness = 10;
    pet.hunger = 0;
    pet.age = 0;
  });

  it("sets the name property", () => {
    expect(pet.name).toEqual("Fido");
  });

  it("increments the hunger by 5", () => {
    pet.growUp();

    expect(pet.hunger).toEqual(5);
  });

  it("decreases the fitness by 3", () => {
    pet.growUp();

    expect(pet.fitness).toEqual(7);
  });

  it("increases fitness by 4", () => {
    pet.fitness = 4;
    pet.walk();

    expect(pet.fitness).toEqual(8);
  });

  it("increases fitness by to a maximum of 10", () => {
    pet.fitness = 8;
    pet.walk();

    expect(pet.fitness).toEqual(10);
  });

  it("decreases hunger by 3", () => {
    pet.fitness = 8;
    pet.hunger = 5;
    pet.feed();

    expect(pet.hunger).toEqual(2);
  });

  it("should return I need a walk if fitness is below 3", () => {
    pet.fitness = 2;

    expect(pet.checkUp()).toBe("I need a walk");
  });

  it("should return I feel great if fitness is 10", () => {
    pet.fitness = 10;
    pet.hunger = 0;
    expect(pet.checkUp()).toBe("I feel great!");
  });
});
