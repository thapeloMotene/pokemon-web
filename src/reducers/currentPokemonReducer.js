import {CURRENT_POKEMON} from '../actions/types';

export default function currentPokemon(state = false, action){
    switch(action.type){
        case CURRENT_POKEMON:
        return action.payload || false;
         default:
        return state;
    }
}

