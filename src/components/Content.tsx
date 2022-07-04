import { memo, useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { stateContext, TyContent } from '../contexts/context'
import { appearance } from '../styles/animation'
import { BigText, BigBoldText } from '../styles/style'

const Container = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${appearance(100)}
`

const start = new Date().getTime()

const easeOutQuart = (ms: number) => 1 - Math.pow(1 - ms / 2000, 5)

const StaticText = memo(function StaticText({
  content,
}: {
  content: TyContent
}) {
  return (
    <>
      <BigBoldText>{content[1]}</BigBoldText>
      <BigText>{content[2]}</BigText>
    </>
  )
})

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
        <div style={{ display: 'flex', flexDirection: 'row' }} key={idx}>
          <BigBoldText>{Math.round(0 + c[0] * easeOutQuart(ms))}</BigBoldText>
          <StaticText content={c} key={idx} />
        </div>
      ))}
    </Container>
  )
}

export default Content
