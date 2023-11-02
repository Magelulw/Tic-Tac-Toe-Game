function gameModule(){

    let currentPlayer = 0;
    const gameSection = document.querySelector(".gameSection")


    function startGameBtn(){
        const startGameBtn = document.querySelector(".startGameBtn")
        const selectSection = document.querySelector(".selectSection")
        const playerText = document.querySelector(".playerText")

    
        startGameBtn.addEventListener("click", function(){
            selectSection.classList.add("hidden")
            gameSection.classList.remove("hidden")
            playerText.classList.remove("hidden")

            addGameField()
        })
    }

    function choosePlayer(){
        let player1 = "";
        let player2 = "";



        const choosePlayerBtn = document.querySelectorAll(".buttonHover")

        const playerHuman1Choice = document.getElementById("human1")
        const playerHuman2Choice = document.getElementById("human2")
        const playerBot1Choice = document.getElementById("bot1")
        const playerBot2Choice = document.getElementById("bot2")

        choosePlayerBtn.forEach(btn =>{
            btn.addEventListener("click",function(){
                let value = btn.value

                switch(value) {
                    case "human1":
                        player1 = "human"
                        playerHuman1Choice.classList.add("selectedChoiceBtn")
                        playerBot1Choice.classList.remove("selectedChoiceBtn")
                        

                        break;

                    case "bot1":
                        player1 = "bot"
                        playerBot1Choice.classList.add("selectedChoiceBtn")
                        playerHuman1Choice.classList.remove("selectedChoiceBtn")
                        

                        break;
                        
                    case "human2":
                        player2 = "human"
                        playerHuman2Choice.classList.add("selectedChoiceBtn")
                        playerBot2Choice.classList.remove("selectedChoiceBtn")
    
                        break;        

                    case "bot2":
                        player2 = "bot"
                        playerBot2Choice.classList.add("selectedChoiceBtn")
                        playerHuman2Choice.classList.remove("selectedChoiceBtn")

                        default:
                            return "there is something wrong"
                }
            })
            
        })

    }



    function addGameField(){
        const gameFieldSection = document.querySelector(".gameSection");
        const playerText = document.querySelector(".playerText");
        playerText.textContent = "X begins"

    
        for(let i = 0; i <= 8; i++){
            let newDiv = document.createElement("div")
            newDiv.value = i
            newDiv.setAttribute("gameCell",i)
            newDiv.classList.add("CellSize")
            gameFieldSection.appendChild(newDiv)

            newDiv.addEventListener("click",() =>{
                if(!newDiv.classList.contains("zerosSign") && !newDiv.classList.contains("plusSign")){
                    if(currentPlayer === 0){
                        newDiv.classList.add("crossSign");
                        playerText.textContent = "O's turn";
                        console.log(newDiv.value)
                        
                    }else if(currentPlayer === 1){
                        newDiv.classList.add("zeroSign")
                        playerText.textContent = "X's turn";
                        console.log(newDiv.value)

                    }
                    currentPlayer = 1 - currentPlayer
                    declareWinner()
                }
            })
        }

    }

    function playerScore(){
        const playerText = document.querySelector(".playerText")


        let player1Score = 0;
        let player2Score = 0;

        if(player1Score == 5){
            playerText.textContent = "you have won the game"
            return;
        }

        declareWinner(player1Score,player2Score)
    }


    function declareWinner(){
        let player1Score = 0;
        let player2Score = 0;

        const playerText = document.querySelector(".playerText")
        
        
        const winConditions = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
        ]

        const cells = document.querySelectorAll(".CellSize")

        for(const conditions of winConditions){
            const [a, b, c] = conditions;
        

        if( 
            cells[a].classList.contains("crossSign") &&
            cells[b].classList.contains("crossSign") &&
            cells[c].classList.contains("crossSign")
          )
          {

                player1Score++
                playerText.textContent = `Player1: ${player1Score}  Player2: ${player2Score}`

                cells.forEach(cell =>{
                    cell.classList.remove("crossSign");
                    cell.classList.remove("zeroSign")
                })

                return;
            }
            else if(
                cells[a].classList.contains("zeroSign") &&
                cells[b].classList.contains("zeroSign") &&
                cells[c].classList.contains("zeroSign")
            ){

                player2Score++
                playerText.textContent = `Player1: ${player1Score}  Player2: ${player2Score}`
                cells.forEach(cell =>{
                    cell.classList.remove("crossSign");
                    cell.classList.remove("zeroSign")
                })
                return;
            }
        }

    }
    return{
        startGameBtn,
        choosePlayer,
        declareWinner,

    }
}


function gameInitializer(){
    const game = gameModule()
    
    function playTheGame(){
        game.startGameBtn()
        game.choosePlayer()
    }

    return {
        playTheGame,
    }
}




const gameInit = gameInitializer();
gameInit.playTheGame();
