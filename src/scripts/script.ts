import { filler, squares } from "./utils.js";

filler();

squares.forEach(item => {
    item.addEventListener('click', (evt) => {
        for(let i = 0; i < 64; i++){
            squares[i].classList.remove('select');
        }

        item.classList.toggle('select');
    })
})