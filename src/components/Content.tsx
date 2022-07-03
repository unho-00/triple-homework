import { memo, useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { stateContext, TyContent } from '../contexts/context'
import { appearance } from '../styles/animation'
import { BigText, BoldText } from '../styles/style'

const Container = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${appearance(100)}
`

function Item({ content, ms }: { content: TyContent; ms: number }) {
  const easeOutQuart = 1 - Math.pow(1 - ms / 2000, 5)

  return (
    <BigText>
      <BoldText>{Math.round(0 + content[0] * easeOutQuart)}</BoldText>
      <BoldText>{content[1]}</BoldText>
      {content[2]}
    </BigText>
  )
}

const start = new Date().getTime()

function Content() {
  const { contents } = useContext(stateContext)
  const [ms, setMs] = useState(0)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (new Date().getTime() - start < 2000) {
      timer.current = setTimeout(() => {
        setMs(new Date().getTime() - start)
      }, 60)
    } else {
      setMs(2000)
    }

    return () => {
      if (timer.current) {
        clearTimeout(timer.current)
      }
    }
  }, [ms])

  return (
    <Container>
      {contents.map((c: TyContent, idx) => (
        <Item ms={ms} content={c} key={`${idx}${c[2]}`} />
      ))}
    </Container>
  )
}

export default memo(Content)
