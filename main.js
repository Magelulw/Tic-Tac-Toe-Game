function gameModule(){

    let currentPlayer = 0;

    function startGameBtn(){
        const startGameBtn = document.querySelector(".startGameBtn")
        const selectSection = document.querySelector(".selectSection")
        const gameSection = document.querySelector(".gameSection")
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

    function playerTurn() {
        const playerText = document.querySelector(".playerText");

        if (currentPlayer === 0) {
            playerText.textContent = "Player 1's turn";
        } else if (currentPlayer === 1) {
            playerText.textContent = "Player 2's turn";
        }
    }


    function addGameField(){
        const gameFieldSection = document.querySelector(".gameSection");

    
        for(let i = 1; i <= 9; i++){
            let newDiv = document.createElement("div")
            newDiv.setAttribute("gameCell",i)
            newDiv.classList.add("CellSize")
            gameFieldSection.appendChild(newDiv)

            newDiv.addEventListener("click",() =>{
                if(!newDiv.classList.contains("zerosSign") && !newDiv.classList.contains("plusSign")){
                    if(currentPlayer === 0){
                        newDiv.classList.add("crossSign")
                    }else if(currentPlayer === 1){
                        newDiv.classList.add("zeroSign")
                    }
                    currentPlayer = 1 - currentPlayer
                    playerTurn()
                }
            })
        }

    }
    return{
        startGameBtn,
        choosePlayer,
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
