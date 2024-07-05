// let student={
//     name:"anil kumar",
//     age:23,
//     ispass:true,
//     cgpa:7.44
// };
// for(let key in student)
// {
//     console.log("key=",key ,"value =",student.key);
// }

//print all even number from 0 to 100

// for(let i=0;i<=100;i++)
// {
//     if(i%2===0)
//     {
//         console.log(i);
//     }
// }

let gameNumber = 45;
let userNumber = prompt("enter your number");
while (userNumber != gameNumber) {
  userNumber = prompt("sorry enter again");
}
console.log("congratualions you entered right number");
