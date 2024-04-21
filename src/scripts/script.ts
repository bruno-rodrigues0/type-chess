import { filler, squares, boardMatrix } from "./utils.js";

filler();

let jogadas = 0;
let selectedFrom : number[];

for(let i = 0; i < 8; i++){
    boardMatrix[i].forEach((item, index) => {
        item.addEventListener('click', () => {
            for(let j = 0; j < 64; j++){
                squares[j].classList.remove('select-from');
            }

            item.classList.toggle('select-from');
            selectedFrom = [i, index];
        })
    })
}

function defineTime() {
    if(jogadas % 2 == 0){
        return 'brancas';
    } else {
        return 'pretas';
    }
}

function move(){
    defineTime();

    let movePiece = boardMatrix[selectedFrom[0]][selectedFrom[1]].tagName;

    if(movePiece == 'pawn'){
        
    }
    
}