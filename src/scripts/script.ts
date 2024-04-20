import { filler, squares } from "./utils.js";

filler();

let jogadas = 0;
let selected : HTMLElement;

squares.forEach(item => {
    item.addEventListener('click', () => {
        for(let i = 0; i < 64; i++){
            squares[i].classList.remove('select');
        }

        item.classList.toggle('select');
        selected = item;
    })
})

function defineTime() {
    if(jogadas % 2 == 0){
        return 'brancas';
    } else {
        return 'pretas';
    }
}

function move(){
    defineTime();

    let movePiece = selected.tagName;
    
}