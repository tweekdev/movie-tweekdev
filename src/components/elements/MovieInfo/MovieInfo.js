import React from 'react'
import FontAwesome from 'react-fontawesome'
import styled from 'styled-components'
import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from '../../../config'
import MovieThumb from '../MovieThumb/MovieThumb'

const Container = styled.div`
  background-size: cover !important;
  background-position: center !important;
  width: 100%;
  height: 600px;
  padding: 40px 20px;
  box-sizing: border-box;
  animation: animateMovieinfo 1s;
  @-webkit-keyframes animateMovieinfo {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes animateMovieinfo {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`
const Content = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: rgb(0, 0, 0, 0.7);
  position: relative;
`
const Thumb = styled.div`
  width: 350px;
  height: 100%;
  overflow: hidden;
  position: absolute;
  left: 0px;
`
const ContentText = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  height: 100%;
  width: auto;
  padding: 40px;
  color: #fff;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  left: 360px;
`
const Title = styled.h1`
  font-family: 'Abel', sans-serif;
  font-size: 48px;
  margin: 0;
`
const SubTitle = styled.h3`
  font-size: 16px;
  line-height: 0;
  margin-top: 30px;
`
const Text = styled.p`
  font-family: 'Abel', sans-serif;
  font-size: 18px;
  line-height: 26px;
`
const Rating = styled.div`
  width: 250px;
  height: 20px;
  margin-top: 20px;
  position: relative;
`

const MovieInfo = ({ movie, directors }) => {
  return (
    <Container
      style={{
        background: movie.backdrop_path
          ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}')`
          : '#000',
      }}
    >
      <Content>
        <Thumb>
          <MovieThumb
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : './images/no_image.jpg'
            }
            clickable={false}
          />
        </Thumb>
        <ContentText>
          <Title>{movie.title}</Title>
          <SubTitle>PLOT</SubTitle>
          <Text>{movie.overview}</Text>
          <SubTitle>IMDB RATING</SubTitle>
          <Rating>
            <meter
              min='0'
              max='100'
              optimum='100'
              low='40'
              high='70'
              value={movie.vote_average * 10}
            ></meter>
            <Text className='rmdb-score'>{movie.vote_average}</Text>
          </Rating>
          {directors.length > 1 ? (
            <SubTitle>DIRECTORS</SubTitle>
          ) : (
            <SubTitle>DIRECTOR</SubTitle>
          )}
          {directors.map((element, i) => {
            return (
              <Text key={i} className='rmdb-director'>
                {element.name}
              </Text>
            )
          })}
        </ContentText>
        <FontAwesome className='fa-film' name='film' size='5x' />
      </Content>
    </Container>
  )
}

export default MovieInfo
