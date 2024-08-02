function getComputerChoice() {
    let ComputerChoice = Math.random();
    if (ComputerChoice <= 0.33) {
        return "rock";
    }
    else if (ComputerChoice > 0.33 && ComputerChoice <= 0.66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

/*function getHumanChoice() {
    while (true) {
        let HumanChoice = prompt("Enter your choice(rock/paper/scissors)").toLowerCase();
        if (HumanChoice === "rock" || HumanChoice === "paper" || HumanChoice === "scissors") {
            return HumanChoice;
        } 
        else {
            window.prompt("Enter a valid choice!(rock/paper/scissors)");
        }     
    }
}*/

let HumanScore = 0;
let ComputerScore = 0;

function playround(Humanselection,Computerselection) {

    let resultMessage = "";

    if (Humanselection == "rock") {
        
        switch (Computerselection) {
            case "rock":
                resultMessage = "It's a tie!";
                break;    
            case "paper":
                ComputerScore++;
                resultMessage = "Computer wins the round!";
                break;
            case "scissors":
                HumanScore++;
                resultMessage = "Congrats! You won the round!";
                break;
        }
    }
    else if (Humanselection == "paper") {
        
        switch (Computerselection) {
            case "paper":
                resultMessage = "It's a tie!";
                break;
            case "scissors":
                ComputerScore++;
                resultMessage = "Computer wins the round!";
                break;
            case "rock":
                HumanScore++;
                resultMessage = "Congrats! You won the round!";
                break;        

        }
    }
    else if (Humanselection == "scissors"){
        switch (Computerselection) {
            case "scissors":
                resultMessage = "It's a tie!";
                break;
            case "rock":
                ComputerScore++;
                resultMessage = "Computer wins the round!";
                break;   
            case "paper":
                HumanScore++;
                resultMessage = "Congrats! You won the round!";
                break;        
        }
    }
    else {
        resultMessage = "Invalid!";
    }
    document.getElementById("result").innerText = resultMessage;
    document.getElementById("score").innerText = `score: Player: ${HumanScore}, Computer: ${ComputerScore}`;

    if (HumanScore === 5) {
        document.getElementById("winner").innerText = "Congrats! You won the game.";
        resetGame();
    }
    else if (ComputerScore === 5) {
        document.getElementById("winner").innerText = "Computer wins the game.";
        resetGame();
    }
}

function resetGame() {
    HumanScore = 0;
    ComputerScore = 0;
}
/*function playGame() {
        while(HumanScore < 5 && ComputerScore < 5) {
            let Humanselection = getHumanChoice();
            let Computerselection = getComputerChoice();
            console.log(`Player Choice: ${Humanselection}`);
            console.log(`Computer Choice: ${Computerselection}`);
            playround(Humanselection,Computerselection);
            console.log(`Score: Player: ${HumanScore}, Computer: ${ComputerScore}`);
        }
        if (HumanScore === 5) {
            alert("Congrats! You won the game!");
        } else {
            alert("Computer wins the game!");
        }
}
playGame(); */

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", function() {
        let Humanselection = this.id;
        let Computerselection = getComputerChoice();
        
        playround(Humanselection, Computerselection);
        
        console.log(`Score: Player: ${HumanScore}, Computer: ${ComputerScore}`);
    });
});

