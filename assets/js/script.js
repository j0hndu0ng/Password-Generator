// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword(min, max, upper, nums, special) {
    var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numbers = '0123456789';
    var specialChars = '!"#$%&()*+-./:;<>=?@[]^_{}~';
    var charBank = lowerCase
    var minLength = min;
    var maxLength = max;
    var length = Math.floor(Math.random() * (maxLength - minLength + 1) + minLength);
    var result = '';

    if(upper) {
        charBank += upperCase;
    }
    if(nums) {
        charBank += numbers;
    }
    if(special) {
        charBank += specialChars;
    }
    for(var i = 0; i < length; i++) {
        result += charBank.charAt(Math.floor(Math.random() * charBank.length));
    }
    return result;
}

// Write password to the #password input
function writePassword() {
    
    var minLength = prompt('Enter the minimum length');
    var maxLength = prompt('Enter the maximum length');
    var upperCase = confirm('Include uppercase letters?');
    var numbers = confirm('Include numbers?');
    var specialChars = confirm('Include special characters?');

    var password = generatePassword(minLength, maxLength, upperCase, numbers, specialChars);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;



}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
