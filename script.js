class Animal {
  constructor(species) {
    this._species = species;
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to make a sound
  makeSound() {
    console.log("Animal sound");
  }
}

// Subclass Cat extends Animal
class Cat extends Animal {
  constructor(species) {
    super(species);
  }

  // Method specific to Cat
  purr() {
    console.log("purr");
  }
}

// Subclass Dog extends Animal
class Dog extends Animal {
  constructor(species) {
    super(species);
  }

  // Method specific to Dog
  bark() {
    console.log("woof");
  }
}

