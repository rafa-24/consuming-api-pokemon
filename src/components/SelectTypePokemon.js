import { useState, useEffect } from "react";
import getTypePokemon from "../services/getTypePokemon";

const SelectTypePokemon = ({ handlerType }) => {

    const [typeArr, setTypeArr] = useState([]);

    useEffect(() => {
        getTypePokemon()
            .then(response => { setTypeArr(response.data.results) })
            .catch(error => console.error(error))
    }, [])

    const list = typeArr.map((typePoke) => <option key={typePoke.name}>{typePoke.name}</option>)

    return (
        <select onChange={(e) => handlerType(e.target.value)}>
            {list}
        </select>
    );

}

export default SelectTypePokemon