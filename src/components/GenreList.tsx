import { HStack, List, ListItem, Spinner, Image, Text } from '@chakra-ui/react'
import useData from '../hooks/useData'
import useGenres from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'

function GenreList() {
  const { data, isLoading, error } = useGenres()
  if (error) return null
  if (isLoading) return <Spinner />
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              objectFit="cover"
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize='lg'>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}

export default GenreList
