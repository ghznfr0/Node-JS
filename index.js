// class Home {
//     display(houseName, price, location, rating, photoUrl) {
//       this.houseName = houseName;
//       this.price = price;
//       this.location = location;
//       this.rating = rating;
//       this.photoUrl = photoUrl;
//     }

//     logHome() {
//       console.log(`all details ${this.houseName}`);
//     }
// }

// const myHome = new Home('name', '4.5/5') 

// myHome.logHome()

// class Person {
//   constructor(myName, myAge) {
//     this.username = myName; // Initialize the name property
//     this.userage = myAge;   // Initialize the age property
//   }

//   greet() {
//     console.log(`Hi, my name is ${this.username} and I am ${this.userage} years old.`);
//   }
// }

// // Create an instance
// const person1 = new Person('Bob', 205);
// person1.greet(); // Output: Hi, my name is Alice and I am 25 years old.


// class Car {
//   constructor(name, model, color) {
//     this.carName = name
//     this.carModel = model
//     this.carColor = color
//   }

//   displayData() {
//     console.log(`My car name: ${this.carName} model: ${this.carModel} and color: ${this.carColor}`);
//   }
// }

// const Audi = new Car('Audi', 'Benz', 'Red')
// const Toyota = new Car('Toyota', 'Corrolla', 'Balck')
// Audi.displayData()
// Toyota.displayData()

// class Person {
//   constructor(name, age, color){
//     this.name = name
//     this.age = age
//     this.color = color
//   }
//   greet() {
//     console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
//   }
//   speak() {
//     console.log(this);
    
//   }
// }

// const Alice = new Person('Alice', 23, 'white')

// // Alice.greet()
// Alice.speak()

// // const Bob = new Person('Bob', 45)

// // Bob.greet()
// // Bob.speak()

const registeredHomes = [];

class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  save() {
    registeredHomes.push(this)
    console.log(registeredHomes);
    
  }

  static fetchAll() {
    return registeredHomes;
  }
}

const home1 = new Home('home1', 234, 'sgd', 4.5, 'www.example.com')
// const home2 = new Home('vila', 234, 'sgd', 4.5, 'www.example.com')

home1.save()
// home2.save()

const allHomes = Home.fetchAll()

console.log(allHomes);
