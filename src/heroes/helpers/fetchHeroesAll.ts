import axios from "axios";

export const fetchHeroes = async () => {
  try {
    const res = await axios.get('https://akabab.github.io/superhero-api/api/all.json');
    const data = await res.data;
    return data;
  } catch (e) {
    console.log(e);
    throw new Error('Failed to fetch heroes');
  }
};