import { memo } from 'react'
import styled from 'styled-components'

const Container = styled.article`
  width: 50%;
`

function Triple() {
  return <Container />
}

export default memo(Triple)
