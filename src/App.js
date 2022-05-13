import './App.css';
import ListPoke from './components/ListPoke';
import SearchPokemon from './components/SearchPokemon';
import SelectTypePokemon from './components/SelectTypePokemon';



function App() {
  return (
    <div className="App">
      <SearchPokemon />
      <SelectTypePokemon />
      <ListPoke />
    </div>
  );
}

export default App;
