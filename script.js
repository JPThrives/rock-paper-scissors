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
                console.log("It's a tie!");
                break;    
            case "paper":
                ComputerScore++;
                console.log("Computer wins the round!");
                break;
            case "scissors":
                HumanScore++;
                console.log("Congrats! You won the round!");
                break;
        }
    }
    else if (Humanselection == "paper") {
        
        switch (Computerselection) {
            case "paper":
                console.log("It's a tie!");
                break;
            case "scissors":
                ComputerScore++;
                console.log("Computer wins the round!");
                break;
            case "rock":
                HumanScore++;
                console.log("CCongrats! You won the round!");
                break;        

        }
    }
    else if (Humanselection == "scissors"){
        switch (Computerselection) {
            case "scissors":
                console.log("It's a tie!");
                break;
            case "rock":
                ComputerScore++;
                console.log("Computer wins the round!");
                break;   
            case "paper":
                HumanScore++;
                console.log("Congrats! You won the round!");
                break;        
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