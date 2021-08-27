import {CURRENT_POKEMON} from './types';


export const  setPokemon =  (pokemon) => async dispatch => {
    dispatch({type: CURRENT_POKEMON, payload: pokemon});

};