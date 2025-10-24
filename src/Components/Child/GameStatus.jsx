const GameStatus = (props) => {

  const isWrongGuesses = props.wrongGuess;
  const isChip = props.chips;

  const chipLost = isWrongGuesses.length > 0;
  const isWin = props.isGameWon;
  const isLost = props.isGameLost;
  const langLost = isWrongGuesses.length > 0 ? isChip[isWrongGuesses.length - 1]?.name : null;

  console.log(
    `Chip Lost : ${chipLost}\nGame Lost : ${isLost}\nGame Win : ${isWin}`
  )

  return (
    <>
      {
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
          <h2>
            { 
              isWin? "You've won!" : ( chipLost? `Farewell ${langLost}` : null )
            }
          </h2>
          <p>
            { 
              isWin ? "Welldone!🍾" : 
              ( isLost ? "You better start learning Assembly!☠️☠️☠️" : null )
            }
          </p>
        </section>

      }
    </>
  )
}

export default GameStatus
