import React, { Component } from "react";
import { CardList } from "./CardList";
import { SearchBox } from "./SearchBox";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        { id: 1, name: "Andrei Popa" },
        { id: 2, name: "Lavinia Roxana Toma" },
        { id: 3, name: "Andreea Denisa Toma" },
        { id: 4, name: "Maria Toma" },
        { id: 5, name: "Mihai Dumitru Toma" }
      ],
      searchField: ""
    };
  }

  render() {
    const { monsters, searchField } = this.state;
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox
          placeholder="search monsters"
          handleChange={e => {
            this.setState({ searchField: e.target.value }, () =>
              console.log(this.state)
            );
          }}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
