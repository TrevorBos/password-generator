// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Variables for password creation

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*(){}<>?:+_-/\\||~";
var chosenCharacters = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//function for generating the password, the function will then be called in the writePassword() function returning the final password.
function generatePassword(){
  var userPassword = "";

  var characterLength = prompt("How long would you like your password to be? (Between 8 and 128)");
//The isNaN() function is used here to tell whether the given number is illegal or not. Googled best way to check this.
  if(isNaN(characterLength)){
    alert("You must input a number!");
    return generatePassword();
  }
  if (characterLength < 8 || characterLength > 128) {
    alert ("Please choose numbers between 8 and 128!")
    return generatePassword();
  }
}

//function for upperCase generation

//function for lowerCase generation

//function for number generation

//function for specialCharacter generation

//Add conditions and alerts if user has chosen invalid options
