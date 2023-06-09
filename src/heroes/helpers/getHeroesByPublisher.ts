import { fetchHeroes, ISuperhero } from './';



export const getHeroesByPublisher = async (publisher: string, page: number, pageSize: number) => {
  const validPublishers = ['DC Comics', 'Marvel Comics'];

  if (!validPublishers.includes(publisher)) {
    throw new Error(`${publisher} is not a valid publisher`);
  }

  const allHeroes = await fetchHeroes();
  const filteredHeroes = allHeroes.filter((hero: ISuperhero) => hero.biography.publisher === publisher);

  const totalHeroes = filteredHeroes.length;
  const totalPages = Math.ceil(totalHeroes / pageSize);

  const startIndex = (page - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalHeroes);

  const heroes = filteredHeroes.slice(startIndex, endIndex);

  return {
    data: heroes,
    totalPages: totalPages,
  };
};
