const LetterGuessed = (props) => {

    const arrLetter = props.arrLetter;

    return (

        <section className="current-word">

            <span 
                className="current-word-span">{props.isRevealed && props.currentWord}</span>

        </section>



    )
}

export default LetterGuessed
