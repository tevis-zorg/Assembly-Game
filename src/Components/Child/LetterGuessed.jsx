const LetterGuessed = (props) => {

    const isCurrentWrods = props.currentWord;
    const isGuessedLetter = props.guessedLetter;
    const isUserLost = props.isGameLost;
    
    return (
        
        <>
            {
                isCurrentWrods.split("").map(
                    (letter, index) => {

                        const isLetter = letter.toUpperCase();
                        const isRevealed = isGuessedLetter.includes(letter.toUpperCase())
                        const shouldRevealed = isUserLost || isRevealed
                        const clsName = props.classMethod(
                            'current-word-span',
                            isUserLost && !isRevealed && 'usr-lost'
                        )

                        return (

                        <section 
                        className="current-word"
                        key={index}
                        >
                            <span 
                                className={clsName}
                            >
                                {shouldRevealed ? isLetter : ""}
                            </span>

                        </section>

                        )
                    }
                )
            }
        
        </>




    )
}

export default LetterGuessed
