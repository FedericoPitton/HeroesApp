import { useEffect, useState } from 'react'
import { getHeroesByPublisher, ISuperhero } from '../helpers'
import { getHeroesByName } from '../helpers/getHeroesByName';
import { HeroCard } from './HeroCard';
import { PaginationButtons } from './PaginationButtons';

export const HeroList = ({ publisher}: any) => {
  const [heroes, setHeroes] = useState<ISuperhero[]>([]);
  const [page, setpage] = useState(1)
  const [pageSize, setpageSize] = useState(15)

  const [totalPages, setTotalPages] = useState(0);


  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const { data, totalPages } = await getHeroesByPublisher(publisher, page, pageSize);
        setHeroes(data);
        setTotalPages(totalPages);
      } catch (error) {
        console.log(error);
      }
    };

    fetchHeroes();
  }, [publisher, page, pageSize]);


  return (
    <div className="d-flex flex-column align-items-center mt-4 mb-4">
      <div className="row rows-clos-1 row-cols-md-3 g-3">
        {heroes.map((hero: ISuperhero) => {
          return <HeroCard key={hero.id} {...hero} />;
        })}
      </div>
      <PaginationButtons page={page} totalPages={totalPages} setPage={setpage} />
    </div>


  )
}
