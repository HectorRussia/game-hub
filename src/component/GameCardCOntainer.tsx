import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
    children:ReactNode
}

const GameCardCOntainer = ({children}:Props) => {
  return (
   <Box width='300px' borderRadius={10} overflow='hidden'>
    {children}
   </Box>
  )
}

export default GameCardCOntainer
