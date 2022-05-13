import { useEffect, useState } from "react";
import getSearchPokemon from "../services/getSearchPokemons";



const SearchPokemon = () => {
    // nombre del pokemon en el input
    const [namePokemon, setNamePokemon] = useState('');
    // servicio que llama a ese pokemon
    useEffect(() => {
        getSearchPokemon(namePokemon)
            .then((response) => {
                console.log(response.data.forms)
            })
            .catch(error => {
                console.error(error)
            })
    }, [namePokemon])
    // funcion que toma el valor de un input
    const valueInput = (e) => {
        console.log(e.target.value)
        setNamePokemon(e.target.value)
    }


    return (
        <div className="grupo-nombre">
            <div className="grupo-input">
                <input type="text" onChange={valueInput} placeholder="Nombre del Pokemon" />

            </div>
        </div>
    );
}

export default SearchPokemon

