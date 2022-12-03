import React from 'react'
import { GameSection, GameColumn, GameRow, Wrapper, TopLine, MiddleLine, Heading, ImgWrapper, Img } from './InfoSection.elements'
import { Container, Button } from '../../globalStyles'
import { Link } from 'react-router-dom'


const InfoSection = ({ primary, lightBg, imgStart, lightTopLine, lightTextDesc,
buttonLabel, description, headline, lightText, topLine, start, img, alt }) => {
  return (
    <GameSection lightBg={lightBg}>
    <Container>
      <GameRow imgStart={imgStart}>
        <GameColumn>
          <Wrapper>
          <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
          <Heading lightText={lightText}>{headline}</Heading>
          <MiddleLine lightTextDesc={lightTextDesc}>{description}</MiddleLine>
          <Link to='/sign-up'>
            <Button big fontBig primary={primary}>
              {buttonLabel}
            </Button>
          </Link>
                </Wrapper>
            </GameColumn>
            <GameColumn>
            <ImgWrapper start={start}>
            <Img src={require('../../images/image.svg').default} alt={alt} />
          </ImgWrapper>
            </GameColumn>
        </GameRow>
    </Container>
    </GameSection>
  )
}

export default InfoSection
