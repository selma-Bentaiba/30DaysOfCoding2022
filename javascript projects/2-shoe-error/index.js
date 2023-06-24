// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let clickk = document.getElementById("error")
let message = "Something went wrong, please try again"

function purchase(){
    
    clickk.textContent = message 
console.log(message)
}


