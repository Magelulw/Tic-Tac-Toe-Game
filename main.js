function gameModule(){

    function startGameBtn(){
        const startGameBtn = document.querySelector(".startGameBtn")
        const selectSection = document.querySelector(".selectSection")
        const game = document.querySelector(".game")
    
        startGameBtn.addEventListener("click", function(){
            selectSection.classList.add("hidden")
            game.classList.remove("hidden")
        })
    }

    function addGameField(){
        const gameFieldSection = document.querySelector("gameSection");
        const startGameBtn = document.querySelector(".")
    
        for(let i = 0; i <= 9; i++){
            let newDiv = document.createElement("div")
    
            newDiv.classList.add("cells")
    
    
        }
    }
    return{
        startGameBtn,
        addGameField
    }
}