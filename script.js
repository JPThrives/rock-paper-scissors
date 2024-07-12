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

console.log(getComputerChoice());