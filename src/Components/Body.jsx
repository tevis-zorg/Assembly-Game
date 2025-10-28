// Thirt party import
import { clsx } from 'clsx'
import ReactConfetti from 'react-confetti'

// Child Components
import GameStatus from './Child/GameStatus'
import LanguageChips from "./Child/LanguageChips"
import LetterGuessed from "./Child/LetterGuessed"
import { LetterKeyboard } from "./Child/LetterKeyboard"

// Custom Hook imports
import { useShareWord, useShareKeyboard } from "./States/States"

// Data imports
import { languages } from "../Datas/language"

// Hooks
import { useState } from "react"

// Utils
import { getFarewellText, getRandomWords } from '../Datas/utils'

/**
 * Backlog:
 * 
 * -✔️ Farewell messages in status section
 * -✔️ Fix a11y issues
 * -✔️ Choose a random word from a list of words
 * -✔️ Make the new game button work
 * -✔️ Reveal what the word was if the user loses the game
 * -✔️ Confetti drop when the user wins
 * 
 */


const Body = () => {

  // States
  const [chips, setChips] = useState(languages)
  const [currentWord, setCurrentWord] = useState(getRandomWords())
  const [guessedLetter, setGuessedLetter] = useState([])
  const [isCorrect, setIsCorrect] = useState({})

  // Dervied state value
  const chipLeft = chips.length - 1;
  const wrongGuess = 
  guessedLetter.filter(
    wrongLetter => !currentWord.includes(wrongLetter.toLowerCase())
  )

  // const rightGuess=
  // guessedLetter.filter(
  //   isRight => currentWord.includes(isRight.toLowerCase())
  // )

  const rightGuess = 
  currentWord.split("").every(
    isRight => guessedLetter.includes(isRight.toUpperCase())
  )

  
  // const isGameWon = currentWord.length === rightGuess.length
  const isGameWon = rightGuess
  const isGameLost = wrongGuess.length >= chipLeft
  const isGameOver = isGameWon || isGameLost

  const lastGuessedLetter = guessedLetter[guessedLetter.length - 1]
  const lastWrongGuesses = wrongGuess[wrongGuess.length - 1]

  const alphabet = Array.from(
    {length: 26}, (_,i) => String.fromCharCode(65 + i)
  )

  // Handle user clicked button
  const addGuessedLetter = (letter) => {

    // setGuessedLetter(
    //   pervLetter => (
    //     pervLetter.includes(letter) ?
    //       pervLetter :
    //       [...pervLetter, letter]
    //   )
    // )

    setGuessedLetter(
      pervLetter => {
        const letterSet = new Set(pervLetter)
        letterSet.add(letter)
        return Array.from(letterSet)
      }
    )

    const isValid = currentWord.includes(letter.toLowerCase());

    setIsCorrect(
      prevStat => (
        {
          ...prevStat,
          [letter]: isValid
        }
      )
    );

  }

  const newGame = () => {
    setGuessedLetter([],console.clear())
    setCurrentWord(getRandomWords())
  }

  const srOnlyHelper = currentWord.split(" ").map(
    letter => 
        guessedLetter.includes(letter) ? letter + "." : "blank.").join(" ")

  return (
    <>
    {
      isGameWon
      &&
      <ReactConfetti/>
    }

      <GameStatus
       moduleName={clsx}
       chips={chips}
       lastGuessedLetter={lastGuessedLetter}
       lastWrongGuesses={lastWrongGuesses}
       wrongGuess={wrongGuess}
       isGameWon={isGameWon}
       isGameLost={isGameLost}
       isGameOver={isGameOver}
       getFarewellText={getFarewellText}
      />

      <LanguageChips
        arrData={chips}
        wrongGuess={wrongGuess}
        moduleName={clsx}
      />

      <LetterGuessed
        classMethod={clsx}
        currentWord={currentWord}
        guessedLetter={guessedLetter}
        isGameLost={isGameLost}
      />

      <LetterKeyboard
        alphabet={alphabet}
        classMethod={clsx}
        handleClick={ addGuessedLetter }
        guessedLetter={guessedLetter}
        isCorrect={isCorrect}
        isGameOver={isGameOver}
      />

      <section 
          className="sr-only" 
          aria-live="polite" 
          role="status"
      >
          <p>
              {currentWord.includes(lastGuessedLetter) ? 
                  `Correct! The letter ${lastGuessedLetter} is in the word.` : 
                  `Sorry, the letter ${lastGuessedLetter} is not in the word.`
              }
              You have {chipLeft} attempts left.
          </p>
          <p>Current word: {srOnlyHelper}</p>
      
      </section>

    {
      isGameOver 
      &&
      <button 
        className="new-game"
        onClick={ isGameOver && newGame }
      >
          New Game
      </button>
    }


    </>
  )
}

export default Body
