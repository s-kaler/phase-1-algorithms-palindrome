function isPalindrome(word) {
  // Write your algorithm here
  for(i = 0; i < (word.length/2); i++){
    if(word[i] !== word[(word.length - (i +1))]){
      return false;
    }
    else{
      return true;
    }
  }
}

/* 
  Add your pseudocode here
  loop through word and compare first half of word to last half of word
  for (i = 0 ; i less than length of word divided by 2; i++)
    parse through word, because it is an array of characters
    if word[i] not equal to word[length - (i + 1)], then return false
    else return true
*/

/*
  Add written explanation of your solution here
  We have to loop through the first half of the word and compare it to the reverse of the second half
  Since we only have to look at half of the length of the word, we only need to loop through half the length
  For odd numbered lengths, we don't need to compare the middle character to itself, so divide by 2 will stop before the middle character
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
