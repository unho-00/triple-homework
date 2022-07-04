import styled from 'styled-components'

import Triple from '../components/Triple'
import Content from '../components/Content'
import Award from '../components/Award'

const Container = styled.section`
  min-width: 1200px;
  width: 1200px;
  display: flex;
  justify-content: center;
  gap: 180px;
`

const ContentsContainer = styled.div`
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

export default Achieve
