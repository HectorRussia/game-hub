import React from 'react'
import { Game } from '../hooks/useGames'
import { Card,CardBody,HStack,Heading,Image } from '@chakra-ui/react'
import PlatformiconList from './PlatformiconList'
import CriticScore from './CriticScore'

interface Props {
    game: Game
    name: string
}

const GameCard = ({game}:Props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image src={game.background_image}></Image>
        <CardBody>
            <Heading fontSize='2xl'>
                {game.name}
            </Heading>
            <HStack justifyContent='space-between'>
              <PlatformiconList platforms={game.parent_platforms.map(p=>p.platform)}></PlatformiconList>    
              <CriticScore score={game.metacritic}></CriticScore>
            </HStack>
           
        </CardBody>
    </Card>
  )
}

export default GameCard
