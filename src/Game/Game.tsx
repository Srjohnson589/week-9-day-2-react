import { useState } from 'react'

const Game = () => {

    const [game, setGame] = useState({
        id: 1,
        player: {
            name: 'Dylan'
        }
    })

    const handleClick = () => {
        if (game.player.name === 'Dylan') {
            setGame({...game, player: {name: 'Yoshi'}})
        } else {
            setGame({...game, player: {name: 'Dylan'}})
        }
    }


  return (
    <>  
        <h2>Player Name:</h2>
        <h3>{game.player.name}</h3>
        <button onClick={()=> handleClick()}>Switch Player</button>
    </>
  )
}

export default Game