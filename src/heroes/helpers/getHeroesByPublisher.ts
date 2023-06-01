import { fetchHeroes, ISuperhero } from './';



export const getHeroesByPublisher = async (publisher: string, page: number, pageSize: number) => {
  const validPublishers = ['DC Comics', 'Marvel Comics'];

  if (!validPublishers.includes(publisher)) {
    throw new Error(`${publisher} is not a valid publisher`);
  }

  const allHeroes = await fetchHeroes();
  const filteredHeroes = allHeroes.filter((hero: ISuperhero) => hero.biography.publisher === publisher);

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return filteredHeroes.slice(startIndex, endIndex);
};

