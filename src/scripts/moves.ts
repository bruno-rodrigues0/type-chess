import { boardMatrix, squares } from "./initialize.js";

let pieceInBoard: HTMLElement;
let audio = document.querySelector('audio') as HTMLAudioElement;

export function selectTo(item: HTMLElement){
    if (item.childElementCount){
        let pieceInLocal = item.firstChild as HTMLElement;
        item.removeChild(pieceInLocal);
    } 
    
    item.appendChild(pieceInBoard);
    audio.play();
    
    for(let j = 0; j < 64; j++){
        squares[j].classList.remove('select-from');
        squares[j].removeEventListener('click', moveToHandleClick);
    }
}

export function moveToHandleClick(this: HTMLElement){
    const item = this;
    selectTo(item);
}

// funções de movimento das peças

export function movePawn(selectedFrom: number[]){
    pieceInBoard = boardMatrix[selectedFrom[1]][selectedFrom[0]].firstChild as HTMLElement;
    boardMatrix[selectedFrom[1]-1]?.[selectedFrom[0]].addEventListener('click', moveToHandleClick);
  
}

export function moveBishop(selectedFrom: number[]){
    pieceInBoard = boardMatrix[selectedFrom[1]][selectedFrom[0]].firstChild as HTMLElement;
    
    for(let i = 0; i < 8; i++){
          
        boardMatrix[selectedFrom[1]-i]?.[selectedFrom[0]-i]?.addEventListener('click', moveToHandleClick);
        boardMatrix[selectedFrom[1]-i]?.[selectedFrom[0]+i]?.addEventListener('click', moveToHandleClick);
        boardMatrix[selectedFrom[1]+i]?.[selectedFrom[0]-i]?.addEventListener('click', moveToHandleClick);
        boardMatrix[selectedFrom[1]+i]?.[selectedFrom[0]+i]?.addEventListener('click', moveToHandleClick);
    }
}

export function moveQueen(selectedFrom: number[]){
    pieceInBoard = boardMatrix[selectedFrom[1]][selectedFrom[0]].firstChild as HTMLElement;
    
    for(let i = 0; i < 8; i++){
 
        boardMatrix[selectedFrom[1]-i]?.[selectedFrom[0]-i]?.addEventListener('click', moveToHandleClick);
        boardMatrix[selectedFrom[1]-i]?.[selectedFrom[0]+i]?.addEventListener('click', moveToHandleClick);
        boardMatrix[selectedFrom[1]-i]?.[selectedFrom[0]]?.addEventListener('click', moveToHandleClick);    
        boardMatrix[selectedFrom[1]+i]?.[selectedFrom[0]]?.addEventListener('click', moveToHandleClick);
        boardMatrix[selectedFrom[1]+i]?.[selectedFrom[0]-i]?.addEventListener('click', moveToHandleClick);
        boardMatrix[selectedFrom[1]+i]?.[selectedFrom[0]+i]?.addEventListener('click', moveToHandleClick);
        boardMatrix[selectedFrom[1]]?.[selectedFrom[0]-i]?.addEventListener('click', moveToHandleClick);
        boardMatrix[selectedFrom[1]]?.[selectedFrom[0]+i]?.addEventListener('click', moveToHandleClick);
        
    }
}

export function moveKnight(selectedFrom: number[]){
    pieceInBoard = boardMatrix[selectedFrom[1]][selectedFrom[0]].firstChild as HTMLElement;
    
    //pra cima
    boardMatrix[selectedFrom[1]-2]?.[selectedFrom[0]-1]?.addEventListener('click', moveToHandleClick);
    boardMatrix[selectedFrom[1]-2]?.[selectedFrom[0]+1]?.addEventListener('click', moveToHandleClick);
    boardMatrix[selectedFrom[1]-1]?.[selectedFrom[0]-2]?.addEventListener('click', moveToHandleClick);
    boardMatrix[selectedFrom[1]-1]?.[selectedFrom[0]+2]?.addEventListener('click', moveToHandleClick);
    
    //pra baixo
    boardMatrix[selectedFrom[1]+2]?.[selectedFrom[0]-1]?.addEventListener('click', moveToHandleClick);
    boardMatrix[selectedFrom[1]+2]?.[selectedFrom[0]+1]?.addEventListener('click', moveToHandleClick);
    boardMatrix[selectedFrom[1]+1]?.[selectedFrom[0]-2]?.addEventListener('click', moveToHandleClick);
    boardMatrix[selectedFrom[1]+1]?.[selectedFrom[0]+2]?.addEventListener('click', moveToHandleClick);
}

export function moveRook(selectedFrom: number[]){    
    pieceInBoard = boardMatrix[selectedFrom[1]][selectedFrom[0]].firstChild as HTMLElement;
    for(let i = 0; i < 9; i++){

        boardMatrix[selectedFrom[1]-i]?.[selectedFrom[0]]?.addEventListener('click', moveToHandleClick);
        boardMatrix[selectedFrom[1]+i]?.[selectedFrom[0]]?.addEventListener('click', moveToHandleClick);
        
        boardMatrix[selectedFrom[1]]?.[selectedFrom[0]-i]?.addEventListener('click', moveToHandleClick);
        boardMatrix[selectedFrom[1]]?.[selectedFrom[0]+i]?.addEventListener('click', moveToHandleClick);
    }
}

export function moveKing(selectedFrom: number[]){
    pieceInBoard = boardMatrix[selectedFrom[1]][selectedFrom[0]].firstChild as HTMLElement;

    boardMatrix[selectedFrom[1]-1]?.[selectedFrom[0]-1]?.addEventListener('click', moveToHandleClick);
    boardMatrix[selectedFrom[1]-1]?.[selectedFrom[0]+1]?.addEventListener('click', moveToHandleClick);
    boardMatrix[selectedFrom[1]+1]?.[selectedFrom[0]-1]?.addEventListener('click', moveToHandleClick);
    boardMatrix[selectedFrom[1]+1]?.[selectedFrom[0]+1]?.addEventListener('click', moveToHandleClick);
    boardMatrix[selectedFrom[1]-1]?.[selectedFrom[0]]?.addEventListener('click', moveToHandleClick);
    boardMatrix[selectedFrom[1]+1]?.[selectedFrom[0]]?.addEventListener('click', moveToHandleClick);
    boardMatrix[selectedFrom[1]]?.[selectedFrom[0]-1]?.addEventListener('click', moveToHandleClick);
    boardMatrix[selectedFrom[1]]?.[selectedFrom[0]+1]?.addEventListener('click', moveToHandleClick);
}