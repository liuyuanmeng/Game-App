import { Grid, GridItem, Show } from '@chakra-ui/react'

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "asid main"`,
      }}
    >
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area="asid" bg="gold">
          Asid
        </GridItem>
      </Show>

      <GridItem area="main" bg="lightblue">
        Main
      </GridItem>
    </Grid>
  )
}

export default App
