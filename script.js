const box = document.querySelector(".box")
const increase = document.querySelector(".increament")
const decrease = document.querySelector(".decreament")
const reset = document.querySelector(".reset")
let value = 0

function increaseVal(){
    value++;
    box.textContent = value;
}
increase.addEventListener("click", increaseVal)

function decreaseVal(){
    value--;
    box.textContent = value;
}

decrease.addEventListener('click', decreaseVal)

reset.addEventListener('click', () =>{
    value = 0;
    box.textContent = value;
})