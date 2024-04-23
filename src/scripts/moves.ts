import { boardMatrix, squares } from "./initialize.js";
import { abbleToMove } from "./script.js";

const gameBoard = document.querySelector('.game-area');
const boardElement =  document.querySelector('.board');
const deathsw = document.querySelector('.deathsw');
const deathsb = document.querySelector('.deathsb');

let pieceInBoard: HTMLElement;
let audio = document.querySelector('audio') as HTMLAudioElement; // elemento de audio no html

let jogadas = 0;

export function defineTime() {
    if(jogadas % 2 == 0){
        return 'white';
    } else {
        return 'black';
    }
}

export function selectTo(item: HTMLElement){
    if(
        (item.firstElementChild?.classList.contains('black') && pieceInBoard.classList.contains('black'))
        || (item.firstElementChild?.classList.contains('white') && pieceInBoard.classList.contains('white'))
    ){
        return;
    } else if (item.childElementCount){
        let child = item.firstElementChild as HTMLElement;
        item.removeChild(child);
        child.classList.contains('white') 
            ? deathsw?.appendChild(child) 
            : deathsb?.appendChild(child);
    }
        
    item.appendChild(pieceInBoard);
    audio.play(); // toca o audio ao mover uma peça
    jogadas++;
    
    for(let j = 0; j < 64; j++){
        squares[j].classList.remove('select-from');
        squares[j].removeEventListener('click', moveToHandleClick);
    }

    abbleToMove();
}

export function moveToHandleClick(this: HTMLElement){
    const item = this;
    selectTo(item);
}

// funções de movimento das peças


export function movePawn(selectedFrom: number[]){
    pieceInBoard = boardMatrix[selectedFrom[1]][selectedFrom[0]].firstChild as HTMLElement;

   
    if(pieceInBoard.classList.contains('white')){
        if (!(boardMatrix[selectedFrom[1]-1]?.[selectedFrom[0]]?.childElementCount)){
            boardMatrix[selectedFrom[1]-1]?.[selectedFrom[0]]?.addEventListener('click', moveToHandleClick);
        }

        if(boardMatrix[selectedFrom[1]-1]?.[selectedFrom[0] + 1]?.firstElementChild?.classList.contains('black')){
            boardMatrix[selectedFrom[1]-1]?.[selectedFrom[0] + 1]?.addEventListener('click', moveToHandleClick);
        }

        if(boardMatrix[selectedFrom[1]-1]?.[selectedFrom[0] - 1]?.firstElementChild?.classList.contains('black')){
            boardMatrix[selectedFrom[1]-1]?.[selectedFrom[0] - 1]?.addEventListener('click', moveToHandleClick);
        }

    } else if (pieceInBoard.classList.contains('black')){
        if (!(boardMatrix[selectedFrom[1]+1]?.[selectedFrom[0]].childElementCount)){
            boardMatrix[selectedFrom[1]+1]?.[selectedFrom[0]].addEventListener('click', moveToHandleClick);
        } 

        if(boardMatrix[selectedFrom[1]+1]?.[selectedFrom[0] + 1]?.firstElementChild?.classList.contains('white')){
            boardMatrix[selectedFrom[1]+1]?.[selectedFrom[0] + 1]?.addEventListener('click', moveToHandleClick);
        }

        if(boardMatrix[selectedFrom[1]+1]?.[selectedFrom[0] - 1]?.firstElementChild?.classList.contains('white')){
            boardMatrix[selectedFrom[1]+1]?.[selectedFrom[0] - 1]?.addEventListener('click', moveToHandleClick);
        }  
    } 
        
}


export function moveBishop(selectedFrom: number[]){
    pieceInBoard = boardMatrix[selectedFrom[1]][selectedFrom[0]].firstChild as HTMLElement;

    let cimaEsquerda = false;
    let cimaDireita = false;
    let baixoEsquerda = false;
    let baixoDireita = false;

    for(let i = 1; i < 8; i++){
        if(pieceInBoard.classList.contains('white')){
            
            boardMatrix[selectedFrom[1]-i]?.[selectedFrom[0]-i]?.firstElementChild?.classList.contains('white') ? cimaEsquerda = true : '';boardMatrix[selectedFrom[1]-i]?.[selectedFrom[0]+i]?.firstElementChild?.classList.contains('white') ? cimaDireita = true : ''
            boardMatrix[selectedFrom[1]+i]?.[selectedFrom[0]-i]?.firstElementChild?.classList.contains('white') ? baixoEsquerda = true : '';
            boardMatrix[selectedFrom[1]+i]?.[selectedFrom[0]+i]?.firstElementChild?.classList.contains('white') ? baixoDireita = true : '';

            if(!cimaEsquerda){
                boardMatrix[selectedFrom[1]-i]?.[selectedFrom[0]-i]?.addEventListener('click', moveToHandleClick);
            }
            if(!cimaDireita){
                boardMatrix[selectedFrom[1]-i]?.[selectedFrom[0]+i]?.addEventListener('click', moveToHandleClick);
            }
            if(!baixoEsquerda){
                boardMatrix[selectedFrom[1]+i]?.[selectedFrom[0]-i]?.addEventListener('click', moveToHandleClick);
            }
            if(!baixoDireita){
                boardMatrix[selectedFrom[1]+i]?.[selectedFrom[0]+i]?.addEventListener('click', moveToHandleClick);
            }
         } else {

            boardMatrix[selectedFrom[1]-i]?.[selectedFrom[0]-i]?.firstElementChild?.classList.contains('black') ? cimaEsquerda = true : '';boardMatrix[selectedFrom[1]-i]?.[selectedFrom[0]+i]?.firstElementChild?.classList.contains('black') ? cimaDireita = true : ''
            boardMatrix[selectedFrom[1]+i]?.[selectedFrom[0]-i]?.firstElementChild?.classList.contains('black') ? baixoEsquerda = true : '';
            boardMatrix[selectedFrom[1]+i]?.[selectedFrom[0]+i]?.firstElementChild?.classList.contains('black') ? baixoDireita = true : '';

            if(!cimaEsquerda){
                boardMatrix[selectedFrom[1]-i]?.[selectedFrom[0]-i]?.addEventListener('click', moveToHandleClick);
            }
            if(!cimaDireita){
                boardMatrix[selectedFrom[1]-i]?.[selectedFrom[0]+i]?.addEventListener('click', moveToHandleClick);
            }
            if(!baixoEsquerda){
                boardMatrix[selectedFrom[1]+i]?.[selectedFrom[0]-i]?.addEventListener('click', moveToHandleClick);
            }
            if(!baixoDireita){
                boardMatrix[selectedFrom[1]+i]?.[selectedFrom[0]+i]?.addEventListener('click', moveToHandleClick);
            }
         }

    }
}

export function moveQueen(selectedFrom: number[]){
    pieceInBoard = boardMatrix[selectedFrom[1]][selectedFrom[0]].firstChild as HTMLElement;

    let cima = false;
    let baixo = false;
    let direita = false;
    let esquerda = false;
    let cimaEsquerda = false;
    let cimaDireita = false;
    let baixoEsquerda = false;
    let baixoDireita = false;
    
    for(let i = 1; i < 8; i++){

        if(pieceInBoard.classList.contains('white')){
         
            boardMatrix[selectedFrom[1]-i]?.[selectedFrom[0]]?.firstElementChild?.classList.contains('white') ? cima = true : '';
            boardMatrix[selectedFrom[1]+i]?.[selectedFrom[0]]?.firstElementChild?.classList.contains('white') ? baixo = true : '';
            boardMatrix[selectedFrom[1]]?.[selectedFrom[0]-i]?.firstElementChild?.classList.contains('white') ? esquerda = true : '';
            boardMatrix[selectedFrom[1]]?.[selectedFrom[0]+i]?.firstElementChild?.classList.contains('white') ? direita = true : '';
            boardMatrix[selectedFrom[1]-i]?.[selectedFrom[0]-i]?.firstElementChild?.classList.contains('white') ? cimaEsquerda = true : '';boardMatrix[selectedFrom[1]-i]?.[selectedFrom[0]+i]?.firstElementChild?.classList.contains('white') ? cimaDireita = true : ''
            boardMatrix[selectedFrom[1]+i]?.[selectedFrom[0]-i]?.firstElementChild?.classList.contains('white') ? baixoEsquerda = true : '';
            boardMatrix[selectedFrom[1]+i]?.[selectedFrom[0]+i]?.firstElementChild?.classList.contains('white') ? baixoDireita = true : '';
         
            if(!cima){
                boardMatrix[selectedFrom[1]-i]?.[selectedFrom[0]]?.addEventListener('click', moveToHandleClick);   
            }
            if(!baixo){
                boardMatrix[selectedFrom[1]+i]?.[selectedFrom[0]]?.addEventListener('click', moveToHandleClick);
            }
            if(!esquerda){
                boardMatrix[selectedFrom[1]]?.[selectedFrom[0]-i]?.addEventListener('click', moveToHandleClick);
            }
            if(!direita){
                boardMatrix[selectedFrom[1]]?.[selectedFrom[0]+i]?.addEventListener('click', moveToHandleClick);
            }
            if(!cimaEsquerda){
                boardMatrix[selectedFrom[1]-i]?.[selectedFrom[0]-i]?.addEventListener('click', moveToHandleClick);
            }
            if(!cimaDireita){
                boardMatrix[selectedFrom[1]-i]?.[selectedFrom[0]+i]?.addEventListener('click', moveToHandleClick);
            }
            if(!baixoEsquerda){
                boardMatrix[selectedFrom[1]+i]?.[selectedFrom[0]-i]?.addEventListener('click', moveToHandleClick);
            }
            if(!baixoDireita){
                boardMatrix[selectedFrom[1]+i]?.[selectedFrom[0]+i]?.addEventListener('click', moveToHandleClick);
            }
        } else {
            boardMatrix[selectedFrom[1]-i]?.[selectedFrom[0]]?.firstElementChild?.classList.contains('black') ? cima = true : '';
            boardMatrix[selectedFrom[1]+i]?.[selectedFrom[0]]?.firstElementChild?.classList.contains('black') ? baixo = true : '';
            boardMatrix[selectedFrom[1]]?.[selectedFrom[0]-i]?.firstElementChild?.classList.contains('black') ? esquerda = true : '';
            boardMatrix[selectedFrom[1]]?.[selectedFrom[0]+i]?.firstElementChild?.classList.contains('black') ? direita = true : '';
            boardMatrix[selectedFrom[1]-i]?.[selectedFrom[0]-i]?.firstElementChild?.classList.contains('black') ? cimaEsquerda = true : '';boardMatrix[selectedFrom[1]-i]?.[selectedFrom[0]+i]?.firstElementChild?.classList.contains('black') ? cimaDireita = true : ''
            boardMatrix[selectedFrom[1]+i]?.[selectedFrom[0]-i]?.firstElementChild?.classList.contains('black') ? baixoEsquerda = true : '';
            boardMatrix[selectedFrom[1]+i]?.[selectedFrom[0]+i]?.firstElementChild?.classList.contains('black') ? baixoDireita = true : '';
         
            if(!cima){
                boardMatrix[selectedFrom[1]-i]?.[selectedFrom[0]]?.addEventListener('click', moveToHandleClick);   
            }
            if(!baixo){
                boardMatrix[selectedFrom[1]+i]?.[selectedFrom[0]]?.addEventListener('click', moveToHandleClick);
            }
            if(!esquerda){
                boardMatrix[selectedFrom[1]]?.[selectedFrom[0]-i]?.addEventListener('click', moveToHandleClick);
            }
            if(!direita){
                boardMatrix[selectedFrom[1]]?.[selectedFrom[0]+i]?.addEventListener('click', moveToHandleClick);
            }
            if(!cimaEsquerda){
                boardMatrix[selectedFrom[1]-i]?.[selectedFrom[0]-i]?.addEventListener('click', moveToHandleClick);
            }
            if(!cimaDireita){
                boardMatrix[selectedFrom[1]-i]?.[selectedFrom[0]+i]?.addEventListener('click', moveToHandleClick);
            }
            if(!baixoEsquerda){
                boardMatrix[selectedFrom[1]+i]?.[selectedFrom[0]-i]?.addEventListener('click', moveToHandleClick);
            }
            if(!baixoDireita){
                boardMatrix[selectedFrom[1]+i]?.[selectedFrom[0]+i]?.addEventListener('click', moveToHandleClick);
            }
        }
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
    
    let cima = false;
    let baixo = false;
    let direita = false;
    let esquerda = false;

    for(let i = 1; i < 9; i++){
        if(pieceInBoard.classList.contains('white')){
            boardMatrix[selectedFrom[1]-i]?.[selectedFrom[0]]?.firstElementChild?.classList.contains('white') ? cima = true : '';
            boardMatrix[selectedFrom[1]+i]?.[selectedFrom[0]]?.firstElementChild?.classList.contains('white') ? baixo = true : '';
            boardMatrix[selectedFrom[1]]?.[selectedFrom[0]-i]?.firstElementChild?.classList.contains('white') ? esquerda = true : '';
            boardMatrix[selectedFrom[1]]?.[selectedFrom[0]+i]?.firstElementChild?.classList.contains('white') ? direita = true : '';

            if(!cima){
                boardMatrix[selectedFrom[1]-i]?.[selectedFrom[0]]?.addEventListener('click', moveToHandleClick);   
            }
            if(!baixo){
                boardMatrix[selectedFrom[1]+i]?.[selectedFrom[0]]?.addEventListener('click', moveToHandleClick);
            }
            if(!esquerda){
                boardMatrix[selectedFrom[1]]?.[selectedFrom[0]-i]?.addEventListener('click', moveToHandleClick);
            }
            if(!direita){
                boardMatrix[selectedFrom[1]]?.[selectedFrom[0]+i]?.addEventListener('click', moveToHandleClick);
            }
        } else {
            boardMatrix[selectedFrom[1]-i]?.[selectedFrom[0]]?.firstElementChild?.classList.contains('black') ? cima = true : '';
            boardMatrix[selectedFrom[1]+i]?.[selectedFrom[0]]?.firstElementChild?.classList.contains('black') ? baixo = true : '';
            boardMatrix[selectedFrom[1]]?.[selectedFrom[0]-i]?.firstElementChild?.classList.contains('black') ? esquerda = true : '';
            boardMatrix[selectedFrom[1]]?.[selectedFrom[0]+i]?.firstElementChild?.classList.contains('black') ? direita = true : '';

            if(!cima){
                boardMatrix[selectedFrom[1]-i]?.[selectedFrom[0]]?.addEventListener('click', moveToHandleClick);   
            }
            if(!baixo){
                boardMatrix[selectedFrom[1]+i]?.[selectedFrom[0]]?.addEventListener('click', moveToHandleClick);
            }
            if(!esquerda){
                boardMatrix[selectedFrom[1]]?.[selectedFrom[0]-i]?.addEventListener('click', moveToHandleClick);
            }
            if(!direita){
                boardMatrix[selectedFrom[1]]?.[selectedFrom[0]+i]?.addEventListener('click', moveToHandleClick);
            }
        }
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
