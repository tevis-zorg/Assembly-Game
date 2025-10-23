// Thirt party import
import { clsx } from 'clsx'

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

/**
 * TODO :
 * 
 *  Clean up the code messes, comments,
 *  and writes a consistent componenets usage 
 *  ( by moving them into separate file ) and
 *  think about moving all functions int
 *  without neglecting source of truth. and tries to implements
 *  sharing states which applying derived values.
 *  if it is necessary yet effective,
 *  move all the states and change it to become arr of state obj;
 * 
 */


const Body = () => {

  // States
  const [chips, setChips] = useState(languages)
  const [currentWord, setCurrentWord] = useState(Array.from("react"));
  const [guessedLetter, setGuessedLetter] = useState([])
  const [isCorrect, setIsCorrect] = useState({})
  const [incorrectGuess, setIncorrectGuess] = useState(0)

  const chanceLeft = incorrectGuess;

  // Dervied state value
  const wrongGuess = 
  guessedLetter.filter(
    wrongLetter => !currentWord.includes(wrongLetter.toLowerCase())
  ).length

  
  // const [assemble, setAssemble] = useState(
    //   {
      //     guessedLetter : [],
      //     currentWord : Array.from("react"),
      //     isCorrect : false
      //   }
      // )
      
      
  // Static value
  // const heartLeft = 10 - chanceLeft;
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

    // !isValid ? setIncorrectGuess(prevChane => prevChane + 1) : incorrectGuess;

  }
  
  // console.log(guessedLetter);
  console.log(isCorrect);
  // console.log(wrongGuess);

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
          selectedButton={clickedLetter}
          letter={letter}
        />
      )
    }
  )

  return (
    <>

      <GameStatus
       statMessages={"Farewell HTML & Css 🥱"}
       subMessages={"Welldone"}
      />

      <LanguageChips
        arrData={chips}
        wrongGuess={wrongGuess}
        methodName={clsx}
      />

      {currWordElements}

      <section className="v-keyboard">
        {buttonElement}
      </section>

      <button 
        className="new-game"
        onClick={() => setGuessedLetter([],console.clear())}
      >
          New Game
      </button>


    </>
  )
}

export default Body
