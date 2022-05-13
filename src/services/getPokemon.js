import axios from "axios";

export const getPokemon = async (url) => {
    const request = await axios.get(url)
    return request;

}

