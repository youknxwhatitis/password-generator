// Assignment Code
var generateBtn = document.querySelector("#generate");
var validatedNumber; 
var validatedCharacter; 
var validatedUppercase; 
var validatedLowercase; 

//Values for Characters 

character = ["!", "'", "#", "$","%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]"];
//
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const space = [];

var selection; 
//turns letters to uppercase
letters.forEach(element => {
  space.push(element.toUpperCase());
});


function generatePassword(){
  console.log("Clicked Button"); 
  // 1. Prompt the user for criteria 
  let person = prompt("What kind of characters would you like for your password? Decide between 8 and 128", "Lemon Chiffon"); 
  if (!person) {
    alert("Need a Value");
    //making an "else if" statment for the password length
  } else if (person < 8 || person > 128) {
    // Validation 
    person = prompt("You must choose between 8 and 128 characters");

  } else {
    validatedNumber = confirm("will it have numbers?");
    validatedCharacter = confirm("will it have special characters?");
    validatedUppercase = confirm("will it have uppercase letters?");
    validatedLowercase = confirm ("Will it have Lowercase letters?");
  }; 

  if (!validatedCharacter && validatedNumber && validatedUppercase && validatedLowercase) {
    selection = alert("You most have an input value!");

  }
  else if (validatedCharacter && validatedNumber && validatedUppercase && validatedLowercase) {
    selection = character.concat(number, letters, letters2);
  }
  else if (validatedCharacter && validatedNumber && validatedUppercase) {
    selection = character.concat(number, letters2);
  }
  else if (validatedCharacter && validatedNumber && validatedLowercase) {
    selection = (number, letters);
  }
  else if (validatedCharacter && validatedLowercase && validatedUppercase) {
    selection = (letters, letters2); 
  }
  else if (validatedNumber && validatedLowercase && validatedUppercase) {
    selection = number.concat(letters, letters2);
  }
  else if (validatedCharacter && validatedNumber) {
    selection = character.concat(number);
  }
  else if (validatedCharacter && validatedLowercase) {
    selection = character.concat(letter);
  }
  else if (validatedCharacter && validatedUppercase) {
    selection = character.concat(letters2)
  }
  else if (validatedLowercase && validatedNumber) {
    selection = letters.concat(number);
  }
  else if (validatedLowercase && validatedUppercase) {
    selection = letters.concat(letters2)
  }
  else if (validatedNumber && validatedUppercase) {
    selection = character.concat(letters2);
  }
  else if (validatedCharacter) {
    selection = character; 
  }
  else if (validatedNumber) {
    selection = number; 
  }
  else if (validatedLowercase) {
    selection = letters; 
  }
  else if (validatedUppercase) {
    selection = space.concat(letters2);
  };

  for (var i = 0; i < person; i++) {
    var pickSelection = selection[Math.floor(Math.random() * selection.length)]; 
  }

  var password = []; 
  var ps = password.join("");
  Userinput(ps);

  // - password length 8 < 128
  // - Lowercase, uppercase, number, special characters 
  // 2. Validate the input 
  // 3. Generate password based on criteria 
  // 4. display password to the page.

  return ps; 
}

function Userinput(ps) {
  document.getElementById("password").textContent = ps; 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // ps = generatePassword();
  // document.getElementById("password").placeholder = ps; 
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


