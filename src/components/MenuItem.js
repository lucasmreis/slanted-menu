import React from 'react'
import styled from 'styled-components'

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

const ItemLink = styled.a`
  text-decoration: none;
  opacity: ${props => !props.allClosed || props.selected ? '0' : '1'};
  transform: skew(${props => props.allClosed ? '10' : '0'}deg);
  transition: all .2s ease-in ${props => props.allClosed ? '.2' : '0'}s;
  color: white;
  cursor: pointer;
`

const FadeInDiv = styled.div`
  opacity: ${props => props.opacity};
  transition: all .2s ease-in-out .2s;
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

export default ({ name, color, selected = false, allClosed = true, children, onSelectItem, onClose }) => (
  <Item
    selected={selected}
    allClosed={allClosed}
    color={color}
    onClick={() => selected ? () => {} : onSelectItem()}>
    {selected
      ? <FadeIn>{children(onClose)}</FadeIn>
      : (
          <ItemLink onClick={onSelectItem} selected={selected} allClosed={allClosed}>
            {name}
          </ItemLink>
      )
    }
  </Item>
)
