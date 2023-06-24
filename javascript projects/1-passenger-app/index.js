// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")
function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    count 
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
  let dashCount = count  + " - "
       // 3. Render the variable in the saveEl using innerText
   // saveEl.textContent += dashCount
    saveEl.textContent += dashCount
    count = 0 
        countEl.textContent = 0

    
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count)
}
