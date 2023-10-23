dont use much global codes

working code
```javascript
        const choosePlayerBtn = document.querySelectorAll(".buttonHover");
        
        choosePlayerBtn.forEach(player =>{
            player.addEventListener("click", () =>{
                console.log("clicked")
            })
        })
```
