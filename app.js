const boxes = document.querySelectorAll('.box')
const reset = document.querySelector('#reset')
let newBtn = document.querySelector('#new-btn')
let msg = document.querySelector('#msg')
let msgContainer = document.querySelector('.msg-container')


let turn0 =true; // player X or 0

const winPtterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=> {
    box.addEventListener('click', ()=> {
        if (turn0 == true) {
            box.innerHTML = 'O';
            turn0 = false;
        } else {
            box.innerHTML = 'X';
            turn0 = true;
        }
        box.disabled = true
        checkWinner()
    })
})



const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true
    }
}


const enabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = false
        box.innerText = ''
    }
}

const showWinner = (winner)=> {
    msg.innerText = `Congratulation, winner is ${winner}`
    msgContainer.classList.remove('hide')
    disabledBoxes()
}


const checkWinner = ()=> {
    for (let pattern of winPtterns) {
        let pos1 = boxes[pattern[0]].innerHTML;
        let pos2 = boxes[pattern[1]].innerHTML;
        let pos3 = boxes[pattern[2]].innerHTML;

        if (pos1 != '' && pos2 != '' && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                showWinner(pos1)
        }

    }
}
}


const resetGame = () => {
    turn0 = true
    enabledBoxes()
    msgContainer.classList.add('hide')
}

newBtn.addEventListener('click', resetGame)
reset.addEventListener('click', resetGame)

