import axios from "axios"

const getSearchPokemon = async (namePokemon) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${namePokemon}`
    const request = await axios.get(url)
    return request
}

export default getSearchPokemon