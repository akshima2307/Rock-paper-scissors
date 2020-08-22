var userScore = 0;
var userTotalScore = document.querySelector(".total-score");
var view = document.querySelector(".view");
var game = document.querySelector(".game");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const play = document.querySelector(".game-view");
const userDiv = document.querySelector(".user");
const computerDiv = document.querySelector(".computer");
const statusDiv = document.querySelector(".status");


// EventHandlers
function main(){
    rock.addEventListener('click', function(){
      gameView("rock");
    });
    paper.addEventListener('click', function(){
      gameView("paper");

    });
    scissors.addEventListener('click', function(){
      gameView("scissors");
    });
}
main();

// Random computer choice
function getcompPick(){
    const computerPicks = ["rock","paper","scissors"];
    const random = Math.floor(Math.random() * computerPicks.length);
    return computerPicks[random];
}


//User View
function gameView(userPick){
    game.style.display = "none";
    play.style.display = "block"
    let computerPick = getcompPick();
    var markup = `
        <h1>YOU PICKED</h1>
        <button id=${userPick} class="btn-circle  ${userPick}">
          <span class="wrapper">
            <img src="./images/icon-${userPick}.svg" >
          </span>
        </button>
        `;
    userDiv.insertAdjacentHTML('beforeend' , markup);
    statusDiv.innerHTML = " ";
    setTimeout(()=> {
      computergameView(computerPick);
      gameLogic(userPick,computerPick);

    },1000);
};


//Computer View
function computergameView(computerPick){
    const markup = `
      <h1>HOUSE PICKED</h1>
        <button class="btn-circle  ${computerPick}">
          <span class="wrapper">
            <img src="./images/icon-${computerPick}.svg" >
          </span>
        </button>
        `;
    computerDiv.insertAdjacentHTML('beforeend' , markup);
};

// Comparing user and computer choices
function gameLogic(userPicks,computerPicks){
  console.log(userPicks , computerPicks);
  if(userPicks === "rock" && computerPicks === "rock" ||
    userPicks === "paper" && computerPicks === "paper" ||
    userPicks === "scissors" && computerPicks === "scissors"){
    Draw();
  }
  else if(userPicks === "rock" && computerPicks === "paper"||
      userPicks === "paper" && computerPicks === "scissors" ||
      userPicks === "scissors" && computerPicks === "rock"){
    console.log("User Choice =>  " + userPicks);
    console.log("Computer Choice =>  " + computerPicks);

    Lose();
  }
  else if(userPicks === "paper" && computerPicks === "rock"||
      userPicks === "scissors" && computerPicks === "paper" ||
      userPicks === "rock" && computerPicks === "scissors"){
    console.log("User Choice =>  " + userPicks);
    console.log("Computer Choice =>  " + computerPicks);

    Win();
  }
}

function Win(){
  userScore++;
  userTotalScore.innerHTML = userScore;
  setTimeout(() => {
    renderStatus("WIN");
  },1000)
}

function Lose(){
  userScore--;
  userTotalScore.innerHTML = userScore;
  console.log("You Loss");
  setTimeout(() => {
    renderStatus("LOSS");
  },1000)

 };

function Draw(){
  setTimeout(() => {
    renderStatus("TIE");
  },1000)
}

function Bg(){

}

//Status View
function renderStatus(s){
  const markup = `
  <h1 class="res"> GAME ${s} </h1>
  <a href="#" class="playmore" onclick=playAgain() >PLAY AGAIN</a>
  `;
  statusDiv.innerHTML = markup;
}


playAgain = () => {
  play.style.display = "none";
  computerDiv.innerHTML = "";
  userDiv.innerHTML ="";
  game.style.display = "block";
}
