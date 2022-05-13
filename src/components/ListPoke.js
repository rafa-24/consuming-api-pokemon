import { useEffect, useState } from "react";
import { getAllPokemons } from "../services/getAllPokemons";
import { Pokemon } from "./Pokemon";


const ListPoke = () => {
    // array de pokemones
    const [arrayPokemons, setArrayPokemons] = useState([])
    useEffect(() => {
        getAllPokemons()
            .then(res => {
                console.log(res.data.results)
                setArrayPokemons(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // lista de pokemones el hijo es Pokemon
    const list = arrayPokemons.map((item) => <Pokemon name={item.name} url={item.url} key={item.name} />)



    return (
        <div className="lista-pokemones">
            {list}
        </div>
    );

}

export default ListPoke;