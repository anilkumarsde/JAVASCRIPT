// arr = [5, 5, 6, 7, 8];
// console.log(arr);
// console.log(arr.length);

// let marks=[56,74,56,95,55];
// console.log(marks);
// console.log(marks.length);

// let heroes=["irenman","spiderman","thor","superman"];
// console.log(heroes);
// console.log(heroes.length)

//for loop

// let heroes1=['anil','vivek','pravin','amit','sunil'];
// for(let idx = 0; idx<heroes1.length; idx++)
// {
//     console.log(heroes1[idx]);
// }

// for of loop

// let students=['anil','amit','sunil','pravin'];
// for(let student of students)
// {
//     console.log(student.toUpperCase());
// }

// practise question
// find the avg of given Array

// let Array =[56,74,90,84,65];

// let sum=0;
// for(let i = 0;i<Array.length;i++)
// {
//     sum+=Array[i];
// }
// let avg=sum/Array.length;
// console.log(`avg is ${avg}`);

// pq

let items=[566,66,788,990,110];
let i=0;
for(let value of items)
{
    console.log(`value at index ${i} before offer is ${value}`)
    let offer=value/10;
    items[i]=items[i]-offer;
    console.log(`value at index ${i} after offer is ${items[i]}`)
    i++;
}
