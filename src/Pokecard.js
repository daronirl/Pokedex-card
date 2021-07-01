import react, {Component} from 'react';
import './Pokecard.css';
const poke_api = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

class Pokecard extends Component {
    render() {
        let imgSrc = `${poke_api}${this.props.id}.png`;
        return (
            <div className="Pokecard">
                <h1>{this.props.name}</h1>
                <img src={imgSrc} alt={this.props.name}/>
                <p>{this.props.exp}</p>
                <div>type:{this.props.type}</div>

            </div>
        )
    }

}

export default Pokecard;