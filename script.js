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
    let HumanChoice = prompt("Enter your choice(rock/paper/scissor)");
    if (HumanChoice === "rock" || HumanChoice === "paper" || HumanChoice === "scissor") {
        return HumanChoice;
    }
    else {
        return "Enter a valid choice";
    }
}

console.log(getHumanChoice());
console.log(getComputerChoice());