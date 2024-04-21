import { filler, squares, boardMatrix } from "./utils.js";

filler();

let isSelected = false;
let pieceInBoard: HTMLElement;

// let jogadas = 0;


// function defineTime() {
//     if(jogadas % 2 == 0){
//         return 'brancas';
//     } else {
//         return 'pretas';
//     }
// }

function selectTo(item: HTMLElement, index: number){
    item.appendChild(pieceInBoard);
    console.log('aqui');
}

function moveToHandleClick(this: HTMLElement){
    const item = this;
    const index = parseInt(item.dataset.col as string);
    selectTo(item, index);
}

function move(selectedFrom: number[]){
    pieceInBoard = boardMatrix[selectedFrom[1]][selectedFrom[0]].firstChild as HTMLElement;

    boardMatrix[selectedFrom[1]-1].forEach((item, index) => {
    item.addEventListener('click', moveToHandleClick);
    })
    
}

function selectFrom (item: HTMLElement, position: number[]) {

    if(!item.childElementCount){
        return;
    }
    for(let j = 0; j < 64; j++){
        squares[j].classList.remove('select-from');
        squares[j].removeEventListener('click', handleClick);
    }
    
    let selectedFrom : number[];
    
    item.classList.toggle('select-from');
    isSelected = true;

    selectedFrom = [position[0], position[1]];
    move(selectedFrom);
}

function handleClick(this: HTMLElement) {
    const item = this;
    const position : number[] = [parseInt(item.dataset.col as string), parseInt(item.dataset.row as string)];
    selectFrom(item, position);
}

for(let i = 0; i < 8; i++){
     if(!isSelected){ 
        boardMatrix[i].forEach((item, index) => {
            item.addEventListener('click', handleClick);
        })
    }
}