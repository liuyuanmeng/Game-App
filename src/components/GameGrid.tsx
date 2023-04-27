
import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'

// Thisis way the code is very crealy 
const GameGrid = () => {
  // we call useGames here and destrucring here to grab games and error
  const { games, error } = useGames()

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm:1, md: 2, lg: 3, xl: 4}} padding = '10px' spacing={10}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  )
}

export default GameGrid
