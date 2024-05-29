let Count = document.querySelector(".count")
const Increase = document.querySelector(".increase")
const Decrease = document.querySelector(".decrease")
const Reset = document.querySelector(".reset")

let n = 0
Increase.addEventListener('click',()=>{
    n += 1
   Count.textContent = n 
})
Decrease.addEventListener('click',()=>{
    n -= 1
   Count.textContent = n 
})
Reset.addEventListener('click',()=>{
    n = 0
    Count.textContent = n
})
