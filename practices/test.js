function gameModule(){

    function startGameBtn(){
        const startGameBtn = document.querySelector(".startGameBtn")
        const selectSection = document.querySelector(".selectSection")
        const gameSection = document.querySelector(".gameSection")
    
        startGameBtn.addEventListener("click", function(){
            selectSection.classList.add("hidden")
            gameSection.classList.remove("hidden")
            

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

        chooseSign(player1,player2)
    }

    function chooseSign(player1,player2){
        let gameTurn = 0;
        
        switch(gameTurn){
            case gameTurn % 2 == 0:

        }



    }


    


    function addGameField(){
        const gameFieldSection = document.querySelector(".gameSection");

    
        for(let i = 1; i <= 9; i++){
            let newDiv = document.createElement("div")
            
            newDiv.setAttribute("gameCell",i)
            newDiv.classList.add("CellSize")
            gameFieldSection.appendChild(newDiv)
    
        }

        zeroSignTurn()
    }
    return{
        startGameBtn,
        choosePlayer,
        addGameField,
        
    }
}


function zeroSignTurn(){
    const getNewDiv = document.querySelectorAll(".gameSection [gameCell]")

    getNewDiv.forEach(div =>{
        div.addEventListener("click",() =>{
            div.classList.add("zeroSign")
            div.value = 0
        })
    })
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
