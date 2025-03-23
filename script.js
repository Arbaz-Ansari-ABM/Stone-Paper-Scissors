let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const comScorePara = document.querySelector("#comp-score");

const genComChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randInx = Math.floor(Math.random() * 3);
    return option[randInx];
}

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "Game Was Draw. Play Again"
    msg.style.backgroundColor = "black"
}

const showWinner = (userWin, userChoice, comChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win");
        msg.innerText = `You Win! Your ${userChoice} beat ${comChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        comScorePara.innerText = compScore;
        console.log("you lose");
        msg.innerText = `You Lose! ${comChoice} beat Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //Generate Computer Choice
    const comChoice = genComChoice();
    console.log("pc choice = ", comChoice);

    if(userChoice === comChoice){
        //Draw game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = comChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            userWin = comChoice === "scissors" ? false : true;
        } else {
            userWin = comChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, comChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

