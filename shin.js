const choices = ["Rock", "Paper", "Scissors"];

const userScore = document.getElementById("userScore");
const computerScore = document.getElementById("computerScore");

const resultBanner = document.getElementById("resultBanner");
const userChoiceText = document.getElementById("userChoiceText");
const computerChoiceText = document.getElementById("computerChoiceText");

const btnRock = document.getElementById("btnRock");
const btnPaper = document.getElementById("btnPaper");
const btnScissors = document.getElementById("btnScissors");
const btnReset = document.getElementById("btnReset");

let playerScore = 0;
let aiScore = 0;

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function checkWinner(player, computer) {

    if (player === computer) {
        return "draw";
    }

    if (
        (player === "Rock" && computer === "Scissors") ||
        (player === "Paper" && computer === "Rock") ||
        (player === "Scissors" && computer === "Paper")
    ) {
        return "win";
    }

    return "lose";
}

function playGame(playerChoice) {

    const computerChoice = getComputerChoice();

    userChoiceText.textContent = playerChoice.toUpperCase();
    computerChoiceText.textContent = computerChoice.toUpperCase();

    const result = checkWinner(playerChoice, computerChoice);

    resultBanner.className = "result-banner";

    if (result === "win") {

        playerScore++;
        userScore.textContent = playerScore;

        resultBanner.textContent = "You Win!";
        resultBanner.classList.add("win");

    } else if (result === "lose") {

        aiScore++;
        computerScore.textContent = aiScore;

        resultBanner.textContent = "Computer Wins!";
        resultBanner.classList.add("lose");

    } else {

        resultBanner.textContent = "It's a Draw!";
        resultBanner.classList.add("draw");
    }
}

function resetGame() {

    playerScore = 0;
    aiScore = 0;

    userScore.textContent = 0;
    computerScore.textContent = 0;

    userChoiceText.textContent = "-";
    computerChoiceText.textContent = "-";

    resultBanner.textContent = "Game Reset!";
    resultBanner.className = "result-banner draw";
}

btnRock.addEventListener("click", function () {
    playGame("Rock");
});

btnPaper.addEventListener("click", function () {
    playGame("Paper");
});

btnScissors.addEventListener("click", function () {
    playGame("Scissors");
});

btnReset.addEventListener("click", resetGame);