

// function DogObject(name, age) {
//     let dog = Object.create(constructorObject);
//     dog.name = name;
//     dog.age = age;
//     return dog;
// }
// let constructorObject = {
//     speak: function(){
//         return "I am a dog"
//     }
// }
// let bingo = DogObject("Bingo", 54);
// console.log(bingo);

// function DogObject(name, age) {
//     this.name = name;
//     this.age = age;
// }
// DogObject.prototype.speak = function() {
//     return "I am a dog";
// }
// let john = new DogObject("John", 45);
// console.log(john);