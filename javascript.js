let pss2 = ()=>{

    let y = Math.floor(Math.random() * 3);
    if(y == 0 ){
    return "paper"
    }else if(y == 1){
    return "Scissors"
    }else if(y == 2){
    return "Stone"
    }
    }
    
    // playerInput accepts paper scissors stone and makes it lower case
    let playerInput = () => {
    userInput = prompt("input PSS");
    userInput = userInput.toLowerCase();
    playerSelection = userInput;
    return playerSelection;
    
    }
    
    function playRound(playerSelected, computerSelected) {
    
    let x1 = playerSelected();
    let c1 = computerSelected();
    console.log(x1,c1); //outputs player and computer selection
    }
    
    playRound(playerInput, pss2) ;