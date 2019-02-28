import React from 'react';
import PokemonProvider from '../components/PokemonProvider'

class PokemonContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            pokemon: "",
            pokemonImg: ""
        };

    }

    static characterNumberGenerator(props) {
        let i = (props.birthday.month * props.birthday.day * props.birthday.year);
        let result = '';
        do {
            if (i <= 251){
                result = i;
                break;
            }
            else{
                for (i; i >= 251; i*=0.5){
                    if(i<=251){
                        result = i;
                        break;
                    }
                    result = i;
                }

            }

            result = i;
        }
        while (i > 251);
        return Math.round(result);
    }



    componentWillReceiveProps() {
        let characterNumber = PokemonContainer.characterNumberGenerator(this.props);
        if (this.props.birthday.month !== null) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${characterNumber}`)
                .then(response => response.json())
                .then(data => this.setState({pokemon: data}))
                .then(fetch(`https://pokeapi.co/api/v2/pokemon-form/${characterNumber}`)
                    .then(response => response.json())
                    .then(data => this.setState({pokemonImg: data.sprites.front_default})));

        }
    }

    render() {
        return(
        <div>
            <PokemonProvider pokemon={this.state.pokemon} pokemonImg={this.state.pokemonImg}/>
        </div>
        )
    }


}

export default PokemonContainer