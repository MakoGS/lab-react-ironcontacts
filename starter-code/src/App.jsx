import React, { Component } from "react";
import contacts from "./contacts";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: contacts.slice(0, 5)
    };
    this.addRandom = this.addRandom.bind(this);
    this.sortPopularity = this.sortPopularity.bind(this);
    this.sortName = this.sortName.bind(this);
    this.delete = this.delete.bind(this);
  }
  delete(item) {
    let newArray = [...this.state.list];
    newArray.splice(item, 1);
    this.setState({
      list: newArray
    });
  }
  addRandom() {
    this.setState({
      list: [
        ...this.state.list,
        contacts[Math.floor(Math.random() * contacts.length)]
      ]
    });
  }
  sortPopularity() {
    this.setState({
      list: [...this.state.list].sort((a, b) => a.popularity - b.popularity)
    });
  }
  sortName() {
    this.setState({
      list: [...this.state.list].sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
      })
    });
  }

  render() {
    const contacts = this.state.list;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Iron Contacts</h1>
          <button onClick={this.addRandom}>Add Random contact</button>
          <button onClick={this.sortPopularity}>Sort by Popularity</button>
          <button onClick={this.sortName}>Sorty by Name</button>
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
            </thead>
            {contacts.map((contact, index) => (
              <tbody key={index}>
                <tr>
                  <td>
                    <img src={contact.pictureUrl} width="50px" />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  <td>
                    <button
                      onClick={() => {
                        console.log(index);
                        this.delete(index);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </header>
      </div>
    );
  }
}

export default App;
