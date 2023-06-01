import { useEffect, useState } from 'react'
import { getHeroesByPublisher, ISuperhero } from '../helpers'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}:any) => {
    const [heroes, setHeroes] = useState<ISuperhero[]>([]);
    const [page, setpage] = useState(1)
    const [pageSize, setpageSize] = useState(20)

    useEffect(() => {
      const fetchHeroes = async () => {
        try {
          const heroesData = await getHeroesByPublisher(publisher,page,pageSize);
          setHeroes(heroesData);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchHeroes();
    }, [publisher]);

  return (
    <div className='row rows-clos-1 row-cols-md-3 g-3'>
        {heroes.map((hero:ISuperhero) => {
            return  <HeroCard
            key={hero.id} 
            {...hero}
            />
        })}
    </div>
  )
}
