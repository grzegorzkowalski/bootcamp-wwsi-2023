//Zadanie 1

class Vehicle {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

class Boat extends Vehicle {
    sail() {
        console.log(`Nazywam się ${this.name} i pływam.`);
    }
}

class Car extends Vehicle {
    drive() {
        console.log(`Nazywam się ${this.name} i jedzie.`);
    }
}

class Plane extends Vehicle {
    fly() {
        console.log(`Nazywam się ${this.name} i leci.`);
    }
}

const boat = new Boat("Niezatapialna 2");

console.log(boat.getName());
boat.sail();

const car = new Car("Kit");

console.log(car.getName());
car.drive();
// car.sail();

const plane = new Plane("Orzeł");

console.log(plane.getName());
plane.fly();

