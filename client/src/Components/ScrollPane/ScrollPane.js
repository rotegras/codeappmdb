import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Scroll = styled.div`
  overflow-y: scroll;
  overflow-x: none;
  -webkit-overflow-scrolling: touch;
  height: ${props => props.reduceHeight ? `calc(100% - ${props.reduceHeight})` : '100%'};
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`

const ScrollPane = ({ children, reduceHeight }) => (
  <Scroll reduceHeight={reduceHeight}>
    {children}
  </Scroll>
)

ScrollPane.propTypes = {
  children: PropTypes.node.isRequired,
  reduceHeight: PropTypes.string.isRequired,
}

export default ScrollPane