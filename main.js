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
        const choosePlayerBtn = document.querySelectorAll(".buttonHover")

        const playerHuman1 = document.getElementById("human1")
        const playerHuman2 = document.getElementById("human2")
        const playerBot1 = document.getElementById("bot1")
        const playerBot2 = document.getElementById("bot2")

        choosePlayerBtn.forEach(btn =>{
            btn.addEventListener("click",function(){
                let value = btn.value

                switch(value) {
                    case "human1":
                        playerHuman1.classList.add("selectedChoiceBtn")
                        playerBot1.classList.remove("selectedChoiceBtn")

                        break;

                    case "bot1":
                        playerBot1.classList.add("selectedChoiceBtn")
                        playerHuman1.classList.remove("selectedChoiceBtn")

                        break;
                        
                    case "human2":
                        playerHuman2.classList.add("selectedChoiceBtn")
                        playerBot2.classList.remove("selectedChoiceBtn")
    
                        break;        

                    case "bot2":
                        playerBot2.classList.add("selectedChoiceBtn")
                        playerHuman2.classList.remove("selectedChoiceBtn")

                        default:
                            return "there is something wrong"
                }
            })
        })

    }

    


    function addGameField(){
        const gameFieldSection = document.querySelector(".gameSection");

    
        for(let i = 1; i <= 9; i++){
            let newDiv = document.createElement("div")
    
            newDiv.classList.add("CellSize")
            gameFieldSection.appendChild(newDiv)
    
        }
    }
    return{
        startGameBtn,
        choosePlayer,
        addGameField
        
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
