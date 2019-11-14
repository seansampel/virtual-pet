const Pet = require("../src/pet");

describe("constructor", () => {
  it("sets the name property", () => {
    const pet = new Pet("Fido");

    expect(pet.name).toEqual("Fido");
  });
});

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

      describe("walk", () => {
        it("increases fitness by to a maximum of 10", () => {
          const pet = new Pet("fido");

          pet.fitness = 8;
          pet.walk();

          expect(pet.fitness).toEqual(10);
        });
        describe("feed", () => {
          it("decreases hunger by 3", () => {
            const pet = new Pet("fido");

            pet.fitness = 8;
            pet.hunger = 5;
            pet.feed();

            expect(pet.hunger).toEqual(2);
          });
        });
      });
    });
  });
});
