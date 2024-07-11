// Parent class Animal
class Animal {
  constructor(species) {
    this._species = species;
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to make sound (generic for any animal)
  makeSound() {
    console.log("The animal makes a sound.");
  }
}

// Subclass Cat extends Animal
class Cat extends Animal {
  constructor(species) {
    // Call the constructor of the parent class (Animal)
    super(species);
  }

  // Method specific to Cat: purr
  purr() {
    console.log("purr");
  }
}

// Subclass Dog extends Animal
class Dog extends Animal {
  constructor(species) {
    // Call the constructor of the parent class (Animal)
    super(species);
  }

  // Method specific to Dog: bark
  bark() {
    console.log("woof");
  }
}

// Example usage:
const myCat = new Cat("Felis catus");
const myDog = new Dog("Canis lupus familiaris");

console.log(myCat.species); // Output: "Felis catus"
myCat.makeSound(); // Output: "The animal makes a sound."
myCat.purr(); // Output: "purr"

console.log(myDog.species); // Output: "Canis lupus familiaris"
myDog.makeSound(); // Output: "The animal makes a sound."
myDog.bark(); // Output: "woof"
