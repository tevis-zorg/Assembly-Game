export const LetterKeyboard = (props) => {
    return (
        <button
            className={props.className}
            onClick={props.handleClick}
            aria-disabled={props.ariaDisabled}
            aria-label={props.ariaLabel}
            disabled={props.disabled}
        >
            {props.letter}
        </button>
    )
}