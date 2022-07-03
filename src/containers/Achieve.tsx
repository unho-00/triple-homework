import { memo } from 'react'
import styled from 'styled-components'

import Triple from '../components/Triple'
import Content from '../components/Content'
import Award from '../components/Award'

const Container = styled.section`
  min-width: 1200px;
  width: 1200px;
  height: 200px;
  display: flex;
  align-items: space-between;
`

const ContentsContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

function Achieve() {
  return (
    <Container>
      <Triple />
      <ContentsContainer>
        <Content />
        <Award />
      </ContentsContainer>
    </Container>
  )
}

export default memo(Achieve)
