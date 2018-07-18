import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';

export const AuthContext = React.createContext(false);

class App extends Component {



  state = {
    persons: [
      { id: 'aasdf32', name: 'Nick', age: 31 },
      { id: 'bdfth4', name: 'Derick', age: 50 },
      { id: 'tyjuy', name: 'Jelly', age: 22 },
      { id: '83wef', name: 'Babs', age: 42 }
    ],
    showPersons: false,
    toggleClicked: 0,
    authenticated: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;


    this.setState({ persons: persons });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    //functionally setting state helps ensure that the state is appropriately 
    //changed for any given set state method
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: this.state.toggleClicked + 1
      }
    });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  loginHandler = () => {
    this.setState({ authenticated: true });
  }

  // Allows syncing state and props before rendering
  // static getDerivedStateFromProps(nextProps, prevState) {

  // }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons =
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler} />;
    }

    return (
      <React.Fragment>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          login={this.loginHandler}
          clicked={this.togglePersonHandler} />
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
      </React.Fragment>
    );
  }
}

export default withClass(App, classes.App);
