import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import styled from 'styled-components'

const SearchBarContainer = styled.div`
  width: 100%;
  height: 105px;
  background: #1c1c1c;
  position: relative;
  padding: 25px 20px 0px 20px;
  box-sizing: border-box;
  color: #fff;
`
const SearchBarContent = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 55px;
  background: #353535;
  margin: 0 auto;
  border-radius: 40px;
  position: relative;
  color: #fff;
`
const SearchBarInput = styled.input`
  font-family: 'Abel', sans-serif;
  font-size: 38px;
  position: absolute;
  left: 70px;
  top: 7px;
  border: 0;
  background: transparent;
  height: 40px;
  color: #fff;
  :focus {
    outline: none;
  }

  @media screen and (max-width: 720px) {
    font-size: 28px;
    color: #fff;
  }
`

class SearchBar extends Component {
  timeout = null

  doSearch = event => {
    this.setState({ value: event.target.value })
    clearTimeout(this.timeout)

    this.timeout = setTimeout(() => {
      this.props.callBack(this.state.value)
    }, 500)
  }
  state = {
    value: '',
  }

  render() {
    return (
      <SearchBarContainer>
        <SearchBarContent>
          <FontAwesome
            style={{
              position: 'absolute',
              left: '20px',
              top: '12px',
              color: '#fff',
            }}
            size='2x'
            name='search'
          ></FontAwesome>
          <SearchBarInput
            type='text'
            placeholder='Search'
            onChange={this.doSearch}
            value={this.state.value}
          ></SearchBarInput>
        </SearchBarContent>
      </SearchBarContainer>
    )
  }
}

export default SearchBar
