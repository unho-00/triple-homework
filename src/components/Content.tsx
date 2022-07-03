import { memo, useContext } from 'react'
import styled from 'styled-components'

import { stateContext } from '../contexts/context'
import { BigText, BoldText } from '../styles/style'

const Container = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

function Content() {
  const { contents } = useContext(stateContext)

  return (
    <Container>
      {contents.map((c, idx) => (
        <BigText key={`${c[0]}${c[1]}${idx}`}>
          <BoldText>{c[0]}</BoldText>
          {c[1]}
        </BigText>
      ))}
    </Container>
  )
}

export default memo(Content)
