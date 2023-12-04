// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))


const dropDown = document.querySelector(".drop-down");
const ListContent = document.querySelector(".list-content");
const img=document.querySelector('i')
const select = document.querySelector(".select");
const options=document.querySelectorAll('ul li')


dropDown.addEventListener('click',()=>{
   toggleOpacity(ListContent)
    rotate(img)
})

options.forEach(option=>{
    option.addEventListener('click',()=>{
    console.log( option.textContent)
    document.querySelector('span').innerText=option.textContent
    toggleOpacity(ListContent)
    rotate(img)
    })
})

const toggleOpacity = (el) => {
  el.classList.toggle("-translate-y-72");
  return el;
};

const rotate = (el) => {
  el.classList.toggle("rotate");
  return el;
};


