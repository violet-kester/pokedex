import { choice, remove } from './helpers';
import Pokedex from './Pokedex';

// Returns two hands of four items each
function Pokegame({pokemon}) {
  let hand1 = [];
  let hand2 = [];

  for (let i = 0; i < 4; i++) {
    let poke1 = choice(pokemon);
    hand1.push(remove(pokemon, poke1));
  }

  for (let poke of pokemon) {
    hand2.push(poke);
  }
  return (
  <div>
    <Pokedex pokemon={hand1} />
    <Pokedex pokemon={hand2} />
  </div>)

}

export default Pokegame;