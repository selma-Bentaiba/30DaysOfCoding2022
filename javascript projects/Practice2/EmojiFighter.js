let fighters = ["🐉", "🐥", "🐊","🐱‍👤", "🦍", "🐢", "🐩", "🐱‍💻", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    let random = fighters[Math.floor(Math.random()*17)]
    let random2 =fighters[Math.floor(Math.random()*17)]
    stageEl.textContent = random + " vs " + random2
    
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
})