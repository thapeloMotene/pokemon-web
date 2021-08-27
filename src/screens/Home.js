import React, { Component } from 'react';
import PokemonCard from '../components/PokemonCard';
import axios from 'axios';

export default class Home extends Component {
    constructor(props){
        super(props);

        this.state ={
            pokemons:[],
            filteredPokemons:[]
        }
    }

    componentDidMount(){
        axios.get('/v1/pokemons')
        .then((response)=>{
            this.setState({pokemons:response.data, filteredPokemons:response.data});
            
        })
        .catch(reason=>{
            console.error(reason);
        })
    }

    filterPokemons=(e)=>{
        let filtered_array = this.state.pokemons.filter(p => p.name.includes(e.target.value));
        this.setState({filteredPokemons:filtered_array});
    }

  render() {
    return (
      <div> 
          <div className="home-jumbotron" >
              <div className="cover">
                  <center>
                    <input type="text" className="input-search" placeholder="Type To Search Pokemon Results" style={{marginTop:150}} onChange={this.filterPokemons}/>
                  </center>
              
              </div>
          </div>
          <h2 style={{textAlign:'center'}}>pick a pokemon to view its details</h2>
        
                <div style={{display:'inline-flex', flexWrap:'wrap'}}>

                {this.state.filteredPokemons && this.state.filteredPokemons.map((pokemon,index)=>(
                 <PokemonCard pokemon={pokemon} key={index}/>
              ))}

        </div>
      </div>
    );
  }
}
