import { useEffect, useState } from 'react'
import { getHeroesByPublisher, ISuperhero } from '../helpers'
import { HeroCard } from './HeroCard';
import { PaginationButtons } from './PaginationButtons';

export const HeroList = ({ publisher }: any) => {
  const [heroes, setHeroes] = useState<ISuperhero[]>([]);
  const [page, setpage] = useState(1)
  const [pageSize, setpageSize] = useState(12)

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
      {/* <PaginationButtons page={page} totalPages={totalPages} setPage={setpage} /> */}
      <div className="row">
        {heroes.map((hero: ISuperhero) => (
          <div className="col-12 col-md-6 col-lg-4 g-3" key={hero.id}>
            <HeroCard {...hero} />
          </div>
        ))}
      </div>
      <PaginationButtons page={page} totalPages={totalPages} setPage={setpage} />
    </div>

  )
}
