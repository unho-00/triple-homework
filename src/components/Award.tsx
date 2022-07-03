import { memo, useContext } from 'react'
import styled from 'styled-components'

import { images } from '../constant/image'
import { stateContext, TyAward } from '../contexts/context'
import { appearance } from '../styles/animation'
import { AwardFigure, Img, NormalText } from '../styles/style'

const Container = styled.article`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  ${appearance(200)}
`

const ItemContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`

const TextContainer = styled.div`
  & p {
    margin: 7px 0;
  }
`

function Item({ data }: { data: TyAward }) {
  return (
    <ItemContainer>
      <AwardFigure>
        <Img src={images[data[0]]} alt={data[0]} />
      </AwardFigure>
      <TextContainer>
        <NormalText>
          {data[1]}{' '}
          {data[0] === 'google' ? '구글 플레이스토어' : '애플 앱스토어'}
        </NormalText>
        <NormalText>{data[2]}</NormalText>
      </TextContainer>
    </ItemContainer>
  )
}

function Award() {
  const { awards } = useContext(stateContext)

  return (
    <Container>
      {awards.map((a: TyAward) => (
        <Item data={a} key={a[0]} />
      ))}
    </Container>
  )
}

export default memo(Award)
