//Assigning variables 
var person;
var validatedNumber;
var validatedCharacter;
var validatedUppercase;
var validatedLowercase;

character = ["!", "'", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]"];

number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

space = [];

var selections;
// converts letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};
// variable for uppercase 
letters2 = letters.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

//function made to orchestrate all inputs based on user selection
function generatePassword() {
   // Prompt the user for criteria 
    person = parseInt(prompt("What kind of characters would you like for your password? Decide between 8 and 128", "20"));
  //first user validation 
    if (!person) {
        alert("This needs a value");
    } else if (person < 8 || person > 128) {
        //making an "else if" statment for the password length -  password length 8 < 128
        person = parseInt(prompt("You must choose between 8 and 128"));

    } else {
        // ongoing validation process 
        validatedNumber = confirm("Will this contain numbers?");
        validatedCharacter = confirm("Will this contain special characters?");
        validatedUppercase = confirm("Will this contain Uppercase letters?");
        validatedLowercase = confirm("Will this contain Lowercase letters?");
    };

    //  4 negative options 
    if (!validatedCharacter && !validatedNumber && !validatedUppercase && !validatedLowercase) {
        selections = alert("You must choose a criteria!");

    }
    // 4 positive options
    else if (validatedCharacter && validatedNumber && validatedUppercase && validatedLowercase) {

        selections = character.concat(number, letters, letters2);
    }

    else if (validatedCharacter && validatedNumber && validatedUppercase) {
        selections = character.concat(number, letters2);
    }
    else if (validatedCharacter && validatedNumber && validatedLowercase) {
        selections = character.concat(number, letters);
    }
    else if (validatedCharacter && validatedLowercase && validatedUppercase) {
        selections = character.concat(letters, letters2);
    }
    else if (validatedNumber && validatedLowercase && validatedUppercase) {
        selections = number.concat(letters, letters2);
    }
    // Else if for 2 positive options 
    else if (validatedCharacter && validatedNumber) {
        selections = character.concat(number);

    } else if (validatedCharacter && validatedLowercase) {
        selections = character.concat(letters);

    } else if (validatedCharacter && validatedUppercase) {
        selections = character.concat(letters2);
    }
    else if (validatedLowercase && validatedNumber) {
        selections = letters.concat(number);

    } else if (validatedLowercase && validatedUppercase) {
        selections = letters.concat(letters2);

    } else if (validatedNumber && validatedUppercase) {
        selections = number.concat(letters2);
    }
   
    else if (validatedCharacter) {
        selections = character;
    }
    else if (validatedNumber) {
        selections = number;
    }
    else if (validatedLowercase) {
        selections = letters;
    }
    // 
    else if (validatedUppercase) {
        selections = space.concat(letters2);
    };

    
    var password = [];

   
    for (var i = 0; i < person; i++) {
        var pickselections = selections[Math.floor(Math.random() * selections.length)];
        password.push(pickselections);
    }
    
    var ps = password.join("");
    UserInput(ps);
    
    
    
    return ps;
}

function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}


