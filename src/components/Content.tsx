import { memo } from 'react'
import styled from 'styled-components'

const Container = styled.article`
  width: 100%;
  background-color: orange;
`

function Content() {
  return <Container />
}

export default memo(Content)
