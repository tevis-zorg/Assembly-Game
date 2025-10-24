const GameStatus = (props) => {

  const isWrongGuesses = props.wrongGuess;
  const isRightGuesses = props.rightGuess;

  const chipLost = isWrongGuesses >= 1;
  const isLost = isWrongGuesses >= 8;
  const isWin = Array.from(props.currentWord).length === isRightGuesses;

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
          <h2>
            {props.statMessages}
          </h2>
          <p>
            {props.subMessages}
          </p>
        </section>
      // {statusElement}
  )
}

export default GameStatus
