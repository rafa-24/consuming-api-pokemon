import { useState, useEffect } from "react";
import { getPokemon } from "../services/getPokemon";

export const Pokemon = ({ name, url }) => {
    // imagen pokemon
    const [imgPokemon, setImgPokemon] = useState('')
    // llamada a la api
    useEffect(() => {
        getPokemon(url)
            .then(res => {
                setImgPokemon(res.data.sprites.front_default)
            })
            .catch(err => {
                console.error(err)
            })
    }, [url])
    return (
        <div className="card-pokemon">
            <img src={imgPokemon} alt="" className="image-pokemon" />
            <div className="container-pokemon">
                <h6>{name}</h6>
            </div>
        </div>
    );
}

