import React from 'react'
import styled from 'styled-components'
import { Link, withRouter } from 'react-router-dom'

const Item = styled.div`
  cursor: ${props => props.selected ? 'unset' : 'pointer'};
  width: ${props => props.allClosed || props.selected ? '100' : '2'}%;
  height: 100vh;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: ${props => props.color};
  transition: opacity .2s ease-in-out 0.2s, transform .2s ease-in-out, width .2s ease-in-out .1s;

  &:last-child::after {
    content: '';
    width: 100vw;
    background: ${props => props.color};
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    transform: translateX(99%);
  }

  &:first-child::before {
    content: '';
    width: 100vw;
    background: ${props => props.color};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-99%);
  }
`

const ItemLink = styled(Link)`
  text-decoration: none;
  opacity: ${props => !props.allClosed || props.selected ? '0' : '1'};
  transform: skew(${props => props.allClosed ? '10' : '0'}deg);
  transition: all .2s ease-in ${props => props.allClosed ? '.2' : '0'}s;
  color: white;
  cursor: pointer;
`

const FadeInDiv = styled.div`
  opacity: ${props => props.opacity};
  transition: all .2s ease-in-out .3s;
`

class FadeIn extends React.Component {
  state = { opacity: 0 }
  componentDidMount() { setTimeout(() => this.setState({ opacity: 1 })) }
  render() {
    return (
      <FadeInDiv opacity={this.state.opacity}>
        {this.props.children}
      </FadeInDiv>
    )
  }
}

const MenuItem = ({ match, history, name, color, children }) => {
  const selected = match.params.selected === name
  const allClosed = match.path === '/'
  return <Item
    selected={selected}
    allClosed={allClosed}
    color={color}
    onClick={() => selected ? () => {} : history.push(name)}>
    {selected
      ? <FadeIn>{children}</FadeIn>
      : (
          <ItemLink to={name} selected={selected} allClosed={allClosed}>
            {name}
          </ItemLink>
      )
    }
  </Item>
}

export default withRouter(MenuItem)