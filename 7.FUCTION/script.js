let arr1=[5,6,7,8,9,10];
arr1.forEach((value)=>{
    console.log(value)
})
let city = ["Patna", "Mumbai", "Delhi", "Darbhanga"];

city.forEach((value, idx, arr) => {
  console.log(value.toUpperCase(), idx, arr);
});

// for a given number of array find the square for each number in array

let arr2=[4,6,8,10,12];
arr2.forEach((value)=>{
    console.log(value*value);
})

// 2nd method

let arr3 = [2, 4, 6, 8, 10];

let calculatesquare = (value) => {
  console.log(value * value);
};
arr3.forEach(calculatesquare);

// Map methods

let arr4 = [5,6,7,8,9,10];

 let newArr=arr4.map((value)=>{
   return value;
})
console.log(newArr);

filter
let arr5=[102,23,45,69,70];

    let evenArray=arr5.filter((value)=>
    {
        return value%2 === 0;

    })
    console.log(evenArray);

 let arr6=[1,2,3,4,5];

 const sum = arr6.reduce((pre,curent)=>{
    return pre+curent;
 })
 console.log(sum);

// finding largest number

 let arr7=[46,34,3,4,65,86];
 const largest = arr7.reduce((pre,current)=>
{
    return pre>current?pre:current;
})
console.log(largest);

// we have given an array of marks of student find the marks scored 90+

let arr8 = [89,65,98,97,99,87];

const maxmar=arr8.filter((val)=>
{
    return val>90;
})
console.log(maxmar)

// take a number n as an input from user.create an array from 1 to n
// 1) use reduce methods to calculate sum of all number in the array.
// 2) use reduce methods to calculate product of all number in the array.

let n = prompt("Enter a number");
let arr9 =[];
for(let i=1;i<=n;i++)
{
    arr9[i-1]=i;
}
console.log(arr9)

   const Tsum= arr9.reduce((pre,curr)=>
    {cls
        return pre+curr;
    })
    console.log(`sum of 1 to ${n} = ${Tsum}`)

    const product = arr9.reduce((pre,curr)=>
    {
        return pre*curr;
    })
    console.log(`product of 1 to ${n} = ${product}`);


