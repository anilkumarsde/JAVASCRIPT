// student = {
//   fullName: "Anil kumar",
//   age: 23,
//   marks: 55.6,
//   getMarks: function () {
//     console.log("marks", marks);
//   },
// };
// const employee = {
//   caltax() {
//     console.log("tax rate is 10%");
//   },
// };
// const karanArjun={
//     salary:50000,
// };
// const karanArjun2={
//     salary:50000,
// };
// const karanArjun3={
//     salary:50000,
//     caltax() {
//         console.log("tax rate is 30%");
//       },
// };
// const karanArjun4={
//     salary:50000,
// };
// karanArjun.__proto__=employee;
// karanArjun2.__proto__=employee;
// karanArjun3.__proto__=employee;
// karanArjun4.__proto__=employee;

// class Toyota{
//   constructor(brand){
//     console.log('creating new object')
//     this.brand=brand;
//     console.log(brand)

//   }
//   start(){
//     console.log('Start');
//   }
//   stop(){
//     console.log('Stop');
//   }
//   setBrand(brand){
//     this.brandeName=brand;//this means object name
//   }
// }
// let Car1=new Toyota();
// let fortuner=new Toyota('fortuner');
// let lexus=new Toyota('lexus');
// fortuner.setBrand("fortuner");
// Car1.setBrand('tata')

// class Parent{
//   myfun1(){
//     console.log('Hi,Everyone');
//   }
// }
// class Child extends Parent{}
// let obj=new Child;
class Person {
  constructor(){
    this.brand='Hero';
    console.log('Enter in parent class')
  }
  eat() {
    console.log("eat");
  }
  sleep() {
    console.log("sleep");
  }
}
class Engineer extends Person{
  constructor(branch){
    console.log("Enter in child class")
    super();//to invoke parent constructor
    this.branch=branch;
    console.log('Exit in child class')
  }
  work(){
    console.log('solve problem,and build something')
  }
}
let anil=new Engineer("computer Science");
