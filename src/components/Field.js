import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends Component {

  static contextType = LanguageContext;

  render() {

    console.log(this.context)
    const text = this.context === 'english' ? 'Name' : 'Naam'

    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;