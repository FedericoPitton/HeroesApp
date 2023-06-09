import { fetchHeroes } from "./fetchHeroesAll";
import { ISuperhero } from "./IHero";

export const getHeroesByName = async (name: string, page: number, pageSize: number) => {
    const validPublishers = ['DC Comics', 'Marvel Comics'];
    const allHeroes = await fetchHeroes();
    const filteredHeroesByPublishers = allHeroes.filter(
        (hero: ISuperhero) =>
            validPublishers.includes(hero.biography.publisher)
    );

    const filteredHeroes = filteredHeroesByPublishers.filter((hero: ISuperhero) =>
        hero.name && hero.name.toLowerCase().includes(name.toLowerCase())
    );

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
