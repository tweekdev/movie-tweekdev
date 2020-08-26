import React from 'react';
import styled from 'styled-components';


const LoadmorebtnContainer = styled.div` 
  background: #16d47b;
  width: 100%;
  min-height: 50px;
  text-align: center;
  color: #fff;
  cursor: pointer;
	transition: all 0.3s;
	:hover {
  opacity: 0.8;
}
`
const Text = styled.p` 
  font-family: 'Abel', sans-serif;
  font-size: 42px;
  padding: 20px;
`

const LoadMoreBtn = (props) => {
	return (
		<LoadmorebtnContainer onClick={props.onClick}>
		<Text>{props.text}</Text>
		</LoadmorebtnContainer>
	);
};

export default LoadMoreBtn;