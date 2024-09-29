function MyFunction() {
  console.log("Hi i am Function");
}
MyFunction();

function MyFunction1(parameter) {
  //recieve parameter
  console.log(parameter);
}
const arguments = "I love Javascript";
MyFunction1(arguments); // we passed Arguments

function sum(a, b) {
  const c = a + b;
  console.log("i am here before returing");
  return c;
  console.log("i am here after returning");
}
let s = sum(4, 555);
console.log(s);

const sum = (a,b) => {
  console.log(a + b);
};
console.log(sum(5,6))

const mul=(a,b)=>{
   return a*b;
}
const value=mul(7,6);
console.log(value);

forEach method

const arr=[
   {id:1,name:"Anil"},
   {id:2,name:"Sunil"},
   {id:3,name:"Pawan"},
   {id:4,name:"Bipin"},
]
arr.forEach((val)=>{
   console.log(val.id)
   console.log(val.name)
})
const array = ["Raman", "Pawan", "Vipin"];
array.forEach((val, idx, array) => {
  if (idx === 1) {
    console.log("Hey prabhu");
  }
  console.log(val);
  console.log(idx);
  console.log(array);
});
print square of each element of the array
const calculateS=(val)=>{
   console.log(val*val);
}

const arr = [2, 4, 6, 8, 10,45];
arr.forEach(calculateS)
const arr = [5, 6, 7, 8, ];
arr.forEach((val) => {
  console.log(val * val);
});

map method
let arr=[10,20,30,40];
arr.map((val)=>{
  console.log('val= ',val*val);
})
let newArr=arr.map((val)=>{
        return val+' '+"Anil"
})
console.log(newArr)
newArr.map((val)=>{
  console.log(val);
})

let student = [
  { id: 1, name: "Anil", age: 12 },
  { id: 2, name: "Sumit", age: 10 },
  { id: 3, name: "Pawan", age: 16 },
  { id: 4, name: "Subhakar", age: 18 },
];
// student.map((val)=>{
//   console.log('id: ',val.id);
//   console.log('Name: ',val.name);
//   console.log('age: ',val.age)
// })
// let newArr=student.filter((val)=>{
//   return val.age>12;
// })
// newArr.map((val)=>{
//       console.log('id:',val.id)
//       console.log('name ',val.name)
//       console.log('age  ',val.age)
// })

// filter method
// let arr=[10,20,105,55,14,25];
// let newArr=arr.filter((val)=>{
//   return val%2===0;
// })

// newArr.map((val)=>{
//   console.log(val);
// })

let arr = [10, 23, 45, 66];
const result = arr.reduce((pre, curent) => {
  return pre > curent ? pre : curent;
});
console.log(result);
