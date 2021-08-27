import React, { Component } from 'react';
import pokeball from '../assets/img/Poke_Ball.png';
import axios from 'axios';
import {connect} from 'react-redux'
import * as actions from '../actions';
import {withRouter} from 'react-router-dom';


 class PokemonCard extends Component {

    constructor(props){
        super(props);
        this.state={
            data:null
        }
    }

    componentDidMount(){
        axios.get(`/v1/pokemon/${this.props.pokemon.name}`)
        .then((response)=>{
          
            this.setState({data:response.data})
        })
        .catch(reason=>{
            console.error(reason)
        
        })
    }


setCurrentUserAndNavigate=()=>{
    this.props.setPokemon(this.state.data);
    this.props.history.push(`/pokemon/${this.state.data.name}`);
}


  render() {
    return (
        <div className="box" style={{paddingTop:40, margin:5}} onClick={this.setCurrentUserAndNavigate}>
            <center>
                <img alt={this.props.pokemon.name} src={this.state.data ? this.state.data.sprites.front_default:pokeball} style={{width:60,height:60,alignSelf:'center'}}></img>
            </center>
            <h1 style={{textAlign:'center'}}>{this.props.pokemon.name}</h1>
        </div>
    );
  }
}


export default withRouter(connect(null,actions)(PokemonCard));
