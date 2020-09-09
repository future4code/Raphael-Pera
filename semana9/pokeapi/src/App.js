import React, {useState, useEffect} from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./components/PokeCard";


export default function App() {
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setpokeName] = useState("")

  useEffect(()=>{
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        // função que está setando no estado os 151 pokemons
        // this.setState({ pokeList: response.data.results })
        setPokeList(response.data.results)
        // console.log('useEffect > then')
      })
      .catch(err => {
        console.log(err)
      })
  },[pokeName])

  const changePokeName = event => {
    // this.setState({ pokeName: event.target.value })
    setpokeName(event.target.value)
    // console.log('changePokeName', event.target.value)
  }

  return (
    <div className="App">
      {/* evento onChange chama função toda vez que o usuário 
      escolhe um novo pokemon no dropdown */}
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {/* renderizando a lista de pokemons como opções do select */}
        {pokeList.map(pokemon => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      {/* expressão booleana que renderiza o componente PokeCard,
      caso o valor de pokeName, no estado, seja true */}
      {pokeName && <PokeCard pokemon={pokeName} />}
    </div>
  )
}