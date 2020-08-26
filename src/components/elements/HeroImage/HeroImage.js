import React from 'react';
import styled from 'styled-components';
import './HeroImage.css';

const HeroImageContainer = styled.div`
  background-size: 100%, cover !important;
  background-position: center, center !important;
  width: 100%;
  height: 600px;
  position: relative;
  animation: animateHeroimage 1s;

@keyframes animateHeroimage {
  from {
      opacity:0;
  }
  to {
      opacity:1;
  }
}
`

const HeroImageContent = styled.div`
  max-width: 1280px;
  padding: 20px;
  margin: 0 auto;
`
const HeroImageContentText = styled.div`
  z-index: 100;
  max-width: 700px;
  position: absolute;
  bottom: 40px;
  margin-right: 20px;
  min-height: 100px;
  background: rgba(0, 0, 0, 0.0);
	color: #fff;
	@media screen and (max-width: 720px) {
		max-width: 100%;
	}
`
const Title = styled.h1`
  font-family: 'Abel', sans-serif;
  font-size: 48px;
	color: #fff;
	@media screen and (max-width: 720px) {
    font-size: 38px;
    color: #fff;
	}
`
const Text = styled.p`
  font-family: 'Abel', sans-serif;
  font-size: 22px;
  line-height: 26px;
	color: #fff;
	@media screen and (max-width: 720px) {
    font-size: 16px;
    line-height: 20px;
    color: #fff;
  }
`

const HeroImage=(props)=> {
	return ( <HeroImageContainer style={{
		background: `linear-gradient(to bottom, rgba(0,0,0,0)
		39%, rgba(0,0,0,0)
		41%, rgba(0,0,0,0.65)
		100%), url('${props.image}'), #1c1c1c`
	}}>
		<HeroImageContent>
			<HeroImageContentText>
				<Title>{props.title}</Title>
				<Text>{props.text}</Text>
			</HeroImageContentText>
		</HeroImageContent>
	</HeroImageContainer> );
}

;

export default HeroImage;