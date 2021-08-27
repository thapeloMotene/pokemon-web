import React, { Component } from 'react';
import {CdsTag} from '@cds/react/tag';
import { connect } from 'react-redux';

 class Detail extends Component {
  render() {
    return (
      <div style={{marginTop:65,alignItems:'center',padding:30}}>  
     
          <center>
              <img src={this.props.pokemon.sprites.front_default} alt={this.props.pokemon.name} />
          </center>

      <h3 style={{textAlign:'center',fontWeight:500}}>{this.props.pokemon.name}</h3>

        <center>
            {this.props.pokemon && this.props.pokemon.abilities.length > 0 ?<h4 style={{textAlign:'center',fontWeight:400}}>Abilities:</h4>:null}
            {this.props.pokemon && this.props.pokemon.abilities.map((ability)=>(<CdsTag key={ability.ability.name} style={{marginRight:5}} readonly color="light-blue">{ability.ability.name}</CdsTag>))}

            {this.props.pokemon && this.props.pokemon.moves.length > 0 ?  <h4 style={{textAlign:'center'}}>Moves:</h4> :null}
            {this.props.pokemon && this.props.pokemon.moves.map((move)=>(<CdsTag key={move.move.name} style={{marginRight:5}} readonly color="light-blue">{move.move.name}</CdsTag>))}

            {this.props.pokemon && this.props.pokemon.held_items.length > 0 ?  <h4 style={{textAlign:'center'}}> <h4 style={{textAlign:'center'}}>Held Item(s):</h4></h4> :null}
            {this.props.pokemon && this.props.pokemon.held_items.map((item)=>(<CdsTag key={item.item.name}  style={{marginRight:5}} readonly color="light-blue">{item.item.name}</CdsTag>))}
        </center>
      </div>
    );
  }
}

function mapStateToProps({currentPokemon}){
    return{
        pokemon:currentPokemon
    }
}


export default connect(mapStateToProps,null)(Detail);