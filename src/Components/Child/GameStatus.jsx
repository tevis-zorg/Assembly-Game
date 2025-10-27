import { getFarewellText } from "../../Datas/utils";

const GameStatus = (props) => {

  const isGuessed = props.guessedLetter;
  const isWrongGuesses = props.wrongGuess;
  const isChip = props.chips;

  const prevGuessed = isGuessed[isGuessed.length - 1]
  const prevWrong = isWrongGuesses[isWrongGuesses.length - 1]
  // const isChipLost = prevGuessed && !isCurrent.includes(prevGuessed)
  const farewellMsg = props.getFarewellText(isChip[isWrongGuesses.length - 1]?.name)

  const chipLost = isWrongGuesses.length > 0 && prevGuessed == prevWrong ;
  const isWin = props.isGameWon;
  const isLost = props.isGameLost;
  const isGameOver = props.isGameOver;

  console.log(prevGuessed)

  function gameStatusMessage () {
    if ( !isGameOver && chipLost ) {
      return(
        <h2>
          { farewellMsg }
        </h2>

      )

    }


    if (isWin) {
      return(
        <>
          <h2> You've Won! </h2>
          <p> Welldone!🍾 </p>
        </>
      )
    }

    if (isLost) {
      return(
        <>
          <h2> You've Lost! </h2>
          <p> Better start to learn Assembly☠️☠️☠️ </p>
        </>
      )
    }

    return null;

  }

  console.log(
    `Chip Lost : ${chipLost}\nGame Lost : ${isLost}\nGame Win : ${isWin}`
  )

  return (
    <section 
      className={
        props.moduleName(
          'game-status',
          {
            'chip-lost' : chipLost , 
            'game-lost' : isLost,
            'game-win' : isWin,
          }
        )
      }
    >
      { gameStatusMessage() }
    </section>
  )
}

export default GameStatus
