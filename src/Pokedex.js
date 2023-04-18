import Pokecard from "./Pokecard";
import './Pokedex.css';

// [
//   {id: 4,   name: 'Charmander', type: 'fire',     base_experience: 62},
//   {id: 7,   name: 'Squirtle',   type: 'water',    base_experience: 63},
//   {id: 11,  name: 'Metapod',    type: 'bug',      base_experience: 72},
//   {id: 12,  name: 'Butterfree', type: 'flying',   base_experience: 178},
//   {id: 25,  name: 'Pikachu',    type: 'electric', base_experience: 112},
//   {id: 39,  name: 'Jigglypuff', type: 'normal',   base_experience: 95},
//   {id: 94,  name: 'Gengar',     type: 'poison',   base_experience: 225},
//   {id: 133, name: 'Eevee',      type: 'normal',   base_experience: 65}
// ]

// TODO: add a doc string - describe props

function Pokedex({ pokemon, xpsum, isWinner }) {

  console.log(xpsum);
  return (
    <div className="Pokedex">
      <ul className="Pokedex-ul">
        {pokemon.map(p =>
          <li><Pokecard
            className="Pokecard"
            name={p.name}
            id={p.id}
            type={p.type}
            base_experience={p.base_experience} />
          </li>
        )}
      </ul>
      <p><b>{xpsum}</b></p>
      <p><b>{isWinner ? "This hand wins!" : null}</b></p>

    </div>
  );

}

export default Pokedex;