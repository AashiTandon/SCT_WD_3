let playboxes = document.querySelectorAll(".playbox");
let currNode = 'X';
let turn = 'player1';
let count = 0;
const winPatterns = [

    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

playboxes.forEach(function(playbox) {
playbox.addEventListener("click" , () => {

    if(currNode == 'X' ){
        currNode = '0';
        turn = 'player1';
    }
    else{
        currNode = 'X';
        turn = 'player2';
    }
    playbox.textContent = currNode;
    console.log(turn);
    playbox.disabled = true;
    checkWinner();
    count++;
    gameDraw();
});
});

const checkWinner = () => {

    for(let pattern of winPatterns){
        let pos1val = playboxes[pattern[0]].innerText;
        let pos2val = playboxes[pattern[1]].innerText;
        let pos3val = playboxes[pattern[2]].innerText;
    
        if(pos1val != '' && pos2val != '' && pos3val != ''){
            if(pos1val === pos2val &&  pos2val === pos3val){
                alert( "Congratulations " + turn + " is the winner");
            }
        }
    }
};

const gameDraw = () => {

    if(count === 9){
        alert("Match draw");
    }
};

