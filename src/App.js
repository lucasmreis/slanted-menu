import React, { Component } from 'react';
import MenuItem from './components/MenuItem';

const contents = name => onClose => (
  <div>
    <h2>Contents of {name}</h2>
    <a onClick={onClose}>Back</a>
  </div>
)

const isSelected = (i, { selected }) => !selected || selected === i

class App extends Component {
  state = {
    items: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    selected: null
  }

  select = item => this.setState({ selected: item })

  close = () => this.select(null)

  render() {
    return (
      <div className={`container ${this.state.selected ? 'container-selected' : ''}`}>
        {this.state.items.map(i => (
          <MenuItem
            key={i}
            name={i}
            selected={isSelected(i, this.state)}
            onSelectItem={() => this.select(i)}
            onClose={this.close}>
            {contents(i)}
          </MenuItem>
        ))}
      </div>
    );
  }
}

export default App;
