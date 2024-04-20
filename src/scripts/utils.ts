export const squares = document.querySelectorAll('.board>div') as NodeListOf<HTMLElement>;
export function filler(){
    for(let i = 0; i < 8; i++){
        let piece : HTMLElement = document.createElement('img');
    
        if(squares[i].classList.contains('t')){
            piece.setAttribute('src', './assets/brook.png');
            squares[i].appendChild(piece);
        } else if(squares[i].classList.contains('k')){
            piece.setAttribute('src', './assets/bknight.png');
            squares[i].appendChild(piece);
        } else if(squares[i].classList.contains('b')){
            piece.setAttribute('src', './assets/bbishop.png');
            squares[i].appendChild(piece);
        } else if(squares[i].classList.contains('ki')){
            piece.setAttribute('src', './assets/bking.png');
            squares[i].appendChild(piece);
        } else if(squares[i].classList.contains('q')){
            piece.setAttribute('src', './assets/bqueen.png');
            squares[i].appendChild(piece);
        }
    }
    
    for(let i = 8; i < 16; i++){
        let piece : HTMLElement = document.createElement('img');
        piece.setAttribute('src', './assets/bpawn.png');
    
        squares[i].appendChild(piece);
    }
    
    
    for(let i = 63; i > 55; i--){
        let piece : HTMLElement = document.createElement('img');
    
        if(squares[i].classList.contains('t')){
            piece.setAttribute('src', './assets/wrook.png');
            squares[i].appendChild(piece);
        } else if(squares[i].classList.contains('k')){
            piece.setAttribute('src', './assets/wknight.png');
            squares[i].appendChild(piece);
        } else if(squares[i].classList.contains('b')){
            piece.setAttribute('src', './assets/wbishop.png');
            squares[i].appendChild(piece);
        } else if(squares[i].classList.contains('ki')){
            piece.setAttribute('src', './assets/wking.png');
            squares[i].appendChild(piece);
        } else if(squares[i].classList.contains('q')){
            piece.setAttribute('src', './assets/wqueen.png');
            squares[i].appendChild(piece);
        }
    }
    
    for(let i = 55; i > 47; i--){
        let piece : HTMLElement = document.createElement('img');
        piece.setAttribute('src', './assets/wpawn.png');
    
        squares[i].appendChild(piece);
    }
}
