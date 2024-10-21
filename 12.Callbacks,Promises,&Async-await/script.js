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

function getData(dataid){
    setTimeout(() => {
        console.log('data',dataid)

    }, 2000);
}
getData(100)
