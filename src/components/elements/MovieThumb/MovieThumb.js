import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const MovieThumbImg = styled.img`
  width: 500px;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  transition: all 0.3s;
  box-sizing: border-box;
`
const MovieThumb = props => {
  return (
    <div>
      {props.clickable ? (
        <Link
          to={{
            pathname: `/${props.movieId}`,
            movieName: `${props.movieName}`,
          }}
        >
          <MovieThumbImg src={props.image} alt='movieThumb'></MovieThumbImg>
        </Link>
      ) : (
        <MovieThumbImg src={props.image} alt='movieThumb'></MovieThumbImg>
      )}
    </div>
  )
}

export default MovieThumb
