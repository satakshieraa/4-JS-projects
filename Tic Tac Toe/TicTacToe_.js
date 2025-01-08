
let boxes  = document.querySelectorAll('.box')
let resetbtn  = document.querySelector('#resetbtn')
let newgame = document.querySelector('#newgame')
let msgcointainer = document.querySelector('.msg-container')
let msg = document.querySelector('#msg')

let turnO = true;
let count = 0;

const winpatterns = [
    [0 , 1 , 2],
    [3 , 4 , 5],
    [6 , 7 , 8],
    [0 , 3 , 6],
    [1 , 4 , 7],
    [2 , 5 , 8],
    [0 , 4 , 8],
    [2 , 4 , 6],
];

const resetgame = () => {
    turnO = true;
    count = 0 ;
    enablebox();
    msgcointainer.classList.add("hide");

}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = 'O';
            turnO = false;
        } else {
            box.innerText = 'X';
            turnO = true;
        }
        box.disabled = true ; 
        count++;
        
        let iswinner = checkwinner();
        if(count === 9 && !iswinner){
            gameDraw()
        }
    })
})

const gameDraw = () => {
    msg.innerText = 'Kamina Game Draw Kyu Kiya Khel Firse';
    msgcointainer.classList.remove('hide');
    disabledbox()
}

const disabledbox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}


const enablebox = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "" ;
    }
}

const showwinner = (winner) => {
    msg.innerText = `Oyai Balai Balai Jit Gayai Oyai`;
    msgcointainer.classList.remove("hide");
     disabledbox();
}

const checkwinner = () => {
    for(let patterns of winpatterns){
        let post1val = boxes[patterns[0]].innerText;
        let post2val = boxes[patterns[1]].innerText;
        let post3val = boxes[patterns[2]].innerText;

        if(post1val != "" && post2val != "" && post3val != "") {
            if (post1val === post2val && post2val === post3val){
            showwinner(post1val);
            return true;
            }
        }
    }
}

newgame.addEventListener('click' , resetgame);
resetbtn.addEventListener('click' , resetgame);