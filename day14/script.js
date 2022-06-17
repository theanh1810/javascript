var dog = {
  names: "King of Dogs",
  age: 2,
  bread: " Pit Pull",
  gender: " Male",
  color: " Black",
  legs: 4,
  favoritefood: "Female Dogs",
  eat() {
    console.log(`${this.names} is eating ${this.favoritefood}; `);
  },
  run() {
    console.log(`${this.names} is running on ${this.legs}; `);
  },
  bark() {
    console.log(" Woof woof woof ...");
  },
};
console.log(dog);
console.log(dog.names);
console.log(dog.favoritefood);
dog.color = " brown";
dog.eat();
dog.run();
dog.bark();
for (let key in dog) {
  console.log(`${key}`);
}
for (let key in dog) {
  console.log(`${dog[key]}`);
}
dog.isCrazy = "max";
dog.crazy = function (a) {
  if (a == dog.isCrazy) {
    for (let key in dog) {
      console.log(` ${dog.run()} ${dog.bark()} `);
    }
  } else console.log(`${this.names} is not crazy`);
};

dog.crazy("max");
delete dog.isCrazy;
dog.crazy("max"); //vì đã xóa is crary nên giá trị chuyển về fale
for (const key in object) {
  if (Object.hasOwnProperty.call(object, key)) {
    const element = object[key];
  }
}
console.log(key);
let clone = dog;
clone.names = "CoCa";
console.log(clone);
let copy = {};


