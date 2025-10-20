// Thirt party import
import { nanoid } from "nanoid"

// Child Components
import GameStatus from './Child/GameStatus'
import LanguageChips from "./Child/LanguageChips"
import Words from "./Child/Words"
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
  const [currentWord, setCurrentWord] = useState(Array.from("react"));
  const [guessedLetter, setGuessedLetter] = useState([])
  
  const alphabet = Array.from(
    {length: 26}, (_,i) => String.fromCharCode(65 + i)
  )

  // console.log(currentWord);
  console.log(guessedLetter);


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

  const handleClicked = (letter) => {

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
  }

  const currWordElements = currentWord.map(
    (letter, index) => (
      <Words
        key={index}
        currentWord={letter.toUpperCase()}
        handleChange={() => handleChange(letter)}
      />
    )
  )

  const buttonElement = alphabet.map(
    (letter, index) => (
      <LetterKeyboard
        key={index}
        className="v-letter"
        handleClick={() => handleClicked(letter)}
        // selectedButton={currentWord.includes(letter)}
        letter={letter}
      />
    )
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
        onClick={() => setGuessedLetter([])}
      >
          New Game
      </button>


    </>
  )
}

export default Body
