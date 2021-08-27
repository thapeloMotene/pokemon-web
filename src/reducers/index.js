import {combineReducers} from 'redux';
import currentPokemonReducer from './currentPokemonReducer';


export default combineReducers({
    currentPokemon:currentPokemonReducer
});