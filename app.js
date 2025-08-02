let userScore=0;
let compScore=0;
let gameActive=true;

const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let user_Score=document.querySelector("#user_score");
let comp_Score=document.querySelector("#comp_score");
let quitBtn=document.querySelector("#quitBtn");
let startBtn=document.querySelector("#startBtn")

function computerChoice(){
    let choices=["rock","paper","scissors"];
    let randIdx=Math.floor(Math.random()*3);
    return choices[randIdx];
}

function drawGame(){
    console.log("Game Draw");
    msg.innerHTML=`Game Draw. Play Again`;
    msg.style.backgroundColor="#081b31";

}

function showWinner(userWin, userChoice, compChoice){
    if(userWin){
        userScore++;
        user_Score.innerText=userScore;

        console.log("You win the game")
        msg.innerHTML=`You Win! Your "<b>${userChoice}"</b> beat Computer's "<b>${compChoice}</b>". Play Again`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        comp_Score.innerText=compScore;
        console.log("You lose the game")
        msg.innerHTML=`You lose! Computer's "<b>${compChoice}"</b> beat Your "<b>${userChoice}</b>". Play Again`;
        msg.style.backgroundColor="red";
    }
}
function playGame(userChoice){
    console.log("user choice =", userChoice);
    let compChoice=computerChoice();
    console.log("comp choice =", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
}

quitBtn.addEventListener("click",()=>{
    gameActive=false;
    msg.innerText="Game Quit! Press Start Again to play";
    msg.style.backgroundColor="grey";
    quitBtn.disabled=true;
    startBtn.disabled=false;
});

startBtn.addEventListener("click", ()=>{
    userScore=0;
    compScore=0;
    gameActive=true;
    user_Score.innerText=userScore;
    comp_Score.innerText=compScore;
    msg.innerHTML="Play Your Move";
    msg.style.backgroundColor="#081b31";
    quitBtn.disabled=false;
    startBtn.disabled=true;
});

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        if(gameActive){
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
        };
    })
})

