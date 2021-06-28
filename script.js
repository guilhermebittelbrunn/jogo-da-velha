//INTERFACE

button = document.getElementById('button')
squares = document.querySelectorAll('.square')

function load(){
    for (var a = 0; a < squares.length; a++){
        squares[a].addEventListener('click', write)
    }
}
function reload(){
    window.location.reload(false);
}
function write(){
    this.children[0].setAttribute('class', moves[time])
    let pos = parseInt(this.getAttribute('id'))
    field.splice(pos, 1, moves[time])
    setTimeout(win, 100)
    if (time == 0){
        time = 1
    }else{
        time = 0
    }
    this.removeEventListener('click', write)
}
//MECÂNICAS DO GAME

var time = 0
var field = ['','','','','','','','','']
var moves = ['x', 'o']
var interval;
var game_over = document.getElementById('end_game')

function win(){
    var win_form = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ]
    for (var b = 0; b < win_form.length; b++){
        let sequencia = win_form[b]
        let pos1 = sequencia[0]
        let pos2 = sequencia[1]
        let pos3 = sequencia[2]
        if (field[pos1] == field[pos2] && field[pos1] == field[pos3] && field[pos1] != ''){
            squares[pos1].style.backgroundColor = 'rgb(84, 124, 199)'
            squares[pos2].style.backgroundColor = 'rgb(84, 124, 199)'
            squares[pos3].style.backgroundColor = 'rgb(84, 124, 199)'
            let winner = field[pos1]
            setTimeout(end_game,300)
            game_over.children[0].innerText = `Fim de jogo \n O vencedor foi: ${winner}`
        }  
    }
}
function end_game(){
    game_over.style.display = 'flex'
    document.body.style.overflow = 'hidden'
    for (var a = 0; a < squares.length; a++){
        squares[a].removeEventListener('click', write)
    }
}
