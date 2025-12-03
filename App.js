const container = document.querySelector(".container")
const containerDiv = container.children
const restart = document.querySelector(".restart")
const startButton = document.querySelector(".start_button")
const congratulation = document.querySelector(".third_section")
const playAgain = document.querySelector(".play_again")
const winningCombination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let xTurn = true
let counter = 0



const initGame = () => {

    restart.onclick = () =>{
        for(const div of containerDiv){
            div.textContent = ""
        }
    }

    startButton.onclick = () => {
        startButton.parentElement.style.display = "none"
        restart.parentElement.style.display = "block"
    }


    for(const div of containerDiv){
        div.addEventListener("click", (event) => {
            if (event.target.textContent === "" && xTurn){
                event.target.textContent = "X"
                xTurn = false counter++
                
            }else if(event.target.textContent === "" && xTurn === false){
                event.target.textContent ="O"
                xTurn = true
                 counter++
            } 
            gameLogic()
        })
    }

    playAgain.onclick = () => {
        for(const div of containerDiv){
            div.textContent = ""
        }
        startButton.parentElement.style.display = "flex"
        restart.parentElement.style.display = "none"
        congratulation.style.display ="none"
        counter = 0
    }

}


const gameLogic = () => {
    for(const combination of winningCombination){
        const [a, b, c] = combination
        const cellA = containerDiv[a].textContent
        const cellB = containerDiv[b].textContent
        const cellC = containerDiv[c].textContent
        if (cellA && cellA === cellB && cellB === cellC){
            congratulationMessage(cellA)
            break
        }else if(counter===9){
            congratulationMessage("Tie")
        }
    }
}


const congratulationMessage = (message) => {
     restart.parentElement.style.display = "none"
     congratulation.style.display ="flex"
     if (message ==="Tie"){
         congratulation.firstElementChild.innerHTML = "<h1> Its a Tie </h1> <h2> Thanks for playing </h2>"
     }else{
         congratulation.firstElementChild.lastElementChild.textContent = `${message} wins`
     }
}

initGame()

