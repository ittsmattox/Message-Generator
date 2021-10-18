// const messageButton = document.getElementById("message-button")

// function alertMe() {
//     console.log("The user access the message button")
// }

// messageButton.addEventListener('click', alertMe)



marvelMessages = [
        {message: 'Make a move, Reindeer Games.'},
        {message: "I don't know if you've been in a fight before, but there's not usually this much talking."},
        {message: "That man is playing Galaga! Thought we wouldn't notice, but we did."},
        {message: "Doth mother know you weareth her drapes?"}
    ]

marvelMessages.forEach(function (message){
console.log(message)
})

// let randomChoice = marvelMessages[Math.floor(Math.random() * marvelMessages.length)];
// console.log(randomChoice)
function getRandomItem(arr) {


// log a random message from the object to the console 
const randomIndex = Math.floor(Math.random() * arr.length)
const item = arr[randomIndex]
return item

}

const result = getRandomItem(marvelMessages)
console.log(result);

const messageGenerator = document.getElementById('message-button')
function alertMe() {
    console.log(result)
}
messageGenerator.addEventListener('click', alertMe)