const messages = [
  "Hello!",
  "How are you doing today?",
  "Have a great day!",
  "What's up?",
  "Hope you're doing well!",
  "Take care!",
  "Enjoy your day!",
  "Stay positive!",
  "Sending you good vibes!",
  "Smile and be happy!",
  "Did I do this right?",
  "I wonder",
  "Hello World",
  "Hey There",
  "Elijah is awesome",
  "arrays are powerful",
  "Javascript is really hard",
  "HTML and CSS are easy"
];

// Function to generate a random index
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// Generate a random message
function generateRandomMessage() {
  const randomIndex = getRandomIndex(messages);
  const randomMessage = messages[randomIndex];
  return randomMessage;
}


// Call the function to generate a random message

const randomMessage = generateRandomMessage()



function setRandomMessage () {
var newContent = randomMessage;
var contentHolder = document.getElementById('content-holder');

contentHolder.innerHTML = newContent;
}

