import { HtmlContext } from "../../../../node_modules/next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints.js";
import { filler, squares, boardMatrix } from "./utils.js";

filler();


let pieceInBoard: HTMLElement;

// let jogadas = 0;


// function defineTime() {
//     if(jogadas % 2 == 0){
//         return 'brancas';
//     } else {
//         return 'pretas';
//     }
// }

let audio = document.querySelector('audio') as HTMLAudioElement;

function selectTo(item: HTMLElement){
    item.appendChild(pieceInBoard);
    audio.play();

    for(let j = 0; j < 64; j++){
        squares[j].classList.remove('select-from');
        squares[j].removeEventListener('click', moveToHandleClick);
    }
}

function moveToHandleClick(this: HTMLElement){
    const item = this;
    const index = parseInt(item.dataset.col as string);
    selectTo(item);
}

// funções de movimento das peças

function movePawn(selectedFrom: number[]){
    pieceInBoard = boardMatrix[selectedFrom[1]][selectedFrom[0]].firstChild as HTMLElement;
    boardMatrix[selectedFrom[1]-1][selectedFrom[0]].addEventListener('click', moveToHandleClick);
  
}

function moveBishop(selectedFrom: number[]){
    pieceInBoard = boardMatrix[selectedFrom[1]][selectedFrom[0]].firstChild as HTMLElement;
    for(let i = 0; i < 8; i++){
        boardMatrix[selectedFrom[1]-i][selectedFrom[0]-i]?.addEventListener('click', moveToHandleClick);
        boardMatrix[selectedFrom[1]-i][selectedFrom[0]+i]?.addEventListener('click', moveToHandleClick);
        boardMatrix[selectedFrom[1]+i][selectedFrom[0]-i]?.addEventListener('click', moveToHandleClick);
        boardMatrix[selectedFrom[1]+i][selectedFrom[0]+i]?.addEventListener('click', moveToHandleClick);
    }
}

function moveQueen(selectedFrom: number[]){
    pieceInBoard = boardMatrix[selectedFrom[1]][selectedFrom[0]].firstChild as HTMLElement;
    for(let i = 0; i < 8; i++){
        boardMatrix[selectedFrom[1]-i][selectedFrom[0]-i]?.addEventListener('click', moveToHandleClick);
        boardMatrix[selectedFrom[1]-i][selectedFrom[0]+i]?.addEventListener('click', moveToHandleClick);
        boardMatrix[selectedFrom[1]+i][selectedFrom[0]-i]?.addEventListener('click', moveToHandleClick);
        boardMatrix[selectedFrom[1]+i][selectedFrom[0]+i]?.addEventListener('click', moveToHandleClick);

        boardMatrix[selectedFrom[1]-i][selectedFrom[0]]?.addEventListener('click', moveToHandleClick);
        boardMatrix[selectedFrom[1]+i][selectedFrom[0]]?.addEventListener('click', moveToHandleClick);

        boardMatrix[selectedFrom[1]][selectedFrom[0]-i]?.addEventListener('click', moveToHandleClick);
        boardMatrix[selectedFrom[1]][selectedFrom[0]+i]?.addEventListener('click', moveToHandleClick);
    }
}


function selectFrom (item: HTMLElement, position: number[], pieceName?: string) {

    if(!item.childElementCount){
        return;
    }
    for(let j = 0; j < 64; j++){
        squares[j].classList.remove('select-from');
    }
    
    let selectedFrom : number[];
    
    item.classList.toggle('select-from');

    selectedFrom = [position[0]-1, position[1]-1];

    switch (pieceName){
        case 'pawn':
            console.log('pawn')
            movePawn(selectedFrom);
            break;
        case 'bishop':
            console.log('bishop');
            moveBishop(selectedFrom);
            break;
        case 'queen':
            console.log('queen');
            moveQueen(selectedFrom);
            break;
        default:
            break;
    }   
}

function handleClick(this: HTMLElement) {
    const item = this;
    const position : [number, number] = [parseInt(item.dataset.col as string), parseInt(item.dataset.row as string)];
    const pieceName = item.firstElementChild?.id;
    selectFrom(item, position, pieceName);
}

for(let i = 0; i < 8; i++){
    boardMatrix[i].forEach((item) => {
        item.addEventListener('click', handleClick);
    })
}