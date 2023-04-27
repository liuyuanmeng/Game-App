
import { Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'

// Thisis way the code is very crealy 
const GameGrid = () => {
  // we call useGames here and destrucring here to grab games and error
  const { games, error } = useGames()

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  )
}

export default GameGrid
