import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const NavigationContainer = styled.div`
  width: 100%;
  height: 50px;
  background: #353535;
  color: #fff;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  margin: 0;
  padding-top: 10px;
`
const NavigationContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
`
const Text = styled.p`
  font-family: 'Abel', sans-serif;
  font-size: 22px;
  float: left;
  color: #fff;
  padding-right: 10px;
  text-decoration: none;
  margin: 0;
`
const Navigation = props => {
  return (
    <NavigationContainer>
      <NavigationContent>
        <Link to='/'>
          <Text>Home</Text>
        </Link>
        <Text>/</Text>
        <Text>{props.movie}</Text>
      </NavigationContent>
    </NavigationContainer>
  )
}

export default Navigation
