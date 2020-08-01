// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; 
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; 
var num = ["0","1","2","3","4","5","6","7","8","9"];
var specChar = ["!","@","#","$","%","^","&","*","?","+","-","_"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword () {
var confirmlength = parseInt(prompt("How long would you like your password to be? Please type a number between 8 and 128"));
var password = [];
while(confirmlength < 8 || 128 < confirmlength) {
  alert("Please enter a value between 8 and 128");
   confirmlength = parseInt(prompt("How long would you like your password to be? Please type a number between 8 and 128"));
}



confirmlowerCase = confirm("Would you like to use a lowercase letter in your password?");
confirmupperCase =  confirm("Would you like to use an uppercase letter in your password?");
confirmnum = confirm("Would you like to use a number in your password?");
confirmspecChar = confirm("Would you like to use a special character in your password?");

 
 while(confirmlowerCase === false && confirmupperCase === false && confirmnum === false && confirmspecChar === false) {
  alert("Please confirm the criteria for your password");

confirmlowerCase = confirm("Would you like to use a lowercase letter in your password?");
confirmupperCase =  confirm("Would you like to use an uppercase letter in your password?");
confirmnum = confirm("Would you like to use a number in your password?");
confirmspecChar = confirm("Would you like to use a special character in your password?");

 }

 for(var i = 0; i < confirmlength;) {

 
 if (confirmlowerCase) {
   var lc = Math.floor(Math.random()*26);
   password.push(lowerCase[lc]);

   console.log(lowerCase[lc]);
   i++
 }
 if (confirmupperCase) {
  var uc = Math.floor(Math.random()*26);
  password.push(upperCase[uc]);

  console.log(upperCase[uc]);
  i++
}
if (confirmnum) {
  var n = Math.floor(Math.random()*10);
  password.push(num[n]);

  console.log(num[n]);
  i++
}
if (confirmspecChar) {
  var sc = Math.floor(Math.random()*12);
  password.push(specChar[sc]);

  console.log(specChar[sc]);
  i++
}





}


 

 

 

password = password.join('');


return password


}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 