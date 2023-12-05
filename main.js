
const dropDown = document.querySelector(".drop-down");
const ListContent = document.querySelector(".list-content");
const img=document.querySelector('i')
const select = document.querySelector(".select");
const options=document.querySelectorAll('ul li')


dropDown.addEventListener('click',()=>{
   toggleTranslate(ListContent)
    rotate(img)
})

options.forEach(option=>{
    option.addEventListener('click',()=>{
    document.querySelector('span').innerText=option.textContent
    toggleTranslate(ListContent)
    rotate(img)
    })
})

const toggleTranslate = (el) => {
  el.classList.toggle("-translate-y-80");
  return el;
};

const rotate = (el) => {
  el.classList.toggle("rotate");
  return el;
};


