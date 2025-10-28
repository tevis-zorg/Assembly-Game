export const LetterKeyboard = (props) => {

    return (
        <section className="v-keyboard">
            {
                props.alphabet.map(
                    (letter) => {
                        const gameIsOver = props.isGameOver
                        const clickedLetter = props.guessedLetter.includes(letter)
                        const isCorrectLetter = props.isCorrect[letter]
                        const clsName = props.classMethod(
                            'v-letter',
                            // {
                            //   "v-letter-right" : clickedLetter && isCorrectLetter === true,
                            //   "v-letter-wrong" : clickedLetter && isCorrectLetter === false,
                            // }
                            
                            {
                            correct : clickedLetter && isCorrectLetter === true,
                            wrong : clickedLetter && isCorrectLetter === false,
                            }
                        )
                        return (
                            <button
                                key={letter}
                                className={clsName}
                                onClick={() => props.handleClick(letter)}
                                aria-disabled={clickedLetter}
                                aria-label={`Letter ${letter}`}
                                disabled={gameIsOver ? letter : clickedLetter}
                            >
                                {letter}
                            </button>
                        )
                    }
                )
            }
        </section>
    )
}