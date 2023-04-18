import { choice, remove } from './helpers';
import Pokedex from './Pokedex';

// Returns two hands of four items each,
// adds the sum of their base_experience
// and then calculate the winner
function Pokegame({pokemon}) {
  let hand1 = [];
  let hand2 = [];
  let sum1 = 0;
  let sum2 = 0;
  let isWinner1 = false;
  let isWinner2 = false;

  for (let i = 0; i < 4; i++) {
    let poke1 = choice(pokemon);
    sum1 += poke1.base_experience;
    hand1.push(remove(pokemon, poke1));
  };

  for (let poke of pokemon) {
    hand2.push(poke);
    console.log(pokemon, poke.base_experience)
    sum2 += poke.base_experience;
  };

  if (sum1 > sum2) {
    isWinner1 = true;
  } else {
    isWinner2 = true;
  }

  return (
  <div>
    <Pokedex pokemon={hand1} xpsum={sum1} isWinner={isWinner1} />
    <Pokedex pokemon={hand2} xpsum={sum2} isWinner={isWinner2} />
  </div>)

}

export default Pokegame;