let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

let btn = document.getElementById("fetch")
// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
btn.addEventListener("click", function(){
    console.log(data[0].score)
} )
// Log Jane's score when the button is clicked (via data)
