import React, { Component } from 'react'
import styled from 'styled-components'
import MenuItem from './components/MenuItem'

const ContentsContainer = styled.div`
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  padding: 1em;
  opacity: 1;
  transition: all .2s ease-in 0s;

  & a {
    text-decoration: underline;
    cursor: pointer;
  }
`

const contents = name => onClose => (
  <ContentsContainer>
    <h2>Contents of {name}</h2>
    <a onClick={onClose}>Back</a>
  </ContentsContainer>
)

const color = {
  A: '#1abc9c',
  B: '#f1c40f',
  C: '#e74c3c',
  D: '#3498db',
  E: '#e67e22',
  F: '#2ecc71',
  G: '#9b59b6'
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  font-size: 32px;
  font-weight: 800;
  perspective: 600px;
  transform: ${props => props.selected ? 'skew(0)' : 'skew(-10deg)'};
  transition: all .2s ease-in-out;
  position: relative;
`

const isSelected = (i, { selected }) => selected === i

const allClosed = ({ selected }) => selected === null

class App extends Component {
  state = {
    items: ['A', 'B', 'C', 'D', 'E'],
    selected: null
  }

  select = item => this.setState({ selected: item })

  close = () => this.select(null)

  render() {
    return (
      <Container selected={this.state.selected}>
        {this.state.items.map(i => (
          <MenuItem
            key={i}
            name={i}
            color={color[i]}
            allClosed={allClosed(this.state)}
            selected={isSelected(i, this.state)}
            onSelectItem={() => this.select(i)}
            onClose={this.close}>
            {contents(i)}
          </MenuItem>
        ))}
      </Container>
    )
  }
}

export default App;
