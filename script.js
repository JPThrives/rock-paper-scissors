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

function getHumanChoice() {
    while (true) {
        let HumanChoice = prompt("Enter your choice(rock/paper/scissors)").toLowerCase();
        if (HumanChoice === "rock" || HumanChoice === "paper" || HumanChoice === "scissors") {
            return HumanChoice;
        } 
        else {
            window.prompt("Enter a valid choice!(rock/paper/scissors)");
        }     
    }
}

let HumanScore = 0;
let ComputerScore = 0;

function playround(Humanselection,Computerselection) {

    if (Humanselection == "rock") {
        
        switch (Computerselection) {
            case "rock":
                return "It's a tie!";   
            case "paper":
                ComputerScore++;
                return "Computer wins the round!";
            case "scissors":
                HumanScore++;
                return "Congrats! You won the round!";
        }
    }
    else if (Humanselection == "paper") {
        
        switch (Computerselection) {
            case "paper":
                return "It's a tie!"; 
            case "scissors":
                ComputerScore++;
                return "Computer wins the round!";
            case "rock":
                HumanScore++;
                return "Congrats! You won the round!";      

        }
    }
    else if (Humanselection == "scissors"){
        switch (Computerselection) {
            case "scissors":
                return "It's a tie!";
            case "rock":
                ComputerScore++;
                return "Computer wins the round!";  
            case "paper":
                HumanScore++;
                return "Congrats! You won the round!";       
        }
    }
    else {
        return "Invalid";
    }
}
function playGame() {
        while(HumanScore < 5 && ComputerScore < 5) {
            let Humanselection = getHumanChoice();
            let Computerselection = getComputerChoice();
            console.log(`Player Choice: ${Humanselection}`);
            console.log(`Computer Choice: ${Computerselection}`);
            playround(Humanselection,Computerselection);
            console.log(`Score: Player: ${HumanScore}, Computer: ${ComputerScore}`);
        }

}
playGame();