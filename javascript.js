let computerScore = 0;
let userScore = 0;

let pss2 = ()=>{

let y = Math.floor(Math.random() * 3);
if(y == 0 ){
return "paper"
}else if(y == 1){
return "scissors" 
}else if(y == 2){
return "stone"
}
}


let playerInput = () => {
userInput = prompt("input PSS");
userInput = userInput.toLowerCase();
playerSelection = userInput;
return playerSelection;

}

function playRound(playerSelected, computerSelected) {


let x1 = playerSelected();
let c1 = computerSelected();
if (x1 == c1){console.log("Draw "+c1+" "+x1)}
if (x1 == "paper"&& x1 !== c1) {
	if(c1 =="scissors"){computerScore+=1; console.log("Computer selection: scissors won")
}else{
	userScore+=1; console.log("User selection: Paper won")
}
}else if (x1 == "stone" && x1 !== c1){
	if(c1 =="paper"){computerScore+=1 ;console.log("Computer selection: paper won")
}else{
	userScore+=1; console.log("User selection: stone won")
}
}else if (x1 == "scissors"  && x1 !== c1){
	if(c1 =="stone"){computerScore+=1;console.log("Computer selection: stone won")
}else{
	userScore+=1;console.log("User selection: scissors won")
} 
}


console.log(c1);
console.log("user: "+ userScore+ " |   computer: "+ computerScore);
console.log("---------------------------------------------------");
}

 
let game = ()=>{ //test code to confirm logic
    for (let i = 0; i < 5; i++) {
   playRound(playerInput, pss2) ;
}
console.log("Final score - user: "+ userScore+ " |   computer: "+ computerScore);
}
game();