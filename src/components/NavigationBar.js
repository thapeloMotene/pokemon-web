import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavigationBar extends Component {
  render() {
    return (
      <div style={{marginBottom:0}} className="sticky"> 
            <header className="header header-6">
                <div className="branding">
                <Link to={'/'}>
                    <span className="title">Pokidex-Web</span>
                </Link>
                </div>
            </header>
      </div>
    );
  }
}
