import './Pokecard.css';

// TODO: doc string

function Pokecard({ id, name, type, base_experience }) {
  const pokeImg=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="Pokecard">
      <h2 className="Pokecard-h2">{name}</h2>
      <img src={pokeImg} alt="Photograph of pokemon" />
      <p>Type: {type}</p>
      <p>EXP: {base_experience}</p>
    </div>
  );
}

export default Pokecard;