import styled from 'styled-components'

export const YearMonthText = styled.small`
  text-align: center;
  display: block;
  font-size: ${({ theme }) => theme.font.size.normal};
  color: ${({ theme }) => theme.color.grey};
`

export const BigText = styled.p`
  font-size: ${({ theme }) => theme.font.size.big};
`

export const BoldText = styled.strong`
  font-weight: ${({ theme }) => theme.font.weight.bold};
`

export const NormalText = styled.p`
  font-size: ${({ theme }) => theme.font.size.normal};
  font-weight: 700;
`

export const Img = styled.img`
  width: 100%;
  vertical-align: middle;
`

export const TripleFigure = styled.figure`
  width: 400px;
  margin-bottom: -50px;
`

export const AwardFigure = styled.figure`
  width: 50px;
`
