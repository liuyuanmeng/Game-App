import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/game.png'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" borderRadius="full" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
