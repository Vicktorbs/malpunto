const trigger = document.getElementById("menu");
const burger = document.getElementById("menu-burger");
let open = false;
console.log(burger);

function toggleMenu() {
    if (open) {
        open = false
        burger.classList.remove('toggle')
        trigger.style.display = 'none'
    } else {
        open = true
        burger.classList.add('toggle')
        trigger.style.display = 'table'
    }
}