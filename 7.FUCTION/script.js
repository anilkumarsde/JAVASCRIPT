// let arr=[5,6,7,8,9,10];
// arr.forEach((value)=>{
//     console.log(value)
// })
// let city = ["Patna", "Mumbai", "Delhi", "Darbhanga"];

// city.forEach((value, idx, arr) => {
//   console.log(value.toUpperCase(), idx, arr);
// });

// for a given number of array find the square for each number in array

// let arr=[4,6,8,10,12];
// arr.forEach((value)=>{
//     console.log(value*value);
// })

// 2nd method

let arr = [2, 4, 6, 8, 10];

let calculatesquare = (value) => {
  console.log(value * value);
};
arr.forEach(calculatesquare);
