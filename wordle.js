const readline = require("readline");

//allWords = [];

class WordleGameState {
  constructor(allWords, allowedGuesses) {
    // logic to div words DONE for selected word and user word yay!!!
    // initialize empty obj (DONE) that will track the grey / yellow / greenness
    // update as user types in guesses
    this.allWords = allWords;
    this.allowedGuesses = allowedGuesses;
    this.gameOutcome = undefined;
    this.guessesUsed = 0;
    const randomIndex = Math.floor(Math.random() * this.allWords.length);
    this.selectedWord = this.allWords[randomIndex];
    this.dividedSelectedWord = this.selectedWord.split(/(?:)/u);
    this.result = new Map();
    for (let i = 0; i < this.dividedSelectedWord.length; i++) {
      const letter = this.dividedSelectedWord[i];
      if (!this.result.has(letter)) {
        this.result.set(letter, []);
      }
      //this.result.get(letter).push(i);
      //console.log(this.result);
    }
  }

  acceptGuess(userInput = "") {
    this.guessesUsed++;
    if (userInput === this.selectedWord) {
      this.gameOutcome = true;
    } else if (this.allowedGuesses <= this.guessesUsed) {
      this.gameOutcome = false;
    } else {
      this.resultUserInput = userInput.split(/(?:)/u);
    }
    this.userResult = new Map();
    for (let j = 0; j < this.resultUserInput.length; j++) {
      const item = this.resultUserInput[j];
      if (!this.userResult.has(item)) {
        this.userResult.set(item, []);
      }
      this.userResult.get(item).push(j);
      //console.log(this.userResult);
      if (!this.result.has(item)) {
        this.userResult.set(' ', []);
      }
    }
    console.log(this.userResult);
  }

  getRemainingGuesses() {
    if (this.gameOutcome === undefined) {
      return this.allowedGuesses - this.guessesUsed;
    }
    return 0;
  }

  compareMaps() {}

  // DONE initialize empty obj that will:
  // TODO track the grey / yellow / greenness
  // TODO if guess letter is not in the correct word
  // TODO if guess letter is in the selected word but not the correct position
  // TODO if guess letter is in the selected word and the correct position
//   returnFunction() {
//     const iterator1 = this.userResult[Symbol.iterator]();
//     for (const item1 of iterator1) {
//         console.log(item1);
//         const iterator2 = this.result[Symbol.iterator]();
//         for (const item2 of iterator2) {
//             //console.log(item2);
//             if (item1 === item2) {
//                 //this.iterator2.push(this.item1);
//                 console.log(item2);
//             } else {
//                 console.log('no');
//             }
//         }
//     }
//   }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const acceptGuess = (gameState) => {
  rl.question("What is your guess? ", (input) => {
    gameState.acceptGuess(input);
    //console.log(gameState.returnFunction());
    //console.log(gameState.combineResultFunction());
    if (gameState.gameOutcome === true) {
      console.log(
        `You successfully guessed the word "${gameState.selectedWord}" correctly!`
      );
    } else if (gameState.gameOutcome === false) {
      console.log("You have no guesses left. Better luck next time!");
    } else {
      console.log(
        `You have ${gameState.getRemainingGuesses()} guesses remaining.`
      );
    //   console.log(`${this.userResult}`);
    //   console.log(`${this.result}`);
    }
    if (gameState.getRemainingGuesses() === 0) {
      rl.close();
    } else {
      acceptGuess(gameState);
    }
  });
};

acceptGuess(new WordleGameState(["hello"], 5));

/*
if letter in array1 at p0 === letter in array2 at p0
    return letter is correct at p0 (green)

DONE-- we have the array2 of the correct word (this.dividedSelectedWord)
DONE-- get the position (index) of each letter in the array2 of the correct word 
DONE    -- store / return it 
DONE-- we have the word of the user input (input)
DONE-- we know how to split up the word of the user input into an array1 (the .split functionality)
DONE-- get the position of each letter in the array1
DONE    -- store / return it
    -- compare the letter at each position in array1 with the letter at each position in array2
        -- store / return it
    -- return the letters that are at the same positions (indexes) in each array

    for (letter in gameState.acceptGuess(input)) {
        if (letter in gameState.acceptGuess(input) && letter in this.dividedSelectedWord) {
            return letter at position;
        }
    }

if letter in array1 at p0 is in array2, but at p1 (or just not at p0)
    return letter is in word but not at p1 (yellow)

if letter is not in array1 at all
    return letter is not in word (grey)
*/
