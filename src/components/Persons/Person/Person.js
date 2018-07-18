import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import { AuthContext } from '../../../containers/App';


class Person extends Component {

  constructor(props) {
    super(props);
    this.inputElement = React.createRef();//Also a new React way of accessing references to elements
  }

  componentDidMount() {
    if (this.props.position === 0) {
      this.inputElement.current.focus();
    }
  }


  focus() {
    this.inputElement.current.focus();
  }
  render() {
    return (
      <React.Fragment>
        <AuthContext.Consumer>
          {auth => auth ? <p>I'm authenticated</p> : null}
        </AuthContext.Consumer>
        <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        <input
          ref={this.inputElement} //a special React keyword that helps track references
          type="text"
          onChange={this.props.changed}
          value={this.props.name} />
      </React.Fragment>
    );
  }
};

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default withClass(Person, classes.Person);