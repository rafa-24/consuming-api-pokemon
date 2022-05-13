import axios from "axios";

export const getAllPokemons = async () => {
    const URL_API = 'https://pokeapi.co/api/v2/pokemon';
    const request = await axios.get(URL_API);
    return request;
}





