import { getFarewellText } from "../../Datas/utils";

const GameStatus = (props) => {

  const isGuessed = props.guessedLetter;
  const isCurrent = props.currentWord;
  const isWrongGuesses = props.wrongGuess;
  const isChip = props.chips;

  const prevGuessed = isGuessed[isGuessed.length - 1]
  const isChipLost = prevGuessed && !isCurrent.includes(prevGuessed)
  const farewellMsg = props.getFarewellText(isChip[isWrongGuesses.length - 1]?.name)

  // const chipLost = isWrongGuesses.length > 0 && isWrongGuesses.length <= isChip.length;
  const isWin = props.isGameWon;
  const isLost = props.isGameLost;
  const isGameOver = props.isGameOver;

  console.log(farewellMsg)

  function gameStatusMessage () {
    if ( !isGameOver && isChipLost ) {
      return(
        isWrongGuesses.length && isChipLost ?
        <h2>
          {farewellMsg}
        </h2>
        :
        null

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
    `Chip Lost : ${isChipLost}\nGame Lost : ${isLost}\nGame Win : ${isWin}`
  )

  return (
    <section 
      className={
        props.moduleName(
          'game-status',
          {
            'chip-lost' : !isGameOver && isChipLost , 
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
