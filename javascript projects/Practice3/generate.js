// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2:If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"
let countries =["China", "India", "USA"]
let country = "largest countries"
let fruits = ["Apples", "Bananas"]
let fruit ="best fruits" 
// Use both a for loop and a template string to solve the challenge
function generateSentence(desc, arr) {
    console.log(`the ${arr.length} ${desc} are :  
    `)
    for(let i=0; i<arr.length; i++){
       console.log( arr[i] ) 
    }
}
generateSentence(country,countries)

//scrimba solution 
function generateSentence(desc, arr) {
    let baseString = `The ${arr.length} ${desc} are `
    const lastIndex = arr.length - 1
    for (let i = 0; i < arr.length; i++) {
        if (i === lastIndex) {
            baseString += arr[i]
        } else {
            baseString += arr[i] + ", "   
        }
    }
    return baseString
}

const sentence = generateSentence("highest mountains", ["Mount Everest", "K2"])
console.log(sentence)