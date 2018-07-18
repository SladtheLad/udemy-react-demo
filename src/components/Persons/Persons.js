import React, { Component } from 'react';
import Person from './Person/Person';


// With ES6, arrow functions that are one line can use this notation
// which can ommit the return statement as it automatically returns behind the scenes
class Persons extends Component {

  constructor(props) {
    super(props);
    this.lastPersonRef = React.createRef();
  }

  componentDidMount () {

  }
  render() {
    return this.props.persons.map((person, index) => {
      return <Person
        click={() => this.props.clicked(index)}
        position={index}
        name={person.name}
        age={person.age}
        ref={this.lastPersonRef}
        key={person.id}
        changed={(event) => this.props.changed(event, person.id)}
      />
    });
  }
}


export default Persons;