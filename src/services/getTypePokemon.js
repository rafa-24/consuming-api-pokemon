import axios from "axios"

const getTypePokemon = async () => {
    const url = 'https://pokeapi.co/api/v2/type/'
    const request = await axios.get(url)
    return request

}

export default getTypePokemon