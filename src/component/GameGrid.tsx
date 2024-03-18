import { SimpleGrid,Text } from '@chakra-ui/react';
import useGames, { Platform } from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardCOntainer from './GameCardCOntainer';
import { Genre } from '../hooks/useGenres';
import { GameQuery } from '../App';

interface Props {
  gameQuery: GameQuery
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({gameQuery}:Props) => {
   const {data,error,isLoading} = useGames(gameQuery);
   const skeletons = [1,2,3,4,5,6];
  return (
    <>
        {error && <Text>{error}</Text>}
        <SimpleGrid 
            columns={{sm:1,md:2,lg:3,xl:5 }} 
            padding='10px' 
            spacing={8}>

            {isLoading && skeletons.map(skeleton => 
            <GameCardCOntainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardCOntainer> )}

            {data.map((game) => 
            <GameCardCOntainer key={game.id}>
                <GameCard  game={game} name={''} />
            </GameCardCOntainer>)}
        </SimpleGrid>
    </>
  )
}
export default GameGrid
