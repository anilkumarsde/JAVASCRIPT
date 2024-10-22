// console.log(1);
// console.log(2);
// console.log(3);

// const hello=()=>  console.log('Hello i will wait');

// setTimeout(hello,5000);
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)

// call backs
// const sum = (a, b) => {
//   console.log(a + b);
// };
// function subtact(a, b) {
//   return a - b;
// }
// function calculator(a, b, sumcallback, subtactcallback) {
//   sumcallback(a, b);
//   let r = subtactcallback(a, b);
//   console.log(r);
// }
// calculator(11, 21, sum, subtact);

// function getData(dataid,getDAtacallback){
//     setTimeout(() => {
//         console.log('data',dataid);
//         if(getDAtacallback)
//         {
//             getDAtacallback();
//         }
//     }, 2000);
// }
// getData(1,()=>{getData(2)})
// function fruit(a,nestf){
//     setTimeout(() => {
//         console.log(a);
//         if(nestf){
//             nestf();
//         }

//     }, (2000));
// }
// fruit("apple",()=>{
//     fruit("banana")
// })
// function getData(dataid, getNextData) {
//   setTimeout(() => {
//     console.log(`data:${dataid}`);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }
// getData(1, () => getData(2, () => getData(3)));


//Promises

// let promise=new Promise((resolve,reject)=>{
//     console.log('Hi i am promiss'),
//     resolve("111")
// })
// function getDAta(dataid){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("hi")
//             resolve("sucsess")

//         }, 5000);
//     })
// }

function getPromise(){
    return new Promise((resolve, reject) => {
        console.log('I do promise');
        resolve("succes")
        reject(" network error")
    })
}
let promise=getPromise();
promise.then((res)=>{ //if promise fulfiled
    console.log("fullfiled",res)
})
promise.catch((err)=>{ //if promise rejected
    console.log("rejected",err);
})