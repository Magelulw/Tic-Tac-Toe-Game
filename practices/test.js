function createDiv(){
    const game = document.querySelector(".game")
    const summonDivBtn = document.querySelector(".summonDiv")
    
    summonDivBtn.addEventListener("click",function(){
        for(let i = 0; i < 9; i++){
            let newDiv = document.createElement("div")
    
            newDiv.classList.add("cells")

            game.appendChild(newDiv)
        }
    })

}

createDiv()