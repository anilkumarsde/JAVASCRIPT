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

class Toyota{
  start(){
    console.log('Start');
  }
  stop(){
    console.log('Stop');
  }
  setBrand(brand){
    this.brandeName=brand;//this means object name
  }
}
let Car1=new Toyota();
let fortuner=new Toyota();
fortuner.setBrand("fortuner");
Car1.setBrand('tata')



