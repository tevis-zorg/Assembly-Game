
const Header = (props) => {
  return (
    <header className='header'>
      <h1>
        Assembly Endgame
      </h1>
      <p>
        Guess the word in unde 8 attempts to keep the
        programming world safe from Assembly!
      </p>

      <div className="status-sect">
        {props.gameStatInfo}
      </div>

    </header>
  )
}

export default Header
