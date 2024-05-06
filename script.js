const buttons = document.querySelectorAll(".choices");
let h1 = document.querySelector("h1");
let userScoreCount = document.querySelector("#user-score-count");
let compScoreCount = document.querySelector("#comp-score-count");
let drawScoreCount = document.querySelector("#draw-score-count");
let reset = document.getElementById("reset");
let draw = 0;
let userWin = 0;
let compWin = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let userSelection = button.getAttribute("id");
    userSelection = userSelection.toLowerCase();
    //generation computer selection on basis user selection
    const options = ["rock", "Paper", "scissor"];
    let randomNumer = Math.floor(Math.random() * 3);
    let compSelection = options[randomNumer].toLowerCase();
    console.log(compSelection);
    checkWinner(userSelection, compSelection);
  });
});
const checkWinner = (userSelection, compSelection) => {
  if (userSelection === compSelection) {
    draw++;
    drawScoreCount.innerText = draw;
    h1.innerText = "Draw";
  } else if (
    compSelection !== "paper" &&
    compSelection === "scissor" &&
    userSelection === "rock"
  ) {
    userWin++;
    userScoreCount.innerText = userWin;
    h1.innerText = "You won";
  } else if (
    compSelection !== "scissor" &&
    compSelection === "rock" &&
    userSelection === "paper"
  ) {
    userWin++;
    userScoreCount.innerText = userWin;
    h1.innerText = "You won";
  } else if (
    compSelection !== "rock" &&
    compSelection === "paper" &&
    userSelection === "scissor"
  ) {
    userWin++;
    userScoreCount.innerText = userWin;
    h1.innerText = "You won";
  } else {
    compWin++;
    h1.innerText = "Computer won";
    compScoreCount.innerText = compWin;
  }
};
reset.addEventListener("click", () => {
  draw = 0;
  userWin = 0;
  compWin = 0;
  compScoreCount.innerText = compWin;
  userScoreCount.innerText = userWin;
  drawScoreCount.innerText = draw;
  h1.innerText = "Stone Paper Scissors";
});
