import React from 'react'

const GameStatus = (props) => {
  return (
    <section className='game-status'>
      <h2>
        {props.statMessages}
      </h2>
      <p>
        {props.subMessages}
      </p>
    </section>
  )
}

export default GameStatus
