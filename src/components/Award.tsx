import { memo } from 'react'
import styled from 'styled-components'

const Container = styled.article`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: black;
`

function Award() {
  return <Container />
}

export default memo(Award)
