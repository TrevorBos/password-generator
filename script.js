// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Variables for password creation

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*(){}<>?:+_-/\\||~";
var userCharacters = "";

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
    return generatePassword()
  }
  if (characterLength < 8 || characterLength > 128) {
    alert ("Please choose numbers between 8 and 128!")
    return generatePassword()
  }

//Display prompts asking the user to choose what specifics they would like their password to have
  var confirmUpper = confirm("Would you like your password to have UPPER case letters?");
  var confirmLower = confirm("Would you like your password to have LOWER case letters?");
  var confirmNumbers = confirm("Would you like your password to have NUMBERS in it?");
  var confirmSpecial = confirm("Would you like your password to have SPECIAL characters in it?");

  //adding the "!" infront of these variables checks to see if they are NOT true.
  if (!confirmUpper && !confirmLower && !confirmNumbers && !confirmSpecial){
    alert("Please choose at least one character type!");
    return generatePassword()
  }
  //Checks to see if they are true.
  if (confirmUpper){
    userCharacters += upperCase
  }
  if (confirmLower){
    userCharacters += lowerCase
  }
  if (confirmNumbers) {
    userCharacters += numbers
  }
  if (confirmSpecial) {
    userCharacters += specialCharacters
  }
  //This chooses random letters, numbers, special characters, and creates the password with the given length that the user has inputted.
  for (var index = 0; index < characterLength; index++){
  //charAt is a function that returns the character from the chosen index.
    userPassword += userCharacters.charAt(Math.floor(Math.random() * userCharacters.length));
  }
  return  userPassword;
}

//function for upperCase generation

//function for lowerCase generation

//function for number generation

//function for specialCharacter generation

//Add conditions and alerts if user has chosen invalid options
