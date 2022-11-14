
let newArray = ["t", "e", "s", "t", "s"]; // "correct word"
let otherArray = ["g", "e", "e", "s", "e"]; // "user guess"
let emptyArray = []; // correct word with user guess correct answers / positions 
let correctLetters = []; // correct letters, but incorrect position 

for (let i = 0; i < newArray.length; i++) {
  let item = newArray[i];
  let thing = otherArray[i];
  console.log(`This is item ${item}`);
  console.log(`This is thing ${thing}`);
  console.log(item === thing);
  console.log(newArray[i] === otherArray[i]);
  //correct letter in correct spot
  if (item === thing) {
    emptyArray.push(item);
  }
  if (!emptyArray.includes(item, -1)) {
    emptyArray.push(' ');
  }
  // correct letter, incorrect spot 
  if (newArray.includes(thing, -1)) {
    correctLetters.push(thing);
  }
  if (!newArray.includes(thing, -1)) {
    correctLetters.push(' ');
  }
}

console.log(emptyArray);
console.log(correctLetters);

// check for letter (DONE) then letter in position (DONE)

/*
console.log(['a'] === ['a']); // strict equality -- checks types and values and if they ref same object -- false
console.log(['a'] == ['a']); // abstract equality -- false

T/F and why?

both false bc two separate objects, would need to check the value at each index to check for equality 

*/
