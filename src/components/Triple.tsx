import { useContext } from 'react'
import styled from 'styled-components'

import { images } from '../constant/image'
import { stateContext } from '../contexts/context'
import { appearance } from '../styles/animation'
import { Img, TripleFigure, YearMonthText } from '../styles/style'

const Container = styled.article`
  ${appearance(0)}
`

function Triple() {
  const { yearMonth } = useContext(stateContext)

  return (
    <Container>
      <TripleFigure>
        <Img src={images.triple} alt="triple" />
      </TripleFigure>
      <YearMonthText>{yearMonth}</YearMonthText>
    </Container>
  )
}

export default Triple
