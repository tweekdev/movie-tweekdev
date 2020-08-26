import React from 'react'
import FontAwesome from 'react-fontawesome'
import styled from 'styled-components'
import { calcTime, convertMoney } from '../../../helpers.js'
import './MovieInfoBar.css'

const Container = styled.div`
  margin-bottom: 100px;
  width: 100%;
  height: 105px;
  background: #1c1c1c;
  position: relative;
  padding: 25px 20px 0px 20px;
  box-sizing: border-box;
  font-family: 'Abel', sans-serif;
  font-size: 22px;
`
const Content = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  color: #fff;
`
const Col = styled.div`
  float: left;
  width: 33.33%;
  box-sizing: border-box;
  padding: 10px 20px 0 0;
`
const Info = styled.span`
  padding: 5px 0 0 10px;
  float: left;
`
const MovieInfoBar = ({ time, budget, revenue }) => (
  <Container>
    <Content>
      <Col>
        <FontAwesome className='fa-time' name='clock-o' size='2x' />
        <Info>Running time: {calcTime(time)}</Info>
      </Col>
      <Col>
        <FontAwesome className='fa-budget' name='money' size='2x' />
        <Info>Budget: {convertMoney(budget)}</Info>
      </Col>
      <Col>
        <FontAwesome className='fa-revenue' name='ticket' size='2x' />
        <Info>Revenue: {convertMoney(revenue)}</Info>
      </Col>
    </Content>
  </Container>
)

export default MovieInfoBar
