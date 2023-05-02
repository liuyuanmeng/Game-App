import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/game.png'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'
interface Props {
  onSearch: (searchText: string) => void
}
const NavBar = ({onSearch}: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" borderRadius="full" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
