let fruit=['Apple','Banana','Mango','Kiwi'];
// let fruit1=fruit[0];  old tarika
// console.log(fruit1)
// let fruit2=fruit[1];
// console.log(fruit2);
// let fruit3=fruit[3];
// console.log(fruit3)
// let [fruit1,fruit2,fruit3,fruit4]=fruit  // New tarika
// console.log(fruit1)
// console.log(fruit2)
// console.log(fruit3)
// let [fruit1,,fruit3,fruit4,fruit5='Gawava']=fruit;
// console.log(fruit1)
// console.log(fruit3)
// console.log(fruit4)
// console.log(fruit5)
let [fruit1,...fruitX]=fruit;  // rest operator
console.log(fruitX)
