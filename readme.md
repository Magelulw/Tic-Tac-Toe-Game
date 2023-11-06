# fix the player name bug
# 


```javascript

       
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


        game.handlePlayerSelection()

        handlePlayerSelection,


```