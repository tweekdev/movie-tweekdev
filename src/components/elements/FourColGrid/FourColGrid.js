import React from 'react'
import styled from 'styled-components'
const FourColGridContainer = styled.div`
  font-family: 'Abel', sans-serif;
  font-size: 42px;
`
const FourColGridContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 40px;

  @media screen and (max-width: 720px) {
    .rmdb-grid-content {
      grid-template-columns: auto auto;
    }
  }
`
const Element = styled.div`
  background: #353535;
  max-height: 430px;
  -webkit-animation: animateGrid 0.5s;
  animation: animateGrid 0.5s;
  overflow: hidden;
  @-webkit-keyframes animateGrid {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes animateGrid {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: 720px) {
    :nth-child(2n + 2) {
      margin-right: 0;
    }
  }
`

const Title = styled.h1`
  font-family: 'Abel', sans-serif;
  font-size: 42px;
  @media screen and (max-width: 720px) {
    font-size: 22px;
  }
`

const FourColGrid = props => {
  const renderElements = () => {
    const gridElements = props.children.map((element, i) => {
      return <Element key={i}>{element}</Element>
    })
    return gridElements
  }

  return (
    <FourColGridContainer>
      {props.header && !props.loading ? <Title>{props.header}</Title> : null}
      <FourColGridContent>{renderElements()}</FourColGridContent>
    </FourColGridContainer>
  )
}

export default FourColGrid
