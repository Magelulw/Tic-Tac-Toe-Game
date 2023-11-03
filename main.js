function gameModule(){

    let currentPlayer = 0;
    const gameSection = document.querySelector(".gameSection")

    let player1Score = 0;
    let player2Score = 0;

    const gameBoardSize = 8 


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


    function startGameBtn(){
        const startGameBtn = document.querySelector(".startGameBtn")
        const selectSection = document.querySelector(".selectSection")
        const playerText = document.querySelector(".playerText")

    
        startGameBtn.addEventListener("click", function(){
            selectSection.classList.add("hidden")
            gameSection.classList.remove("hidden")
            playerText.classList.remove("hidden")

            setupGameBoard()
        })
    }

    function handlePlayerSelection(){
        const playerTypes = {
            human:"human",
            bot: "bot",
        }

        let player1 = "";
        let player2 = "";

        const choosePlayerBtn = document.querySelectorAll(".buttonHover");

        const playerChoices = {
            human1: document.getElementById("human1"),
            bot1: document.getElementById("bot1"),
            human2: document.getElementById("human2"),
            bot2: document.getElementById("bot2"),
        };

        choosePlayerBtn.forEach(btn =>{
            btn.addEventListener("click",function(){
                let value = btn.value

                switch (value) {
                    case "human1":
                        player1 = playerTypes.human;
                        playerChoices.human1.classList.add("selectedChoiceBtn");
                        playerChoices.bot1.classList.remove("selectedChoiceBtn");
                        break;
                    case "bot1":
                        player1 = playerTypes.bot;
                        playerChoices.bot1.classList.add("selectedChoiceBtn");
                        playerChoices.human1.classList.remove("selectedChoiceBtn");
                        break;
                    case "human2":
                        player2 = playerTypes.human;
                        playerChoices.human2.classList.add("selectedChoiceBtn");
                        playerChoices.bot2.classList.remove("selectedChoiceBtn");
                        break;
                    case "bot2":
                        player2 = playerTypes.bot;
                        playerChoices.bot2.classList.add("selectedChoiceBtn");
                        playerChoices.human2.classList.remove("selectedChoiceBtn");
                        break;
                    default:
                        console.error("Invalid player selection");
                }
            })
            
        })

    }

    

    function setupGameBoard(){
        const gameFieldSection = document.querySelector(".gameSection");
        const playerText = document.querySelector(".playerText");
        playerText.textContent = "X begins"

    
        for(let i = 0; i <= gameBoardSize; i++){
            let newDiv = document.createElement("div")
            newDiv.value = i
            newDiv.setAttribute("gameCell",i)
            newDiv.classList.add("CellSize")
            gameFieldSection.appendChild(newDiv)

            newDiv.addEventListener("click",() =>{
            handleClick(newDiv, playerText)
        })
        }

    }

    function handleClick(cell, playerText){
        if(!cell.classList.contains("zerosSign") && !cell.classList.contains("plusSign")){
            if(currentPlayer === 0){
                cell.classList.add("crossSign");
                playerText.textContent = "O's turn";
                console.log(cell.value)
                
            }else if(currentPlayer === 1){
                cell.classList.add("zeroSign")
                playerText.textContent = "X's turn";
                console.log(cell.value)

            }
            currentPlayer = 1 - currentPlayer
            declareWinner()
        }
    }


    function declareWinner(){
        const playerText = document.querySelector(".playerText")
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

        finalWinner()

    }




    
    function finalWinner(){

        if(player1Score === 2){
            console.log(`You won player1`)
            return;
        }
        else if(player2Score === 2){
            console.log(`You won player2`)
            return;
        }
    }




    return{
        startGameBtn,
        handlePlayerSelection,
        declareWinner,

    }
}


function gameInitializer(){
    const game = gameModule()
    
    function playTheGame(){
        game.startGameBtn()
        game.handlePlayerSelection()
    }

    return {
        playTheGame,
    }
}




const gameInit = gameInitializer();
gameInit.playTheGame();
