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
        let HumanChoice = prompt("Enter your choice(rock/paper/scissor)").toLowerCase();
        if (HumanChoice === "rock" || HumanChoice === "paper" || HumanChoice === "scissors") {
            return HumanChoice;
        } 
        else {
            console.log("Enter a valid choice!");
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
                console.log("Computer wins!");
                break;
            case "scissors":
                console.log("Congrats! You win!");
                break;
        }
    }
    else if (Humanselection == "paper") {
        
        switch (Computerselection) {
            case "paper":
                console.log("It's a tie!");
                break;
            case "scissors":
                console.log("Computer wins!");
                break;
            case "rock":
                console.log("Congrats! You win!");
                break;        

        }
    }
    else if (Humanselection == "scissors"){
        switch (Computerselection) {
            case "scissors":
                console.log("It's a tie!");
                break;
            case "rock":
                console.log("Computer wins!");
                break;   
            case "paper":
                console.log("Congrats! You win!");
                break;        

        }
    }
    else {
        return "Invalid";
    }
}

let Humanselection = getHumanChoice();
let Computerselection = getComputerChoice();

console.log(`Player Choice: ${Humanselection}`);
console.log(`Computer Choice: ${Computerselection}`);
playround(Humanselection,Computerselection);