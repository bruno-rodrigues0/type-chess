const squares = document.querySelectorAll('.board>div') as NodeListOf<HTMLElement>;

for(let i = 0; i < 8; i++){
    let piece : HTMLElement = document.createElement('img');
    piece.setAttribute('src', './assets/brook.png');
    piece.style.width = '100px';
    piece.style.height = '100px';
    squares[i].appendChild(piece);
}


