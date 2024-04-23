export const squares = document.querySelectorAll('.board>div') as NodeListOf<HTMLElement>;

export const boardMatrix = [
    [squares[0], squares[1], squares[2], squares[3], squares[4], squares[5], squares[6], squares[7]],
    [squares[8], squares[9], squares[10], squares[11], squares[12], squares[13], squares[14], squares[15]],
    [squares[16], squares[17], squares[18], squares[19], squares[20], squares[21], squares[22], squares[23]],
    [squares[24], squares[25], squares[26], squares[27], squares[28], squares[29], squares[30], squares[31]],
    [squares[32], squares[33], squares[34], squares[35], squares[36], squares[37], squares[38], squares[39]],
    [squares[40], squares[41], squares[42], squares[43], squares[44], squares[45], squares[46], squares[47]],
    [squares[48], squares[49], squares[50], squares[51], squares[52], squares[53], squares[54], squares[55]],
    [squares[56], squares[57], squares[58], squares[59], squares[60], squares[61], squares[62], squares[63]]
]

export function filler(){
    for(let i = 0; i < 8; i++){
        let piece : HTMLElement = document.createElement('img');
    
        if(squares[i].classList.contains('t')){
            piece.setAttribute('src', './assets/brook.png');
            piece.setAttribute('id', 'rook');
            piece.setAttribute('class', 'black');
            squares[i].appendChild(piece);
        } else if(squares[i].classList.contains('k')){
            piece.setAttribute('src', './assets/bknight.png');
            piece.setAttribute('id', 'knight');
            piece.setAttribute('class', 'black');
            squares[i].appendChild(piece);
        } else if(squares[i].classList.contains('b')){
            piece.setAttribute('src', './assets/bbishop.png');
            piece.setAttribute('id', 'bishop');
            piece.setAttribute('class', 'black');
            squares[i].appendChild(piece);
        } else if(squares[i].classList.contains('ki')){
            piece.setAttribute('src', './assets/bking.png');
            piece.setAttribute('id', 'king');
            piece.setAttribute('class', 'black');
            squares[i].appendChild(piece);
        } else if(squares[i].classList.contains('q')){
            piece.setAttribute('src', './assets/bqueen.png');
            piece.setAttribute('id', 'queen');
            piece.setAttribute('class', 'black');
            squares[i].appendChild(piece);
        }
    }
    
    for(let i = 8; i < 16; i++){
        let piece : HTMLElement = document.createElement('img');
        piece.setAttribute('src', './assets/bpawn.png');
        piece.setAttribute('id', 'pawn');
        piece.setAttribute('class', 'black');
        squares[i].appendChild(piece);
    }
    
    
    
    
    for(let i = 63; i > 55; i--){
        let piece : HTMLElement = document.createElement('img');
        
        if(squares[i].classList.contains('t')){
            piece.setAttribute('src', './assets/wrook.png');
            piece.setAttribute('id', 'rook');
            piece.setAttribute('class', 'white');
            squares[i].appendChild(piece);
        } else if(squares[i].classList.contains('k')){
            piece.setAttribute('src', './assets/wknight.png');
            piece.setAttribute('id', 'knight');
            piece.setAttribute('class', 'white');
            squares[i].appendChild(piece);
        } else if(squares[i].classList.contains('b')){
            piece.setAttribute('src', './assets/wbishop.png');
            piece.setAttribute('id', 'bishop');
            piece.setAttribute('class', 'white');
            squares[i].appendChild(piece);
        } else if(squares[i].classList.contains('ki')){
            piece.setAttribute('src', './assets/wking.png');
            piece.setAttribute('id', 'king');
            piece.setAttribute('class', 'white');
            squares[i].appendChild(piece);
        } else if(squares[i].classList.contains('q')){
            piece.setAttribute('src', './assets/wqueen.png');
            piece.setAttribute('id', 'queen');
            piece.setAttribute('class', 'white');
            squares[i].appendChild(piece);
        }
        
    }
    
    for(let i = 55; i > 47; i--){
        let piece : HTMLElement = document.createElement('img');
        piece.setAttribute('src', './assets/wpawn.png');
        piece.setAttribute('id', 'pawn');
        piece.setAttribute('class', 'white');
        squares[i].appendChild(piece);
    }
}
