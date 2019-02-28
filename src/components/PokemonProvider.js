import React from 'react';

const PokemonProvider = (props) => {


    if (props !== undefined) {

        return(
            <div>
                <h1>{props.pokemon.name}</h1>
                <img src={props.pokemonImg} width={300} height={300} alt={props.pokemon.name}/>
            </div>
        )
    }

};

export default PokemonProvider