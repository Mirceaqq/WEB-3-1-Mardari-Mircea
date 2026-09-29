function calculateSum(a, b) {
    let c = a + b;
    return c;
}

console.log(calculateSum(2, 8));
console.log(calculateSum(600, 400));

const student = {
    name: "Mircea",
    age: 18,
    grade: 12,
};

function introduce() {
    console.log(
        "Salut, numele meu este " +
        student.name +
        ", am " +
        student.age +
        " ani și am nota " +
        student.grade
    );
}

student.introduce = introduce;
student.introduce();

student.grade = 10;
console.log(student.grade);

const variante = ["piatra", "hartia", "foarfeca"];

const nume = {
    piatra: "Piatra",
    hartia: "Hârtia",
    foarfeca: "Foarfeca"
};

const gameScore = {
    player: 0,
    computer: 0,
    draws: 0,
    totalRounds: 0
};

function displayScore() {
    document.getElementById("playerScore").textContent = this.player;
    document.getElementById("computerScore").textContent = this.computer;
    document.getElementById("drawScore").textContent = this.draws;
    document.getElementById("totalRounds").textContent = this.totalRounds;
}

gameScore.displayScore = displayScore;
gameScore.displayScore();

function getComputerChoice() {
    const index = Math.floor(Math.random() * variante.length);
    return variante[index];
}

function getWinner(userChoice, computerChoice) {
    gameScore.totalRounds++;

    if (userChoice === computerChoice) {
        gameScore.draws++;
        return "Egalitate!";
    }

    if (
        (userChoice === "piatra" && computerChoice === "foarfeca") ||
        (userChoice === "foarfeca" && computerChoice === "hartia") ||
        (userChoice === "hartia" && computerChoice === "piatra")
    ) {
        gameScore.player++;
        return "Ai câștigat!";
    }

    gameScore.computer++;
    return "Calculatorul a câștigat!";
}

function displayLeader() {
    const leaderMessage = document.getElementById("leaderMessage");

    if (gameScore.player > gameScore.computer) {
        leaderMessage.textContent = "Tu ești în avantaj!";
    } else if (gameScore.computer > gameScore.player) {
        leaderMessage.textContent = "Calculatorul este în avantaj!";
    } else {
        leaderMessage.textContent = "Scorul este egal.";
    }
}

function checkWinner() {
    const finalMessage = document.getElementById("finalMessage");

    if (gameScore.player === 5) {
        finalMessage.textContent = "Felicitări! Ai acumulat 5 puncte!";
        disableButtons();
    } else if (gameScore.computer === 5) {
        finalMessage.textContent = "Calculatorul a acumulat 5 puncte!";
        disableButtons();
    }
}

function disableButtons() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

function enableButtons() {
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
}

function playRound(userChoice) {
    if (gameScore.player === 5 || gameScore.computer === 5) {
        return;
    }

    const computerChoice = getComputerChoice();
    const result = getWinner(userChoice, computerChoice);

    document.getElementById("playerChoiceText").textContent =
        nume[userChoice];

    document.getElementById("computerChoiceText").textContent =
        nume[computerChoice];

    const gameResultText = document.getElementById("gameResultText");
    gameResultText.textContent = result;

    gameResultText.classList.remove("win", "lose", "draw");

    if (userChoice === computerChoice) {
        gameResultText.classList.add("draw");
    } else if (
        (userChoice === "piatra" && computerChoice === "foarfeca") ||
        (userChoice === "foarfeca" && computerChoice === "hartia") ||
        (userChoice === "hartia" && computerChoice === "piatra")
    ) {
        gameResultText.classList.add("win");
    } else {
        gameResultText.classList.add("lose");
    }

    gameScore.displayScore();
    displayLeader();
    checkWinner();
}

function resetGame() {
    gameScore.player = 0;
    gameScore.computer = 0;
    gameScore.draws = 0;
    gameScore.totalRounds = 0;

    document.getElementById("playerChoiceText").textContent = "...";
    document.getElementById("computerChoiceText").textContent = "...";
    document.getElementById("gameResultText").textContent = "";

    document.getElementById("gameResultText").classList.remove(
        "win",
        "lose",
        "draw"
    );

    document.getElementById("finalMessage").textContent = "";

    gameScore.displayScore();
    displayLeader();
    enableButtons();
}

document.getElementById("rock").addEventListener("click", function () {
    playRound("piatra");
});

document.getElementById("paper").addEventListener("click", function () {
    playRound("hartia");
});

document.getElementById("scissors").addEventListener("click", function () {
    playRound("foarfeca");
});

document.getElementById("gameReset").addEventListener("click", function () {
    resetGame();
});
