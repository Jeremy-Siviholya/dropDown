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
const img=document.querySelector('img')
const select = document.querySelector(".select");
const options=document.querySelectorAll('li')


dropDown.addEventListener('click',()=>{
    ListContent.classList.toggle("opacity-0");
    img.classList.toggle('rotate')
})

options.forEach(option=>{
    option.addEventListener('click',()=>{
    console.log( option.textContent)
    document.querySelector('span').innerText=option.textContent
    ListContent.classList.toggle("opacity-0");
    })
})



