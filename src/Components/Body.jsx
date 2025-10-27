// Thirt party import
import { clsx } from 'clsx'
import ReactConfetti from 'react-confetti'

// Child Components
import GameStatus from './Child/GameStatus'
import LanguageChips from "./Child/LanguageChips"
import LetterGuessed from "./Child/LetterGuessed"
import { LetterKeyboard } from "./Child/Buttons"

// Custom Hook imports
import { useShareWord, useShareKeyboard } from "./States/States"

// Data imports
import { languages } from "../Datas/language"

// Hooks
import { useState } from "react"

// Utils
import { getFarewellText } from '../Datas/utils'

/**
 * Backlog:
 * 
 * -✔️ Farewell messages in status section
 * -✔️ Fix a11y issues
 * - Choose a random word from a list of words
 * -✔️ Make the new game button work
 * - Confetti drop when the user wins
 */


const Body = () => {

  // States
  const [chips, setChips] = useState(languages)
  const [currentWord, setCurrentWord] = useState(Array.from("react"))
  const [guessedLetter, setGuessedLetter] = useState([])
  const [isCorrect, setIsCorrect] = useState({})

  // Dervied state value
  const wrongGuess = 
  guessedLetter.filter(
    wrongLetter => !currentWord.includes(wrongLetter.toLowerCase())
  )

  const rightGuess=
  guessedLetter.filter(
    isRight => currentWord.includes(isRight.toLowerCase())
  )

  
  const isGameWon = currentWord.length === rightGuess.length
  // const isGameWon = String(currentWord).split("").every(letter => guessedLetter.includes(letter))
  const isGameLost = wrongGuess.length >= chips.length - 1
  const isGameOver = isGameWon || isGameLost

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

  const currWordElements = currentWord.map(
    (letter) => (
      <LetterGuessed
        key={letter}
        currentWord={letter.toUpperCase()}
        isRevealed={guessedLetter.includes(letter.toUpperCase())}
        />
      )
    )

  const buttonElement = alphabet.map(
    (letter) => {

      const clickedLetter = guessedLetter.includes(letter)
      const isCorrectLetter = isCorrect[letter]

      const isLetterWrong = clsx(
        'v-letter',
        // {
        //   "v-letter-right" : clickedLetter && isCorrectLetter === true,
        //   "v-letter-wrong" : clickedLetter && isCorrectLetter === false,
        // }
        
        {
          correct : clickedLetter && isCorrectLetter === true,
          wrong : clickedLetter && isCorrectLetter === false,
        }
      );

      return(
        <LetterKeyboard
          key={letter}
          className={isLetterWrong}
          handleClick={() => addGuessedLetter(letter)}
          disabled={isGameOver ? letter : clickedLetter}
          ariaDisabled={clickedLetter}
          ariaLabel={`Letter ${letter}`}
          letter={letter}
        />
      )
    }
  )

  const srOnlyHelper = currentWord.slice(" ").map(
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
       guessedLetter={guessedLetter}
       wrongGuess={wrongGuess}
       rightGuess={rightGuess}
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

      {currWordElements}

      <section className="v-keyboard">
        {buttonElement}
      </section>

      <section 
          className="sr-only" 
          aria-live="polite" 
          role="status"
      >
          <p>Current word: {srOnlyHelper}</p>
      
      </section>

    {
      isGameOver 
      &&
      <button 
        className="new-game"
        onClick={() => setGuessedLetter([],console.clear())}
      >
          New Game
      </button>
    }


    </>
  )
}

export default Body
