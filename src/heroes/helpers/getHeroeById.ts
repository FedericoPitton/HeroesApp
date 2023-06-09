import axios from "axios";

export const getHeroeById = async(id:string) => {
  try {
    const res = await axios.get(`https://akabab.github.io/superhero-api/api/id/${id}.json`);
    const data = await res.data;
    return data;
  } catch (e) {
    console.log(e);
    throw new Error('Failed to fetch heroe');
  }
}
