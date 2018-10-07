'use strict';

function CarFactory(Vname) {
  const Vehicle = {
    drive: () => {console.log('Driving');},
    stop: () => {console.log('Stopping');},
    name: Vname,
  };
  const Car = Object.assign({
    wheels: 4}, Vehicle);
  const Motorcycle = Object.assign({
    wheels: 2, wheelie: () => {console.log('Wheelie!!');}}, Vehicle);
}

module.exports = CarFactory;