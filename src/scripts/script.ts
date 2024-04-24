import { filler, squares, boardMatrix } from "./initialize.js";
import { moveBishop, moveKing, moveKnight, movePawn, moveQueen, moveRook, defineTime} from "./moves.js";

filler();

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

        case 'knight':
            console.log('knight');
            moveKnight(selectedFrom);
            break;

        case 'rook':
            console.log('rook');
            moveRook(selectedFrom);
            break;

        case 'king':
            console.log('king');
            moveKing(selectedFrom);
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

export function abbleToMove(){
    if(defineTime() === 'white'){
        for(let i = 0; i < 8; i++){
            boardMatrix[i].forEach((item) => {
                item.firstElementChild?.classList.contains('white') 
                    ? item.addEventListener('click', handleClick)
                    : item.removeEventListener('click', handleClick);
            })
        }
    } else if (defineTime() === 'black'){
        for(let i = 0; i < 8; i++){
            boardMatrix[i].forEach((item) => {
                item.firstElementChild?.classList.contains('black') 
                    ? item.addEventListener('click', handleClick)
                    : item.removeEventListener('click', handleClick);
            })
        }
    }
}
abbleToMove();
    