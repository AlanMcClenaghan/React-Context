import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends Component {

  // this.context method
  // static contextType = LanguageContext;

  render() {

    // this.context method
    // console.log(this.context)
    // const text = this.context === 'english' ? 'Name' : 'Naam'

    return (
      <div className="ui field">
        <label>
          <LanguageContext.Consumer>
            {(value) => value === 'english' ? 'Name' : 'Naam'}
          </LanguageContext.Consumer>
        </label>
        <input />
      </div>
    );
  }
}

export default Field;