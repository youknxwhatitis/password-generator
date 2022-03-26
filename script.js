// Assignment Code
var generateBtn = document.querySelector("#generate");
var validatedNumber; 
var validatedCharacter; 
var validatedUppercase; 
var validatedLowercase; 

//Values for Characters 

//character = ["!","'","#", "$","%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "\", "^", "{", "}", "~"]; 

//number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];







function generatePassword(){
  console.log("Clicked Button"); 
  // 1. Prompt the user for the password 
  let person = prompt("What kind of characters would you like for your password? Decide between 8 and 128", "Lemon Chiffon"); 
  if (!person) {
    alert("Need a Value");
  } else if (person < 8 || person > 128) {
    // Validation 
    person = prompt("You must choose between 8 and 128 characters")

  } else {
    validatedNumber = confirm("will it have numbers?");
    validatedCharacter = confirm("will it have special characters?");
    validatedUppercase = confirm("will it have uppercase letters?");
    validatedLowercase = confirm ("Will it have Lowercase letters?")
  }; 

  if (!validatedCharacter && ! validatedNumber && validatedUppercase && validatedLowercase) {
    //
  }
  else if (validatedCharacter && ! validatedNumber && validatedUppercase && validatedLowercase) {
    // choices 
  }
  else if (validatedCharacter && validatedNumber && validatedUppercase) {
    //
  }
  else if (validatedCharacter && validatedNumber && validatedLowercase) {
    //
  }
  else if (validatedCharacter && validatedLowercase && validatedUppercase) {
    //
  }
  else if (validatedNumber && validatedLowercase && validatedUppercase) {
    //
  }
  else if (validatedCharacter && validatedNumber) {
    //
  }
  else if (validatedCharacter && validatedLowercase) {
    //
  }
  else if (validatedCharacter && validatedUppercase) {
    //
  }
  else if (validatedLowercase && validatedNumber) {
    //
  }
  else if (validatedLowercase && validatedUppercase) {
    //
  }
  else if (validatedNumber && validatedUppercase) {
    //
  }
  else if (validatedCharacter) {
    // 
  }
  else if (validatedNumber) {
    //
  }
  else if (validatedLowercase) {
    //
  }
  else if (validatedUppercase) {
    //
  };

  var = password = [];

  for (var i = 0; i < person; i++) {
    var pickChoices = choices[Math.floor(Math.randon() * choice.length)]; 
  }
  // - password length 8 < 128
  // - Lowercase, uppercase, number, special characters 
  // 2. Validate the input 
  // 3. Generate password based on criteria 
  // 4. display password to the page.

  return "Generated button"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


