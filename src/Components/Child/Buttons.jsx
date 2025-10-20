export const LetterKeyboard = (props) => {
    return (
        <button
            className={props.className}
            onClick={props.handleClick}
            // disabled={props.selectedButton}
        >
            {props.letter}
        </button>
    )
}