'use strict';

class Vehicle {
  constructor(name) {
    this.name = name;
  }
  stop() {
    return 'Stopping...';
  }
  drive() {
    return 'Driving...';
  }
}

class Car extends Vehicle {
  constructor(name) {
    super(name);
    this.wheels = 4;
  }
  drive() {
    super.drive();
    return `${this.name} drives down the road.`;
  }
}

class Motorcycle extends Vehicle {
  constructor(name) {
    super(name);
    this.wheels = 2;
  }
  wheelie() {
    super.drive();
    return `${this.name} pops a wheelie!`;
  }
}

module.exports = {Car, Motorcycle};