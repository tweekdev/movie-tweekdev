import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  width: 100%;
  height: auto;
  background: #1c1c1c;
  padding: 0 20px;
  box-sizing: border-box;
`
const HeaderContent = styled.div`
  max-width: 1280px;
  min-height: 120px;
  height: auto;
  padding: 20px 0px;
  margin: 0 auto;
  box-sizing: border-box;
  overflow: hidden;
  @media screen and (max-width: 500px) {
    max-width: 1280px;
    min-height: 0px;
  }
`
const LeftLogo = styled.img`
  width: 8%;
  float: left;
  @media screen and (max-width: 500px) {
    width: 20%;
  }
`
const RightLogo = styled.img`
  width: 10%;
  margin-top: 20px;
  float: right;
  @media screen and (max-width: 500px) {
    width: 20%;
  }
`
const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to='/'>
          <LeftLogo src='./images/logo1W.png'></LeftLogo>
        </Link>
        <RightLogo src='./images/tmdb_logo.png'></RightLogo>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header
