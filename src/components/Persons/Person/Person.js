import React, { Component } from 'react';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';


class Person extends Component {
  render () {
    return (
      <React.Fragment>
        <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </React.Fragment>
    );
  }
};

export default withClass(Person, classes.Person);