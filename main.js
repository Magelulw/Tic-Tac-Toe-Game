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

        choosePlayerBtn.forEach(btn =>{
            btn.addEventListener("click",function(){
                btn.style.backgroundColor = "red"
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
