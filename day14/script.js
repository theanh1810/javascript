var dog = {
    namE: "King of Dog",
    age: 2,
    bread: "Pit Pull",
    gender: "Male",
    color: "Black",
    legs: 4,
    favoriteFood: "Female Dogs",

     eat() {
    console.log(`${this.namE} is eating ${this.favoriteFood}, yum yum... `);
    },
    run() {
    console.log(`${this.namE} is running on ${this.legs}...`)
    },
    bark() {
    console.log("Woof Woof Woof")
    }
}
console.log(dog)
console.log(dog.namE)
console.log(dog.favoriteFood)
dog.color = "Brown"
dog.age = dog.age + 2
console.log(dog.age)
dog.eat();
dog.run();
dog.bark();
for (let key in dog) {
    console.log(`${key}`)
}
for (let key in dog) {
  console.log(`${dog[key]}`);
}
dog.isCrazy = "max";
dog.crazy=function(a){
    if (a == dog.isCrazy) {
        for (let key in dog) {
            console.log(` ${dog.run()} ${dog.bark()} `);
            
      }
    } else console.log(`${this.namE} is not crazy`);
  }

dog.crazy("max")
delete dog.isCrazy;
dog.crazy("max")//vì đã xóa is crary nên giá trị chuyển về fale
for (let key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}
console.log(key)
let clone = dog;
clone.namE = "CoCa";
console.log(clone);
let copy = {};


