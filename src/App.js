import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import MenuItem from './components/MenuItem'

const ContentsContainer = styled.div`
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  padding: 1em;
  opacity: 1;
  transition: all .2s ease-in 0s;
`

const Back = styled(Link)`
  color: white;
  text-decoration: underline;
  cursor: pointer;
`

const contents = name => (
  <ContentsContainer>
    <h2>Contents of {name}</h2>
    <Back to="/">Back</Back>
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

const items = ['B', 'C', 'D', 'E', 'F', 'G']

const menuItems = items.map(i => (
  <MenuItem key={i} name={i} color={color[i]}>
    {contents(i)}
  </MenuItem>
))

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/:selected" render={() => (
        <Container selected>
          {menuItems}
        </Container>)} />
      <Route path="/" render={() => (
        <Container selected={false}>
          {menuItems}
        </Container>)} />
    </Switch>
  </BrowserRouter>
)
