import React, { Component } from 'react'
import styled from 'styled-components'
import { API_KEY, API_URL } from '../../config'
import Actor from '../elements/Actor/Actor'
import FourColGrid from '../elements/FourColGrid/FourColGrid'
import MovieInfo from '../elements/MovieInfo/MovieInfo'
import MovieInfoBar from '../elements/MovieInfoBar/MovieInfoBar'
import Navigation from '../elements/Navigation/Navigation'
import Spinner from '../elements/Spinner/Spinner'

const MovieContainer = styled.div`
  margin-bottom: 100px;
`
const MovieGrid = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
`
class Movie extends Component {
  state = {
    movie: null,
    actors: null,
    directors: [],
    loading: false,
  }

  componentDidMount() {
    this.setState({ loading: true })
    // first fetch the movie
    const endpoint = `${API_URL}movie/${this.props.match.params.movieId}?api_key=${API_KEY}&language=fr-FR&page=1`
    this.fetchItems(endpoint)
  }

  fetchItems = endpoint => {
    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        if (result.status_code) {
          this.setState({ loading: false })
        } else {
          this.setState({ movie: result }, () => {
            const endpoint = `${API_URL}movie/${this.props.match.params.movieId}/credits?api_key=${API_KEY}&language=fr-FR&page=1`
            fetch(endpoint)
              .then(result => result.json())
              .then(result => {
                const directors = result.crew.filter(
                  member => member.job === 'Director',
                )

                this.setState({
                  actors: result.cast,
                  directors,
                  loading: false,
                })
              })
          })
        }
      })
      .catch(err => console.error('error', err))
  }

  render() {
    return (
      <MovieContainer>
        {this.state.movie ? (
          <div>
            <Navigation movie={this.props.location.movieName}></Navigation>
            <MovieInfo
              movie={this.state.movie}
              directors={this.state.directors}
            ></MovieInfo>
            <MovieInfoBar
              time={this.state.movie.runtime}
              budget={this.state.movie.budget}
              revenue={this.state.movie.revenue}
            ></MovieInfoBar>
          </div>
        ) : null}
        {this.state.actors ? (
          <MovieGrid>
            <FourColGrid header={'Actors'}>
              {this.state.actors.map((element, i) => {
                return <Actor key={i} actor={element}></Actor>
              })}
            </FourColGrid>
          </MovieGrid>
        ) : null}
        {!this.state.actors && !this.state.loading ? (
          <h1>No Movie Found!</h1>
        ) : null}
        {this.state.loading ? <Spinner></Spinner> : null}
      </MovieContainer>
    )
  }
}
export default Movie
