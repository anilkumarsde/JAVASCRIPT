// // let btn=document.querySelector("#btn1");
// // btn.onclick=(evt)=>{
// //     console.log("button was click")
// //     console.log(evt.type);
// //     console.log(evt);
// //     console.log(evt.target);

// // }

// // let box = document.querySelector("div");
// // box.onmouseover=()=>
// // {
// //     console.log("you are inside the box");
// // }

// //event listeners

// let btn1=document.querySelector("#btn1");

// btn1.addEventListener('click',()=>
// {
//     console.log("button clicked by handler 1")
// })
// btn1.addEventListener('click',()=>
// {
//     console.log("button clicked by handler 2")
// })
// const handler=()=>{
//     console.log('button was clicked by handler 3')
// }
// btn1.addEventListener('click',handler)

// btn1.removeEventListener('click',handler)

let modebtn = document.querySelector("#mode");
let currentmode = "dark";

modebtn.addEventListener("click", () => {
  if (currentmode === "dark") {
    currentmode = "light";
    document.querySelector('body').style.backgroundColor="white";
  } else {
    currentmode = "dark";
      document.querySelector('body').style.backgroundColor="black";
  }
  console.log(currentmode);
});
