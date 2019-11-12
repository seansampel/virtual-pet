const Pet = require("../src/pet");

describe("constructor", () => {
  it("sets the name property", () => {
    const pet = new Pet("Fido");

    expect(pet.name).toEqual("Fido");
  });
});
/* describe('growUp', () => {
      it('increments the age by 1', () => {
        const pet = new Pet('Fido');
    
        pet.growUp();
    
        expect(pet.age).toEqual(1);
      }); */

describe("growUp", () => {
  it("increments the hunger by 5", () => {
    const pet = new Pet("Fido");

    pet.growUp();

    expect(pet.hunger).toEqual(5);
  });

  describe("growUp", () => {
    it("decreases the fitness by 3", () => {
      const pet = new Pet("Fido");

      pet.growUp();

      expect(pet.fitness).toEqual(7);
    });

    describe("walk", () => {
      it("increases fitness by 4", () => {
        const pet = new Pet("fido");

        pet.fitness = 4;
        pet.walk();

        expect(pet.fitness).toEqual(8);
      });
    });
  });
});
