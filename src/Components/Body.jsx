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


const Body = () => {

  
  // const [assembly, setAssembly] = useShareKeyboard()
  const [chips, setChips] = useState(languages)
  const [guessedLetter, setGuessedLetter] = useState([])
  const [currentWord, setCurrentWord] = useState(Array.from("react"));
  const [isCorrect, setIsCorrect] = useState({})

  // const [assemble, setAssemble] = useState(
  //   {
  //     guessedLetter : [],
  //     currentWord : Array.from("react"),
  //     isCorrect : false
  //   }
  // )
  
  const alphabet = Array.from(
    {length: 26}, (_,i) => String.fromCharCode(65 + i)
  )

  // console.log(currentWord);

  /**
   * Checks if the currentWord statements contains 
   * the same object as the clicked keyboard
   * if yes, turn the className from v-letter into v-letter-right
   * (if it is right) otherwise v-letter-wrong; then disable the clicked button's
   * after it is being clicked by the user;
   */


//   function letteGenerator (prosp) {
//     return Array(prosp.arrSize)
//     .fill(0)
//     .map(
//         () => (
//             {
//                 id: nanoid,
//                 value:
//             }
//         )
//     )
//   }

  // const handleChange = (guessed) => {
  //   const {value, name} = guessed.currentTarget;

  //   setCurrentWord(
  //     prevLetter => (
  //       {
  //         ...prevLetter,
  //         [name]: value,
  //       }
  //     )
  //   )
  // }

<<<<<<< HEAD
  // Handle user clicked button
  const handleClicked = (letter) => {
=======
  const addGuessedLetter = (letter) => {
>>>>>>> c40123e (Adding button interaction value right/wrong letter)

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
  
  console.log(guessedLetter);
  console.log(isCorrect)

  


  const currWordElements = currentWord.map(
    (letter, index) => (
      <LetterGuessed
        key={index}
        currentWord={letter.toUpperCase()}
      />
    )
  )

  const buttonElement = alphabet.map(
    (letter, index) => {

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
          key={index}
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
